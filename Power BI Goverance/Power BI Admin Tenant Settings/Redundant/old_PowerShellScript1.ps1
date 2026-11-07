Login-PowerBI


$Date = Get-Date -Format "yyyy-MM-dd"
$DateField = '{"Date":"'+$Date+'",'
# $FilePath = "./File/Path/Goes/Here/"
$FilePath = "C:\Users\Robert.French\OneDrive - Quorum\BI Team\General\Power BI Admin Tenant Settings - Enable\"
$FileName = $Date+"_EnableTenantSettings.json"

Write-Output -InputObject $FilePath$FileName

$response = Invoke-PowerBIRestMethod -Url "https://api.fabric.microsoft.com/v1/admin/tenantsettings" -Method Get
$response = $DateField + $response.substring(1)



$Output = $response |ConvertFrom-Json | ConvertTo-Json -Depth 100

# For seeing the output of the API call, feel free to comment out when you are happy with the output.
# Write-Output $Output

# For writing the output to a file. Uncomment and change the variable $FilePath to sent it to whatever location you desire.
$Output | Out-File -FilePath $FilePath$FileName