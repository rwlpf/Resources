
# Connect to a Power BI Service Account and store credentials
#$Account = Connect-PowerBIServiceAccount

# Ask for input data
#$WorkspacesPath = Read-Host -Prompt "Please enter workspace data file path."
#$PremiumCapacityID = Read-Host -Prompt "Please enter your premium capacity id."
$WorkspacesPath = "C:\Users\christopher.p\OneDrive - Quorum\Desktop\Clients\Travelodge\PowerShell Scripts\workspace_data.xlsx"
$Workspaces = Import-Excel $WorkspacesPath



$WorkspaceID = @()
$WorkspaceUserID = @()
$WorkspaceErrorLog = @()
$UserErrorLog = @()
$PipelineNames = @()
$Pipelines = @()

# Remove the development stage suffix from workspace name and create development pipelines
# foreach ($pl in ($Workspaces.Workspaces | Get-Unique)){

#     $PipelineNames +=  $pl.Remove($pl.LastIndexOf("-"))

# }
# foreach ($uqpl in ($PipelineNames | select -Unique)){

#     $PipelineURL = "https://api.powerbi.com/v1.0/myorg/pipelines"

#     $PipelineAPIBody = @{
#         "displayName"= "$uqpl";
#     }

#     $PipelineInfo = Invoke-PowerBIRestMethod -Url $PipelineURL -Method POST -Body ($PipelineAPIBody | ConvertTo-Json) | ConvertFrom-Json

#     $Pipelines += [PSCustomObject]@{
#         PipelineID = $PipelineInfo.id
#         PipelineName = $PipelineInfo.displayName
#     }

# }


foreach ($ws in ($Workspaces.Workspaces | Get-Unique)) {
    
    try{

        # Create workspaces
        # New-PowerBIWorkspace -Name $ws -ErrorAction Stop

        $wsid = Get-PowerBIWorkspace -name "$ws"

        # $CapacityURL = "https://api.powerbi.com/v1.0/myorg/groups/$($wsid.id)/AssignToCapacity"

        # $CapacityAPIBody = @{
        #     "capacityId" = "$PremiumCapacityID"
        # }

        # Invoke-PowerBIRestMethod -Url $CapacityURL -Method Post -Body ($CapacityAPIBody | ConvertTo-Json)

        $WorkspaceID += [PSCustomObject]@{ 
    
            workspace    = $ws
            workspace_id = $wsid.id
    
        }

        # Assign workspaces to development stage of the pipeline
        # foreach ($pl in $Pipelines) {

        #     if ($pl.PipelineName -eq $ws.Remove($ws.LastIndexOf("-"))) {

        #         if ($ws -match "PROD$") {

        #             $StageOrder = 2

        #         }
        #         elseif ($ws -match "UAT$") {
                
        #             $StageOrder = 1

        #         }
        #         elseif ($ws -match "DEV$") {
                
        #             $StageOrder = 0

        #         }

        #         $PipelineAssignmentURL = "https://api.powerbi.com/v1.0/myorg/pipelines/$($pl.PipelineID)/stages/$StageOrder/assignWorkspace"

        #         $AssignmentAPIBody = @{
        #             "workspaceId"= "$($wsid.id)";
        #         }

        #         Invoke-PowerBIRestMethod -Url $PipelineAssignmentURL -Method POST -Body ($AssignmentAPIBody | ConvertTo-Json) 

        #     }
        # }
    
    }catch{

        $WorkspaceErrorLog += [PSCustomObject]@{ 

            Name = $ws

        }

    }

}

foreach ($user in $Workspaces){

    foreach ($ws in $WorkspaceID){

        if ($ws.workspace -eq $user.workspaces){

            $WorkspaceUserID += [PSCustomObject]@{ 
    
                workspaces    = $user.workspaces
                workspace_id = $ws.workspace_id
                users = $user.users
                privilege = $user.privilege
        
            }

        }
    
    }

}

# Assign user permissions to workspaces
foreach ($u in $WorkspaceUserID){

    try{

        
        $userjson = @{
            "groupUserAccessRight"= $u.privilege
            "identifier"= $u.id
            "principalType"= "Group"
        }
        Invoke-PowerBIRestMethod -Url "https://api.powerbi.com/v1.0/myorg/groups/$u.workspace_id/users" -Method Post -Body $userjson

        # Add-PowerBIWorkspaceUser -Scope Organization  `
        #                          -Id $u.workspace_id `
        #                          -UserPrincipalName $u.users `
        #                          -AccessRight $u.privilege `
        #                          -ErrorAction Stop
        
    }catch{

        $UserErrorLog += [PSCustomObject]@{
            
            WorkspaceID = $u.workspace_id
            User = $u.users

        }

    }

    # Remove-PowerBIWorkspaceUser -Scope Organization `
    #                             -Id $u.workspace_id `
    #                             -UserEmailAddress $Account.UserName

    # Remove-PowerBIWorkspaceUser -Scope Organization `
    #                             -Id $user.workspace_id `
    #                             -UserEmailAddress "Olivia.wise@travelodge.co.uk"

    # Remove-PowerBIWorkspaceUser -Scope Organization `
    #                             -Id $user.workspace_id `
    #                             -UserEmailAddress "Mark.adamson@travelodge.co.uk"

}

Add-PowerBIWorkspaceUser -Id "720f1cd4-99f9-47c2-bd81-244ca8e0ff1e" `
                                 -UserPrincipalName "RBAC-Systems-PowerBI-WS-Enterprise-DEV-Admin"`
                                 -AccessRight "Admin"
                                 