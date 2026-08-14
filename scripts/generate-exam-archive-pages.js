const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "exam-year-resources.js"), "utf8"), context, { filename: "exam-year-resources.js" });

const siteRoot = "https://ryan112243.github.io/Knovatrix";
const archives = [
  {
    key: "junior",
    slug: "junior-high-cap",
    title: "國中教育會考歷屆試題",
    shortTitle: "會考歷屆",
    description: "依年度整理國中教育會考各科試題、參考答案與官方公開資料，方便學生、家長與教師快速查找。",
    spa: `${siteRoot}/#/learn/junior`
  },
  {
    key: "senior",
    slug: "gsat-ast",
    title: "學測／分科測驗歷屆試題",
    shortTitle: "學測／分科歷屆",
    description: "依學年度整理學科能力測驗、分科測驗與歷史指考的試題、參考答案及官方公開資料。",
    spa: `${siteRoot}/#/learn/senior`
  }
];

const escapeHtml = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const pageShell = ({ title, description, canonical, breadcrumb, body, structuredData }) => `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow">
  <meta name="theme-color" content="#102f2b">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Knovatrix">
  <meta property="og:locale" content="zh_TW">
  <meta name="twitter:card" content="summary">
  <title>${escapeHtml(title)}</title>
  <link rel="icon" href="${siteRoot}/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${siteRoot}/styles.css?v=exam-archives-20260814-1">
</head>
<body>
  <a class="skip-link" href="#main-content">跳至主要內容</a>
  <header class="site-header">
    <a class="brand" href="${siteRoot}/#/" aria-label="Knovatrix 首頁"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span><b>Knovatrix</b><small>學習資源與刷題</small></span></a>
    <a class="button secondary archive-home-button" href="${siteRoot}/#/">回主網站</a>
  </header>
  <main id="main-content" tabindex="-1">
    <section class="page-hero"><div class="wrap"><div class="breadcrumbs">${breadcrumb}</div><h1>${escapeHtml(title.replace("｜Knovatrix", ""))}</h1><p class="lead">${escapeHtml(description)}</p></div></section>
    ${body}
  </main>
  <footer class="site-footer"><div class="footer-brand"><span class="brand-mark small" aria-hidden="true"><i></i><i></i><i></i><i></i></span><div><b>Knovatrix</b><small>國小到高中 學習資源與刷題</small></div></div><div class="footer-links"><a href="${siteRoot}/#/about">關於我們</a><a href="${siteRoot}/catalog.html">網站索引</a><a href="${siteRoot}/#/contribute">意見與共創</a></div><p>© 2026 Knovatrix · 公開測試版 · 版本 v1.0.1</p></footer>
  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
</body>
</html>`;

const allUrls = [
  `${siteRoot}/`,
  `${siteRoot}/catalog.html`,
  `${siteRoot}/science-class-exams.html`
];

