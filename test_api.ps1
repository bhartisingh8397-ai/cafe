$body = @{
    name = "Ananya Sharma"
    email = "ananya@example.com"
    subject = "College Project Meeting"
    message = "We would like to book a quiet table for 4 people this weekend."
} | ConvertTo-Json

Write-Output "Sending POST /api/contact..."
$response = Invoke-RestMethod -Uri "http://localhost:8080/api/contact" -Method Post -Body $body -ContentType "application/json"
$response | ConvertTo-Json -Depth 5
