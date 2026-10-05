#!/usr/bin/env node
// Generate standalone pages for schools with published science-class resources.
// Usage: node scripts/generate-science-school-pages.js [output-root] [--overwrite]
// Preview: node scripts/generate-science-school-pages.js science-pages-preview
// Publish or refresh: node scripts/generate-science-school-pages.js . --overwrite
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const outputRoot = path.resolve(root, process.argv[2] || 'science-pages-preview');
const pagesRoot = path.join(outputRoot, 'science-class-exams');
const overwrite = process.argv[3] === '--overwrite';
const schools = [
  ['建國中學科學班', 'cksh'],
  ['北一女中科學班', 'fgsh'],
  ['師大附中科學班', 'ntnu'],
  ['武陵高中科學班', 'wlsh'],
  ['臺中一中科學班', 'tcfsh'],
  ['彰化高中科學班', 'chsh'],
  ['嘉義高中科學班', 'cysh'],
  ['臺南一中科學班', 'tnfsh'],
  ['高雄中學科學班', 'kshs'],
];
const dataFiles = [
  'science-exams.js', 'science-exam-files.js',
  'science-exam-files-cksh.js', 'science-exam-files-ntnu.js',
  'science-exam-files-kshs.js', 'science-exam-files-cysh.js',
  'science-exam-files-wlsh.js', 'science-exam-files-chsh.js',
  'science-exam-files-tcfsh.js', 'science-exam-files-fgsh.js',
];
const context = { window: {} };
for (const file of dataFiles) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));
const baseUrl = 'https://ryan112243.github.io/Knovatrix/';
const relativeFromOutput = (folder, target) => {
  let rel = path.relative(folder, path.join(root, target)).split(path.sep).join('/');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
};

for (const [, slug] of schools) {
  const folder = path.join(pagesRoot, slug);
  if (!overwrite && fs.existsSync(folder) && fs.readdirSync(folder).length) {
    throw new Error(`Refusing to overwrite non-empty school page directory: ${folder}`);
  }
}
fs.mkdirSync(pagesRoot, { recursive: true });