for (const archive of archives) {
  const resources = context.window.yearlyExamResources[archive.key] || [];
  const grouped = new Map();
  for (const item of resources) {
    const year = item.title.match(/^(\d{2,3})/)?.[1];
    if (!year) continue;
    if (!grouped.has(year)) grouped.set(year, []);
    grouped.get(year).push(item);
  }
  const years = [...grouped.keys()].sort((a, b) => Number(b) - Number(a));
  const archiveDir = path.join(root, "exam-archives", archive.slug);
  fs.mkdirSync(archiveDir, { recursive: true });
  const archiveUrl = `${siteRoot}/exam-archives/${archive.slug}/`;
  allUrls.push(archiveUrl);

  const yearCards = years.map(year => {
    const yearUrl = `${archiveUrl}${year}/`;
    const yearLabel = archive.key === "junior" ? `${year} 年` : `${year} 學年度`;
    return `<a class="public-resource-card" href="${yearUrl}"><span class="resource-badge official">${yearLabel}</span><b>${archive.key === "junior" ? `${year} 年國中教育會考` : `${year} 學年度學測／分科測驗`}</b><p>共整理 ${grouped.get(year).length} 份試題、答案或官方資料。</p><small>查看年度總頁 →</small></a>`;
  }).join("");

  const overviewBody = `<section class="section"><div class="wrap"><div class="archive-page-actions"><a class="button" href="${archive.spa}">回到學習區</a></div><div class="rights-banner archive-rights"><b>年度索引</b><p>選擇學年度後，可查看該年度已整理的原始公開試題與答案連結。</p></div><div class="public-resource-grid archive-year-grid">${yearCards}</div></div></section>`;
  const overviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: archive.title,
    description: archive.description,
    url: archiveUrl,
    inLanguage: "zh-Hant",
    hasPart: years.map(year => ({ "@type": "CollectionPage", name: `${year} ${archive.shortTitle}`, url: `${archiveUrl}${year}/` }))
  };
  fs.writeFileSync(path.join(archiveDir, "index.html"), pageShell({
    title: `${archive.title}｜Knovatrix`,
    description: archive.description,
    canonical: archiveUrl,
    breadcrumb: `<a href="${siteRoot}/#/">首頁</a>　/　${escapeHtml(archive.shortTitle)}`,
    body: overviewBody,
    structuredData: overviewStructuredData
  }));

  for (const year of years) {
    const yearDir = path.join(archiveDir, year);
    fs.mkdirSync(yearDir, { recursive: true });
    const yearUrl = `${archiveUrl}${year}/`;
    allUrls.push(yearUrl);
    const items = grouped.get(year);
    const yearTitle = archive.key === "junior" ? `${year} 年國中教育會考歷屆試題` : `${year} 學年度學測／分科測驗歷屆試題`;
    const yearDescription = `${yearTitle}，收錄 ${items.length} 份各科試題、參考答案與官方公開資料。`;
    const cards = items.map(item => `<a class="public-resource-card" href="${escapeHtml(item.file || item.url)}" target="_blank" rel="noopener noreferrer"><span class="resource-badge ${escapeHtml(item.status || "official")}">${escapeHtml(item.badge || "官方公開來源")}</span><b>${escapeHtml(item.title)}</b><p>${escapeHtml(item.detail || "由原發布單位公開的試題或答案資源。")}</p><small>開啟原始公開檔案 ↗</small></a>`).join("");
    const yearBody = `<section class="section"><div class="wrap"><div class="archive-page-actions"><a class="button secondary" href="${archiveUrl}">返回歷屆總頁</a><a class="button" href="${archive.spa}">回到學習區</a></div><div class="rights-banner archive-rights"><b>檔案權利與存取說明</b><p>試題與答案的權利歸原出題方或發布單位所有；本站僅整理原始公開連結。若來源停止分享，請洽原發布單位。</p></div><h2 class="archive-resource-heading">${escapeHtml(year)} 學年度公開資源</h2><div class="public-resource-grid">${cards}</div></div></section>`;
    const yearStructuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: yearTitle,
      description: yearDescription,
      url: yearUrl,
      inLanguage: "zh-Hant",
      isPartOf: { "@type": "CollectionPage", name: archive.title, url: archiveUrl }
    };
    fs.writeFileSync(path.join(yearDir, "index.html"), pageShell({
      title: `${yearTitle}｜Knovatrix`,
      description: yearDescription,
      canonical: yearUrl,
      breadcrumb: `<a href="${siteRoot}/#/">首頁</a>　/　<a href="${archiveUrl}">${escapeHtml(archive.shortTitle)}</a>　/　${escapeHtml(year)} 學年度`,
      body: yearBody,
      structuredData: yearStructuredData
    }));
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls.map((url, index) => `  <url><loc>${url}</loc><lastmod>2026-08-14</lastmod><changefreq>${index < 3 ? "weekly" : url.endsWith("junior-high-cap/") || url.endsWith("gsat-ast/") ? "monthly" : "yearly"}</changefreq><priority>${index === 0 ? "1.0" : index < 3 ? "0.8" : url.endsWith("junior-high-cap/") || url.endsWith("gsat-ast/") ? "0.9" : "0.7"}</priority></url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "search-console-links.txt"), `${allUrls.join("\n")}\n`);
console.log(`Generated ${allUrls.length - 3} exam archive pages.`);