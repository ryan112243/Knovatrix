$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$destinationRoot = Join-Path $root "files\science-class\tcfsh"
$archiveUrl = "https://tcfsh.tc.edu.tw/p/403-1076-4548-1.php"
$archiveFile = [IO.Path]::GetTempFileName()

try {
    & curl.exe -4 -L --fail --silent --show-error $archiveUrl -o $archiveFile
    $archiveContent = Get-Content -LiteralPath $archiveFile -Raw -Encoding UTF8
    $detailPages = @{}
    $detailMatches = [regex]::Matches($archiveContent, 'href="(?<url>https://tcfsh[^\"]+r4548\.php)"[^>]*>(?<tail>[\s\S]*?)</a>')
    foreach ($match in $detailMatches) {
        if ($match.Groups['tail'].Value -match '(?<!\d)(?<year>10\d|11[0-5])(?!\d)') {
            $detailPages[$match.Groups['url'].Value] = $Matches.year
        }
    }

    foreach ($detailUrl in $detailPages.Keys) {
        $year = $detailPages[$detailUrl]
        & curl.exe -4 -L --fail --silent --show-error $detailUrl -o $archiveFile
        $detailContent = Get-Content -LiteralPath $archiveFile -Raw -Encoding UTF8
        $yearDirectory = Join-Path $destinationRoot $year
        New-Item -ItemType Directory -Force $yearDirectory | Out-Null
        $downloaded = 0
        $fileMatches = [regex]::Matches($detailContent, '<a[^>]+href="(?<href>[^\"]+Action=downloadfile[^\"]+)"[^>]*>[\s\S]{0,500}?(?<name>[^<>]+\.pdf)</a>')

        foreach ($fileMatch in $fileMatches) {
            $href = [Net.WebUtility]::HtmlDecode($fileMatch.Groups['href'].Value)
            $fileName = [Net.WebUtility]::HtmlDecode($fileMatch.Groups['name'].Value.Trim())
            $fileUrl = [Uri]::new([Uri]$detailUrl, $href).AbsoluteUri
            $target = Join-Path $yearDirectory $fileName
            & curl.exe -4 -L --fail --silent --show-error $fileUrl -o $target
            if ($LASTEXITCODE -eq 0) { $downloaded++ }
        }
        Write-Host "$year`: $downloaded files"
    }
} finally {
    Remove-Item -LiteralPath $archiveFile -Force -ErrorAction SilentlyContinue
}
