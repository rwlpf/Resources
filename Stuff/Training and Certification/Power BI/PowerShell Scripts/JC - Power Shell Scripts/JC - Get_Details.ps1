cls

<#
#don't forget to install the shell modulecls
Install-Module MicrosoftPowerBIMgmt.Admin
Install-Module MicrosoftPowerBIMgmt.Capacities
Install-Module MicrosoftPowerBIMgmt.Data
Install-Module MicrosoftPowerBIMgmt.Profile
Install-Module MicrosoftPowerBIMgmt.Reports
Install-Module MicrosoftPowerBIMgmt.Workspaces
#>

# A function that adds an ingestion date field onto a Json file
function Add-DateFieldToJson {
    [CmdletBinding()]
    param (
        [Parameter()]
        [String]
        $JsonString,
        [String]
        $DateString
    )

    $DateField = '{"ingestionDate":"'+$DateString+'",'
    $JsonString = $DateField + $JsonString.substring(1)

    return $JsonString
}

# A function that takes a URI, adds an ingestion date field to the json file, then loads the file into a specified file path
function Export-PowerBIAPIUri {
    [CmdletBinding()]
    param (
        [Parameter()]
        [string]
        $Uri,
        [string]
        $Filepath
    )
    $MyData = Invoke-PowerBIRestMethod -Url $Uri -Method Get 

    $MyData = Add-DateFieldToJson -JsonString $MyData -DateString $DateToday | ConvertFrom-Json

    $MyData | ConvertTo-Json -Depth 20 | Out-File $Filepath

}




# log into Azure AD user account with hard-code user name and password
Write-Host("Step 1 : Login....")
# $User = "robert.french@enablegroup.org.uk"


# $SecPasswd = ConvertTo-SecureString $PW -AsPlainText -Force
# $myCred = New-Object System.Management.Automation.PSCredential($User,$SecPasswd)

#This will prompt for the user to log in.  This way if have MFA then will be prompted for the code
Login-PowerBIServiceAccount

Write-Host("Step 1 : Login....Done")
#Loading Parameters

#Date Load
$DateToday = Get-Date -Format "yyyy-MM-dd"
#$BasePath = "C:\PBI Logs_Enable\Data\"
#$BasePath = "C:\Users\Robert.French\OneDrive - Quorum\Enable\General\Power BI Environment\PBI Logs\Data\"

$BasePath = ".\File\Path\Goes\Here\"

$DateFileFormat = $DateToday | Get-Date -Format "yyyyMMdd"

#Export Paths

# We loop through the following list, which creates the appropriate folders and sets the paths that the files will be written to.
$DetailsList = @("Activities", "Capacities", "Refreshables", "Gateways", "Datasources", "Workspaces")
$Paths = @{}
foreach ($Detail in $DetailsList) {

    # We store the paths in a hash table (eg. $Paths['Gateways'] = $Basepath + 'Gateways\20240628_Gateways.json)
    $Paths[$Detail] = "$BasePath$Detail\$($DateFileFormat)_$Detail.json"

    # We check to see if a given folder exists, and if it doesn't, we create a new one.
    if (-not (Test-Path $BasePath+$Detail)) {
        New-Item -Path $BasePath -Name $Detail -ItemType "directory"
    }
}
Write-Host("Step 2 : Loading Activities....")

