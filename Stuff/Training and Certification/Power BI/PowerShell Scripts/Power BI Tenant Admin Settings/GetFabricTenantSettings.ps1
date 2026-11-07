# Login-PowerBI

# Get today's date
$Date = Get-Date -Format "yyyy-MM-dd"

# Set the following variable to the appropriate file path that you want the Tenant Settings saved in
$FilePath = ".\File\Path\Goes\Here\"

# Provide a name for the folder that will contain the archived tenant settings
$ArchivedFolderName = "Archive Folder\"

# The name that the most recent tenant setting will be saved under
$FileName = "PowerBITenantAdminSettings.json"

# The name given to the archived tenant settings - eg. tenant settings on 2024-05-14 will
# be called 2024-05-14_PowerBITenantAdminSettings.json
$ArchivedFileName = "$Date`_$FileName"


# Uses the Fabric API to get the Tenant settings as a JSON
$response = Invoke-PowerBIRestMethod -Url "https://api.fabric.microsoft.com/v1/admin/tenantsettings" -Method Get

# Adds a Date field to the JSON
$DateField = '{"Date":"'+$Date+'",'
$response = $DateField + $response.substring(1)

# Formats the JSON file so that it is properly indented
$Output = $response |ConvertFrom-Json | ConvertTo-Json -Depth 100

# Prints the output of the API call.
Write-Output "Output = `n$Output`n"

# Writes the output to a file.
$Output | Out-File -FilePath $FilePath$FileName

$Output | Out-File -FilePath $FilePath$ArchivedFolderName$ArchivedFileName