let generated = 0;
for (const [schoolName, slug] of schools) {
  const school = context.window.scienceClassExamCatalog[schoolName];
  const years = Object.entries(school?.files || {})
    .filter(([, files]) => Array.isArray(files) && files.length)
    .sort(([a], [b]) => Number(b) - Number(a));
  if (!years.length) continue;

  const folder = path.join(pagesRoot, slug);
  fs.mkdirSync(folder, { recursive: true });
  const pageUrl = `${baseUrl}science-class-exams/${slug}/`;
  const resourceYears = years.map(([year, files]) => {
    const links = files.map((file) => {
      const href = file.url || (file.path && relativeFromOutput(folder, file.path.replace(/\\/g, '/').replace(/\/{2,}/g, '/')));
      if (!href) return '';
      const external = /^https?:\/\//i.test(href);
      const note = file.path ? '本站檔案' : '公開來源';
      return `<li><a href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(file.label || '開啟試題')}</a><small>${note}</small></li>`;
    }).filter(Boolean).join('\n');
    return `<section class="year-card" aria-labelledby="year-${escapeHtml(year)}"><h2 id="year-${escapeHtml(year)}">${escapeHtml(year)} 學年度</h2><ul>${links}</ul></section>`;
  }).join('\n');

  const css = relativeFromOutput(folder, 'styles.css');
  const favicon = relativeFromOutput(folder, 'favicon.png');
  const logo = relativeFromOutput(folder, 'favicon.png');
  const listing = relativeFromOutput(folder, 'science-class-exams.html');
  const appRoute = `${relativeFromOutput(folder, 'index.html')}#/learn/junior-gifted?subject=${encodeURIComponent('科學班甄選考古題')}&school=${encodeURIComponent(schoolName)}&tab=files`;
  const html = `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(schoolName)}歷屆試題與公開範例｜Knovatrix</title>
  <meta name="description" content="Knovatrix 整理${escapeHtml(schoolName)}已公開的科學班甄選試題與範例，依學年度列出科目及官方來源，並標示資料性質。">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:title" content="${escapeHtml(schoolName)}歷屆試題與公開範例｜Knovatrix">
  <meta property="og:description" content="依學年度整理${escapeHtml(schoolName)}科學班甄選公開試題與範例來源。">
  <meta property="og:type" content="website"><meta property="og:url" content="${pageUrl}">
  <meta property="og:site_name" content="Knovatrix">
  <link rel="icon" href="${favicon}" type="image/png"><link rel="stylesheet" href="${css}">
  <style>
    .school-archive { max-width: 980px; margin: 0 auto; }
    .school-archive .lead { max-width: 760px; }
    .year-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; }
    .year-card { padding: 18px 20px; border: 1px solid var(--line); border-radius: 10px; background: var(--white); }
    .year-card h2 { margin: 0 0 12px; font-size: 20px; }
    .year-card ul { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
    .year-card li { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
    .year-card li small { flex: 0 0 auto; color: var(--muted); }
    .source-note { margin-top: 20px; padding: 16px 18px; border-left: 3px solid var(--forest-2); color: var(--muted); background: #f3f7f4; line-height: 1.7; }
    @media(max-width:700px){.year-grid{grid-template-columns:1fr}.year-card li{align-items:flex-start;flex-direction:column;gap:2px}}
  </style>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="${relativeFromOutput(folder, 'index.html')}" aria-label="Knovatrix 首頁"><img class="brand-image" src="${logo}" alt="Knovatrix" width="38" height="38"><span><b>Knovatrix</b><small>LEARN EVERYTHING</small></span></a>
    <nav class="footer-links" aria-label="頁面導覽"><a href="${listing}">科學班試題總覽</a><a href="${relativeFromOutput(folder, 'catalog.html')}">網站索引</a></nav>
  </header>
  <main class="seo-page school-archive">
    <section class="page-hero"><div class="wrap"><p class="eyebrow">Science class archives</p><h1>${escapeHtml(schoolName)}歷屆試題與公開範例</h1><p class="lead">${escapeHtml(school.note || `依學年度整理${schoolName}目前可查到的科學班甄選公開資料。`)}</p><div class="button-row"><a class="button" href="${relativeFromOutput(folder, 'science-class-exams.html')}">返回各校總覽</a><a class="button" href="${appRoute}">在 Knovatrix 學習頁查看</a></div></div></section>
    <section class="section"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Available materials</p><h2>按學年度瀏覽</h2></div><p>${years.length} 個學年度有整理到公開項目</p></div><div class="year-grid">${resourceYears}</div>
      <p class="source-note">檔案標示「本站檔案」代表檔案由 Knovatrix 提供下載；「公開來源」會開啟原發布頁面。題目、範例及解答的權利仍屬原出題方或發布單位。資料是否完整，請以學校與主辦單位最新公告為準；若發現連結或標示有誤，歡迎透過 Knovatrix「意見與共創」回報。</p>
    </div></section>
  </main>
  <footer class="site-footer"><div class="footer-brand"><img src="${favicon}" alt="" width="28" height="28"><span><b>Knovatrix</b><small>國小至高中 題庫與知識庫</small></span></div><div class="footer-links"><a href="${listing}">科學班試題總覽</a><a href="${relativeFromOutput(folder, 'index.html')}">首頁</a><a href="${relativeFromOutput(folder, 'catalog.html')}">網站索引</a></div><p>© 2026 Knovatrix · 公開測試版</p></footer>
</body>
</html>`;
  fs.writeFileSync(path.join(folder, 'index.html'), html, 'utf8');
  generated += 1;
}
console.log(`Generated ${generated} school pages in ${pagesRoot}`);
