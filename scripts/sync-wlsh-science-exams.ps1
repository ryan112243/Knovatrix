$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$destinationRoot = Join-Path $root "files\science-class\wlsh"
$pageUrl = "https://www.wlsh.tyc.edu.tw/p/404-1000-9975,c103-1.php"
$page = Invoke-WebRequest -Uri $pageUrl -UseBasicParsing

foreach ($link in ($page.Links | Where-Object { $_.href -match '\.pdf$' })) {
    if ($link.outerHTML -notmatch '(?<!\d)(?<year>10\d|11[0-5])(?!\d)') { continue }
    $year = $Matches.year
    $yearDirectory = Join-Path $destinationRoot $year
    New-Item -ItemType Directory -Force $yearDirectory | Out-Null
    $fileUri = [Uri]::new([Uri]$pageUrl, $link.href)
    $target = Join-Path $yearDirectory "$year-science-class-exam.pdf"
    Invoke-WebRequest -Uri $fileUri.AbsoluteUri -OutFile $target -UseBasicParsing
    Write-Host "$year`: 1 file"
}
