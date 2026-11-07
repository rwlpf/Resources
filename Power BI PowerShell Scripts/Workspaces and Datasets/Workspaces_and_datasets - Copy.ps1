# https://community.powerbi.com/t5/Community-Blog/Get-dataset-list-with-PowerShell/ba-p/1604912

Connect-PowerBIServiceAccount

# $RefreshSchedule_URI = 'https://api.powerbi.com/v1.0/myorg/datasets/a6ce6f83-edc1-4875-945a-e1d3f00b99ca/refreshSchedule'

# Invoke-PowerBIRestMethod -Url $RefreshSchedule_URI -Method Get | ConvertFrom-Json

$Workspace = Get-PowerBIWorkspace -All


   ForEach ($workspace in $Workspace)

    {

    Write-Host $workspace.Name

    ForEach ($dataset in (Get-PowerBIDataset -WorkspaceId $workspace.Id))
    
        {

        Write-Host $dataset.id
        Write-Host $dataset.Name
        #   $RefreshSchedule_URI = "https://api.powerbi.com/v1.0/myorg/datasets/"+ $dataset.id +"/refreshSchedule"
          $RefreshSchedule_URI = 'https://api.powerbi.com/v1.0/myorg/datasets/'+ $dataset.id +'/refreshSchedule'
        #   Write-Host $RefreshSchedule_URI 
      
            Invoke-PowerBIRestMethod -Url $RefreshSchedule_URI -Method Get | ConvertFrom-Json 
            # Write-Host  $Output        

        }

    }

    $Dir = 'C:\temp\MyWorkspaceRefresh.csv'

     $DataSets | Export-Csv $Dir -NoTypeInformation -Encoding UTF8
    #  $Output | Export-Csv $Dir -NoTypeInformation -Encoding UTF8

   $Dir = 'C:\temp\MyWorkspace.csv'

    $DataSets | Export-Csv $Dir -NoTypeInformation -Encoding UTF8


#    Disconnect-PowerBIServiceAccount