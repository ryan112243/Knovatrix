$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$destinationRoot = Join-Path $root "files\science-class\cysh"
$archiveUrls = @(
    "https://www.cysh.cy.edu.tw/p/403-1008-255-1.php?Lang=zh-tw",
    "https://www.cysh.cy.edu.tw/p/403-1008-255-2.php?Lang=zh-tw"
)

New-Item -ItemType Directory -Force $destinationRoot | Out-Null
$detailPages = @{}
foreach ($archiveUrl in $archiveUrls) {
    $archive = Invoke-WebRequest -Uri $archiveUrl -UseBasicParsing
    foreach ($link in ($archive.Links | Where-Object { $_.href -match 'r255\.php' })) {
        if ($link.outerHTML -match '(?<!\d)(?<year>10\d|11[0-5])(?!\d)') {
            $detailPages[$link.href.Trim()] = $Matches.year
        }
    }
}

foreach ($detailUrl in $detailPages.Keys) {
    $detail = Invoke-WebRequest -Uri $detailUrl -UseBasicParsing
    $year = $detailPages[$detailUrl]
    $yearDirectory = Join-Path $destinationRoot $year
    New-Item -ItemType Directory -Force $yearDirectory | Out-Null
    $downloaded = 0

    foreach ($link in ($detail.Links | Where-Object { $_.outerHTML -match '\.pdf</a>' })) {
        $fileUri = [Uri]::new([Uri]$detailUrl, $link.href.Trim())
        if ($link.outerHTML -notmatch '>(?<name>[^<>]+\.pdf)</a>') { continue }
        $fileName = [Net.WebUtility]::HtmlDecode($Matches.name.Trim())
        $target = Join-Path $yearDirectory $fileName
        try {
            Invoke-WebRequest -Uri $fileUri.AbsoluteUri -OutFile $target -UseBasicParsing
            $downloaded++
        } catch {
            Write-Warning "Skipped unavailable file: $fileName"
        }
    }
    Write-Host "$year`: $downloaded new files"
}