for ($i = 0; $i -lt 30; $i++) {

    # Each loop we will be going back a day
    $Date = (Get-Date).AddDays(-$i)

    # Each file will have the date of activites in the file name
    $DateFileFormat = $Date | Get-Date -Format "yyyyMMdd"
    $ActivityLogsPath = $BasePath + "Activities\"+$DateFileFormat+"_Activities.csv"
    
    # The API only takes dates of ISO format (eg. 2024-06-28T15:40:36)
    # In addition, the date of the start and end time must be equal
    # eg. 2024-06-28T22:30:00 - 2024-06-28T23:30:00 is fine, but 2024-06-28T23:30:00 - 2024-07-28T00:30:00 is not
    $Date = $Date | Get-Date -Format "yyyy-MM-dd"
    $StartDT = $Date + 'T00:00:00'
    $EndDT = $Date + 'T23:59:59'

    Write-Host("Loading Activities for $Date...")

    # Function invokes API and retrives Power BI activities
    $ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT 
    if ($null -ne $ActivityLogs) {
        $ActivityLogs = $ActivityLogs | ConvertFrom-Json

        # We select certain columns, and append a date column onto the table
        $ActivityLogSchema = $ActivityLogs | `
            Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
                UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
                WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
                ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
                @{Name="Date";Expression={$Date}}

        # Exporting Activities Data
        $ActivityLogSchema | Export-Csv $ActivityLogsPath 
    }

}
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################



################## GET WORKSPACES DATA###########################################
Write-Host("Step 3 : Loading Groups....")
$GroupsURI = '/admin/groups?$top=5000&' + '$filter=type ne' + " 'PersonalGroup'" + ' and state eq' + " 'Active'" + '&$expand=users,reports,dashboards,datasets,dataflows'

$GroupsData = Invoke-PowerBIRestMethod -Url $GroupsURI -Method Get 

# We add an ingestion date field
$GroupsData = Add-DateFieldToJson -JsonString $GroupsData -DateString $DateToday | ConvertFrom-Json

# We get a list of Datasets Ids that we will be looping over later
$DatasetIdList = $GroupsData.value.datasets.id

# Write to file
$GroupsData | ConvertTo-Json -Depth 20 | out-File $Paths['Workspaces']
Write-Host("Step 3 : Loading Groups....Done")
################## END ###########################################



################## GET CAPACITIES DATA###########################################
Write-Host("Step 4 : Loading Capacities.....")
$CapacitiesURI = '/admin/capacities'

# Pulls data from the API, adds an ingestion date field, and writes it to a file
Export-PowerBIAPIUri -Uri $CapacitiesURI -Filepath $Paths['Capacities']

Write-Host("Step 4 : Loading Capacities.....Done")
################## END ###########################################



################## GET Refreshables DATA###########################################
Write-Host("Step 5 : Loading Refreshables.....")
$RefreshablesURI = 'admin/capacities/refreshables?$expand=capacity,group'

# Pulls data from the API, adds an ingestion date field, and writes it to a file
Export-PowerBIAPIUri -Uri $RefreshablesURI -Filepath $Paths['Refreshables']

Write-Host("Step 5 : Loading Refreshables.....Done")
################## END ###########################################



################## GET Gateways DATA###########################################
Write-Host("Step 6:  Loading Gateways.....")
$GatewaysURI = 'https://api.powerbi.com/v2.0/myorg/gatewayClusters?$expand=memberGateways'

# Pulls data from the API, adds an ingestion date field, and writes it to a file
Export-PowerBIAPIUri -Uri $GatewaysURI -Filepath $Paths['Gateways']

Write-Host("Step 6:  Loading Gateways.....Done")
################## END ###########################################

################## GET DataSource DATA###########################################
Write-Host("Step 7 : Loading Datasources.....")
# We use i to keep track of how many datasets we have completed
$i = 0
$NoOfDatasets = $DatasetIdList.length

# We will be looping over each dataset, and appending the source information onto the $Obj_Store array. This will then be converted into a json file.
$Obj_Store = @()
ForEach ($DatasetId in $DatasetIdList){

    # Pull the Datasource information for each dataset via the API
    $DatasourceUri = "/admin/datasets/"+$DatasetId+"/datasources"
    $DatasourceCall = Invoke-PowerBIRestMethod -Url $DatasourceUri -Method Get

    # Extract the 'value' property
    $DatasourceValue = ($DatasourceCall | ConvertFrom-Json).value

    $i++
    Write-Host("Dataset $i/$NoOfDatasets, Guid: $DatasetId, No. of sources: $($DatasourceValue.length)")

    # Checks if the 'value' property is empty (ie. it is always an array, and a quick way of checking if an array is empty is seeing if it's length is zero)
    if (0 -ne $DatasourceValue.length){

        # We add on a field that states the Dataset Guid that the datasources are sources of
        $DatasourceValue | Add-Member -NotePropertyName targetDatasetId -NotePropertyValue $DatasetId

        # We add on a field that states the ingestion date
        $DatasourceValue | Add-Member -NotePropertyName ingestionDate -NotePropertyValue $DateToday

        # We append each value into $Obj_Store
        $Obj_Store += $DatasourceValue
    }

}

# Writes $Obj_Store to a file
$Obj_Store | ConvertTo-Json -Depth 20 | Out-File $Paths['Datasources']
Write-Host("Step 7 : Loading Datasources.....Done")





<#
#Refresh dataset
Write-Host("Step 8 : Starting Refresh dataset.....")
$Dataset_Id = '*********************'
$MailFailureNotify = @{"notifyOption"="MailOnFailure"}
$Refresh_URI= "https://api.powerbi.com/v1.0/myorg/datasets/"+$Dataset_Id+"/refreshes"
$RefreshCall = Invoke-PowerBIRestMethod -Url $Refresh_URI -Method Post -Body $MailFailureNotify
Write-Host("Step 8 : Starting Refresh dataset.....Done")
#>