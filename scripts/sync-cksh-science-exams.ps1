$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$destinationRoot = Join-Path $root "files\science-class\cksh"
$pageUrl = "https://sites.google.com/gl.ck.tp.edu.tw/scienter/%E6%AD%B7%E5%B1%86%E8%A9%A6%E9%A1%8C"
$pageFile = [IO.Path]::GetTempFileName()

try {
    & curl.exe -L --fail --silent --show-error $pageUrl -o $pageFile
    $content = Get-Content -LiteralPath $pageFile -Raw -Encoding UTF8
    $linkPattern = '<a[^>]+href="https://drive\.google\.com/file/d/(?<id>[^/]+)/view[^\"]*"[^>]*>(?<inner>[\s\S]*?)</a>'
    $links = [regex]::Matches($content, $linkPattern)
    $counts = @{}

    foreach ($link in $links) {
        $prefixStart = [Math]::Max(0, $link.Index - 5000)
        $prefix = $content.Substring($prefixStart, $link.Index - $prefixStart)
        $plainPrefix = [Net.WebUtility]::HtmlDecode([regex]::Replace($prefix, '<[^>]+>', ''))
        $yearMatches = [regex]::Matches($plainPrefix, '(?<!\d)(?<year>10\d|11[0-5])\x5B78\x5E74\x5EA6')
        if ($yearMatches.Count -eq 0) { continue }
        $year = $yearMatches[$yearMatches.Count - 1].Groups['year'].Value
        $labelHtml = $link.Groups['inner'].Value
        $label = [Net.WebUtility]::HtmlDecode([regex]::Replace($labelHtml, '<[^>]+>', '')).Trim()
        if ([string]::IsNullOrWhiteSpace($label)) { $label = 'exam' }
        $safeLabel = $label -replace '[\\/:*?"<>|]', '-'
        $yearDirectory = Join-Path $destinationRoot $year
        New-Item -ItemType Directory -Force $yearDirectory | Out-Null
        $target = Join-Path $yearDirectory "$year-$safeLabel.pdf"
        $downloadUrl = "https://drive.usercontent.google.com/download?id=$($link.Groups['id'].Value)&export=download&confirm=t"
        & curl.exe -L --fail --silent --show-error $downloadUrl -o $target
        if ($LASTEXITCODE -eq 0) { $counts[$year] = 1 + [int]$counts[$year] }
    }

    foreach ($year in ($counts.Keys | Sort-Object)) {
        Write-Host "$year`: $($counts[$year]) files"
    }
} finally {
    Remove-Item -LiteralPath $pageFile -Force -ErrorAction SilentlyContinue
}
