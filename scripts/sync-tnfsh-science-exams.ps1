$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$destinationRoot = Join-Path $root "files\science-class\tnfsh"
$baseUrl = "https://www.tnfsh.tn.edu.tw"
$archiveUrls = @(
    "$baseUrl/sub/latestevent/index.aspx?Parser=9%2C31%2C200%2C%2C%2C%2C%2C%2C%2C%2C0",
    "$baseUrl/sub/latestevent/index.aspx?Parser=9%2C31%2C200%2C%2C%2C%2C%2C%2C%2C%2C1"
)

New-Item -ItemType Directory -Force $destinationRoot | Out-Null
$detailPages = [Collections.Generic.HashSet[string]]::new()

foreach ($archiveUrl in $archiveUrls) {
    $archive = Invoke-WebRequest -Uri $archiveUrl -UseBasicParsing
    foreach ($link in ($archive.Links | Where-Object { $_.href -match 'Details\.aspx' })) {
        [void]$detailPages.Add([Uri]::new([Uri]$archiveUrl, $link.href).AbsoluteUri)
    }
}

foreach ($detailUrl in $detailPages) {
    $detail = Invoke-WebRequest -Uri $detailUrl -UseBasicParsing
    if ($detail.Content -notmatch '/(?<year>10\d|11[0-5])[^/"'']*\.pdf') {
        continue
    }
    $year = $Matches.year
    $yearDirectory = Join-Path $destinationRoot $year
    New-Item -ItemType Directory -Force $yearDirectory | Out-Null
    $downloaded = 0

    foreach ($link in ($detail.Links | Where-Object { $_.href -match '\.pdf$' })) {
        $fileUri = [Uri]::new([Uri]$baseUrl, $link.href)
        $fileName = [Uri]::UnescapeDataString([IO.Path]::GetFileName($fileUri.AbsolutePath))
        $target = Join-Path $yearDirectory $fileName
        Invoke-WebRequest -Uri $fileUri.AbsoluteUri -OutFile $target -UseBasicParsing
        $downloaded++
    }

    Write-Host "$year`: $downloaded files"
}
