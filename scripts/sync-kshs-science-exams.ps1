$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$destinationRoot = Join-Path $root "files\science-class\kshs"
$baseUrl = "https://www.kshs.kh.edu.tw"
$archiveUrls = @(
    "$baseUrl/sub/form/index?Parser=2,34,211,,,,,,,,0",
    "$baseUrl/sub/form/index?Parser=2,34,211,,,,,,,,1"
)

New-Item -ItemType Directory -Force $destinationRoot | Out-Null
$detailPages = [Collections.Generic.HashSet[string]]::new()

foreach ($archiveUrl in $archiveUrls) {
    $archive = Invoke-WebRequest -Uri $archiveUrl -UseBasicParsing
    foreach ($link in ($archive.Links | Where-Object { $_.href -match '^Details' })) {
        [void]$detailPages.Add([Uri]::new([Uri]$archiveUrl, $link.href).AbsoluteUri)
    }
}

foreach ($detailUrl in $detailPages) {
    $detail = Invoke-WebRequest -Uri $detailUrl -UseBasicParsing
    if ($detail.Content -notmatch '(?<year>10\d|11[0-5])') { continue }
    $year = $Matches.year
    $yearDirectory = Join-Path $destinationRoot $year
    New-Item -ItemType Directory -Force $yearDirectory | Out-Null
    $downloaded = 0

    foreach ($link in ($detail.Links | Where-Object { $_.href -match '\.pdf(?:$|\?)' })) {
        $fileUri = [Uri]::new([Uri]$detailUrl, $link.href)
        $fileName = [Uri]::UnescapeDataString([IO.Path]::GetFileName($fileUri.AbsolutePath))
        if (-not $fileName.EndsWith('.pdf')) { continue }
        $target = Join-Path $yearDirectory $fileName
        Invoke-WebRequest -Uri $fileUri.AbsoluteUri -OutFile $target -UseBasicParsing
        $downloaded++
    }
    Write-Host "$year`: $downloaded files"
}
