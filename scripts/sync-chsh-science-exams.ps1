$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$destinationRoot = Join-Path $root "files\science-class\chsh"
$archiveUrl = "https://www.chsh.chc.edu.tw/p/412-1009-4510.php"
$archive = Invoke-WebRequest -Uri $archiveUrl -UseBasicParsing

foreach ($yearLink in ($archive.Links | Where-Object { $_.href -match 'c4510\.php' })) {
    if ($yearLink.outerHTML -notmatch '(?<!\d)(?<year>10\d|11[0-5])(?!\d)') { continue }
    $year = $Matches.year
    $detail = Invoke-WebRequest -Uri $yearLink.href -UseBasicParsing
    $yearDirectory = Join-Path $destinationRoot $year
    New-Item -ItemType Directory -Force $yearDirectory | Out-Null
    $downloaded = 0

    foreach ($link in ($detail.Links | Where-Object { $_.href -match 'Action=downloadfile' -and $_.outerHTML -notmatch '批次下載附件' })) {
        if ($link.outerHTML -notmatch 'title="(?<name>[^"]+)"') { continue }
        $fileName = [Net.WebUtility]::HtmlDecode($Matches.name.Trim()) + ".rar"
        $fileUri = [Uri]::new([Uri]$yearLink.href, $link.href)
        $target = Join-Path $yearDirectory $fileName
        try {
            Invoke-WebRequest -Uri $fileUri.AbsoluteUri -OutFile $target -UseBasicParsing
            $downloaded++
        } catch {
            Write-Warning "Skipped unavailable file: $fileName"
        }
    }
    Write-Host "$year`: $downloaded files"
}
