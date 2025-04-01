# Connect to a Power BI Service Account and store credentials
$User = Connect-PowerBIServiceAccount

$url = "https://api.powerbi.com/v1.0/myorg/admin/groups?%24top=5000&%24expand=reports%2Cdataflows%2Cdatasets%2Cusers&%24filter=type%20ne%20'PersonalGroup'%20and%20state%20eq%20'Active'"

# Get workspaces and datasets using the Power BI API
$Workspaces = Invoke-PowerBIRestMethod -Url $url -Method Get | ConvertFrom-Json

$ExportPath = Read-Host -Prompt "Please enter data file path you wish to export to."

# Create destination directory
$ExportFolder = New-Item -Path "$ExportPath\Tenant_Export\" -ItemType Directory

$ReportErrorLog   = @()
$DataflowErrorLog = @()
$WorkspaceUsers   = @()
$OrphanedDatasets = @()


# Check for any dataset that aren't refrence by a report
foreach ($ds in $Workspaces.value.datasets){

    If($ds.id -notcontains $Workspaces.value.report.datasetid){

        $OrphanedDatasets += [pscustomobject]@{

            DatasetName = $ds.name
            DatasetID   = $ds.id

        }

    }

}

foreach ($ws in $Workspaces.value){

    # Add user as admin to each workspace
    Add-PowerBIWorkspaceUser -Scope Organization -Id $ws.id -UserEmailAddress $User.UserName -AccessRight Admin

    # Create folder for each worksapce
    $WorkspacePath = New-Item -Path "$($ExportFolder.FullName)\$($ws.name)\" -ItemType Directory

    # Iterate through each workspace and store user info
    foreach ($u in $ws.users){

        $WorkspaceUsers += [pscustomobject]@{

            WorkspaceName = $ws.name
            WorkspaceID   = $ws.id
            UserName      = $u.displayName
            UserEmail     = $u.emailAddress
            AccessRights  = $u.groupUserAccessRight
            Identifier    = $u.Identifier
            PrincipalType = $u.principalType
    
        }

    }

    # Export dataflow as json and store any erros in log
    if ($ws.dataflows){
        foreach ($df in $ws.dataflows){

            try {

                Export-PowerBIDataflow -WorkspaceId $ws.id -Id $df.objectId -OutFile "$($WorkspacePath.FullName)\$($df.name).json" -ErrorAction Stop

            } catch {

                $DataflowErrorLog += [pscustomobject]@{

                    WorkspaceID  = $ws.id
                    DataflowName = $df.name
                    DataflowID   = $df.objectId
                    Error        = $_

                }

            }

        }

    }

    # Export Report as json and store any errors in log
    if($ws.reports){
        foreach ($r in $ws.reports) {

            try {

                Export-PowerBIReport -Id $r.id -OutFile "$($WorkspacePath.FullName)\$($r.name)_$($r.datasetId).pbix" -ErrorAction Stop

            } catch {

                $ReportErrorLog += [pscustomobject]@{

                    WorkspaceID = $ws.id
                    ReportName  = $r.name
                    ReportID    = $r.id
                    DatasetName = $r.datasetId
                    Error       = $_

                }

            }

        }

    }

}

# Collect export info and export files
$ExportInfo = [pscustomobject]@{

    TenantID              = $User.TenantId
    ExportDate            = Get-Date
    User                  = $User.UserName
    TotalWorkspaces       = $Workspaces.value.count
    TotalReportErrors     = $ReportErrorLog.Count
    TotalDataflowErrors   = $DataflowErrorLog.Count
    TotalOrphanedDatasets = $OrphanedDatasets.Count


} | Out-File -FilePath $ExportFolder\1_Export_Info.txt

$WorkspaceUsers   | Export-Csv -Path $ExportFolder\2_WorkspaceUsers.csv
$ReportErrorLog   | Export-Csv -Path $ExportFolder\3_ReportErrorLog.csv
$DataflowErrorLog | Export-Csv -Path $ExportFolder\4_DataflowErrorLog.csv
$OrphanedDatasets | Export-Csv -Path $ExportFolder\5_OrphanedDatasets.csv