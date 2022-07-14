# https://community.powerbi.com/t5/Community-Blog/Get-dataset-list-with-PowerShell/ba-p/1604912

Connect-PowerBIServiceAccount

$Workspace = Get-PowerBIWorkspace -All

$DataSets =

   ForEach ($workspace in $Workspace)

    {

    Write-Host $workspace.Name

    ForEach ($dataset in (Get-PowerBIDataset -WorkspaceId $workspace.Id))
    
        {


        #  $RefreshSchedule_URI = "https://api.powerbi.com/v1.0/myorg/datasets/"+ $dataset.id +"/refreshSchedule"
        #  $RefreshSchedule_URI = 'https://api.powerbi.com/v1.0/myorg/datasets/'+ $dataset.id +'/refreshSchedule'
        #  $myRestResult = Invoke-PowerBIRestMethod -Url $RefreshSchedule_URI -Method Get | ConvertFrom-Json
        #  Out-File $RefreshPath

        [pscustomobject]@{

            WorkspaceName = $Workspace.Name

            WorkspaceID = $workspace.Id

            DatasetName = $dataset.Name

            DatasetID = $dataset.Id

            DatasetIsRefreshable = $dataset.IsRefreshable
            
            RefreshSchedule_URI = "https://api.powerbi.com/v1.0/myorg/datasets/"+ $dataset.Id +"/refreshSchedule"
            # $RefreshCall = Invoke-PowerBIRestMethod -Url RefreshSchedule_URI -Method Get 

            # Write-Host $RefreshSchedule_URI 
            #DataSetRefreshSchedule = Invoke-PowerBIRestMethod -Url $RefreshSchedule_URI 

            # DatasetIsOnPremGatewayRequired = $dataset.TargetStorageMode

            # DataSetDataSource = Get-PowerBIDatasource -DatasetId $dataset.Id
            }

        }

    }

   $Dir = 'C:\temp\MyWorkspace.csv'

    $DataSets | Export-Csv $Dir -NoTypeInformation -Encoding UTF8

#    Disconnect-PowerBIServiceAccount