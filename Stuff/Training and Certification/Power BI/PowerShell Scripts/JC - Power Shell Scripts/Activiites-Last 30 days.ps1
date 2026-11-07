
<#
# log into Azure AD user account with hard-code user name and password
Write-Host("Step 1 : Login....")
$User = "robert.french@travelodge.co.uk"

$SecPasswd = ConvertTo-SecureString $PW -AsPlainText -Force
$myCred = New-Object System.Management.Automation.PSCredential($User,$SecPasswd)

#>

#This will prompt for the user to log in.  This way if have MFA then will be prompted for the code
Login-PowerBIServiceAccount

Write-Host("Step 1 : Login....Done")
#Loading Parametres

###############################################################################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-30)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-29)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-28)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-27)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-26)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-25)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-24)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-23)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-22)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-21)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-20)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-19)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-18)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-17)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-16)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-15)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-14)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-13)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-12)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-11)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-10)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-9)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-8)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-7)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-6)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-5)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-4)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-3)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################

#Date Load
$RetrieveDate = (Get-Date).AddDays(-2)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################


#Date Load
$RetrieveDate = (Get-Date).AddDays(-1)
$BasePath = "C:\PBI Logs\Data\"
$time = date($RetrieveDate) -Format "yyyyMMdd"
$Filename = date($RetrieveDate) -Format "yyyyMMdd"

#Export Paths
$Groupspath      = $BasePath + $Filename+"_Workspaces.json"
$ActivityLogsPath = $BasePath + $Filename+"_Activities.csv"
$CapacitiesPath = $BasePath + $Filename+"_Capacities.csv"
$RefreshablesPath = $BasePath + $Filename+"_Refreshables.csv"
$GatewaysPath = $BasePath + $Filename+"_DataGateway.csv"
$DatasourcesPath = $BasePath + $Filename+"_Datasources.json"


Write-Host("Step 2 : Loading Activities....")

$RetrieveYearStr = $RetrieveDate.ToString('yyyy')
$RetrieveMonthStr = $RetrieveDate.ToString('MM')
$RetrieveDayStr = $RetrieveDate.ToString('dd')

# set Startdate & Enddate
$StartDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T00:00:00'
$EndDT = $RetrieveYearStr + '-' + $RetrieveMonthStr + '-' + $RetrieveDayStr + 'T23:59:59'


# Function to retrive power bi activities
$ActivityLogs = Get-PowerBIActivityEvent -StartDateTime $StartDt -EndDateTime $EndDT | ConvertFrom-Json
# retrive activities datas
$ActivityLogSchema = $ActivityLogs | `
    Select-Object Id,RecordType,CreationTime,Operation,OrganizationId,UserType,UserKey,Workload, `
        UserId,ClientIP,UserAgent,Activity,ItemName,WorkspaceName,DatasetName,ReportName, `
        WorkspaceId,CapacityId,CapacityName,DataflowId,DataflowName,DashboardName,AppName,ObjectId,DatasetId,ReportId,IsSuccess, `
        ReportType,RequestId,ActivityId,AppReportId,DistributionMethod,ConsumptionMethod, `
        @{Name="RetrieveDate";Expression={$RetrieveDate}}

# Exporting Activities Data
$ActivityLogSchema | Export-Csv $ActivityLogsPath 
Write-Host("Step 2 : Loading Activities....Done")
################## END ###########################################
