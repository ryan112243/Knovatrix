const levels = {
  "elementary-gifted": { name: "國小資優", label: "國小高年級", intro: "用有趣、可操作的問題，建立數學直覺與自然探究能力。", subjects: {
    "數學資優": ["M01 因數倍數與同餘", "M02 分數小數極速計算", "M03 等積變形與圓扇形重疊面積", "M04 行程問題", "M05 雞兔同籠與工程問題", "M06 數列規律與一筆畫", "M07 鴿籠原理與排列組合"],
    "自然資優": ["S01 溶解度與酸鹼定量", "S02 熱傳導與微觀粒子", "S03 光學幾何", "S04 電路串並聯與電磁鐵", "S05 浮力、摩擦力與槓桿力矩", "S06 動植物生理與生態系", "S07 三體運動", "S08 變因控制與科學探究實作"],
    "小學科展與生活探究": ["從生活提問到可驗證的假設", "變因控制與實驗紀錄", "科展海報與口頭發表"] } },
  junior: { name: "國中", label: "七至九年級", intro: "緊扣 108 課綱、會考與校內段考，照進度複習也能跨單元查找。", subjects: {
    "數學": ["國一｜整數、因倍數與代數入門", "國一｜聯立方程、坐標與比例", "國二｜多項式、平方根與因式分解", "國二｜一元二次與數列", "國二｜幾何性質與四邊形", "國三｜相似形、圓與三心", "國三｜二次函數、統計與機率"],
    "生物": ["細胞與生物體層次", "營養、運輸與協調", "恆定性與生殖", "遺傳、演化與生態系"],
    "理化": ["波動、聲音與幾何光學", "熱量與物質微觀結構", "化學反應、氧化還原與酸鹼", "力、壓力與直線運動", "牛頓定律、功與能", "電路、電功率與電磁學"],
    "地球科學": ["固體地球與板塊運動", "大氣與天氣系統", "宇宙與天文"] } },
  "junior-gifted": { name: "國中資優", label: "科學班與競賽銜接", intro: "為科學班、數資班甄選與中學競賽建立跨學年的解題地圖。", subjects: {
    "數學競賽": ["數論篇", "代數篇", "幾何篇", "組合篇", "JHMC 與張許數學"], "物理探究": ["力學建模", "熱學與流體", "波動與光學", "電學與磁學"], "化學探究": ["定量化學", "酸鹼與氧化還原", "未知物分析"], "生物探究": ["顯微觀察與實驗設計", "遺傳與生態資料分析"], "科學班實驗實作與未知物鑑別攻略": ["實驗安全與基本操作", "未知物系統鑑別", "實驗數據與誤差分析"] } },
  senior: { name: "高中", label: "高一至高三", intro: "整合 108 課綱、學測、分科測驗與校內考試的系統化知識庫。", subjects: {
    "數學": ["高一｜數與式、多項式函數", "高一｜指對數、數列與排列組合", "高二｜三角函數、直線與圓", "高二｜向量、矩陣與條件機率", "高三｜極限、微分與積分", "高三｜二次曲線、隨機變數與複數"],
    "物理": ["必修｜交互作用與近代物理", "選修｜運動學與牛頓定律", "選修｜動量、振動與萬有引力", "選修｜流體、氣體與波動", "選修｜電場、電容與電磁感應", "選修｜相對論與原子模型"],
    "化學": ["必修｜物質構造、鍵結與反應", "選修｜原子軌域與分子間作用力", "選修｜速率、平衡與酸鹼", "選修｜溶度積與電化學", "選修｜有機化學與生物大分子"],
    "生物": ["必修｜細胞、遺傳與演化", "選修｜代謝與植物生理", "選修｜動物生理與免疫", "選修｜分子生物與基因工程", "選修｜族群遺傳"],
    "地球科學": ["必修｜大氣、海洋與天文", "選修｜地質與地球物理", "選修｜大氣與海洋動力", "選修｜恆星演化與宇宙學"] } },
  "senior-gifted": { name: "高中資優", label: "奧林匹亞與專題研究", intro: "匯集學科競賽、五大奧林匹亞、TRML、清華盃、APCS 與專題研究資源。", subjects: {
    "數學競賽": ["數論篇", "代數篇", "幾何篇", "組合篇", "TRML 與清華盃"], "物理奧賽": ["進階力學", "電磁學", "熱統計與流體", "波動光學", "近代物理"], "化學奧賽": ["無機與分析化學", "物理化學", "有機化學", "實驗化學"], "生物奧賽": ["細胞與分子生物", "植物與動物生理", "遺傳演化與生態", "實驗與資料判讀"], "地科奧賽": ["地質與地球物理", "氣象與海洋", "天文與行星科學"], "資訊與 APCS": ["程式設計基礎", "資料結構與演算法", "APCS 實作題型"], "高階專題研究與 IYPT 物理辯論建模": ["研究問題與文獻閱讀", "量測、建模與模擬", "IYPT 論證與攻防"] } }
};

const catalogLevels = window.curriculumLevels || levels;

const forms = [
  { icon: "🐞", title: "回報試題／詳解勘誤", desc: "告訴我們題目、答案或詳解哪裡需要修正。", fields: ["學制與科目", "單元或題號", "錯誤說明", "截圖（選填）"] },
  { icon: "📝", title: "投稿我的神人筆記", desc: "分享你的 PDF、圖片筆記或公開筆記連結。", fields: ["適用學制與單元", "筆記檔案", "筆記連結（選填）", "備註（選填）"] },
  { icon: "💡", title: "補充特殊試題／科展", desc: "補上值得保存的特殊題目、資料或科展素材。", fields: ["年份與來源", "建議掛載單元", "資料檔案", "補充說明（選填）"] },
  { icon: "🙋‍♂️", title: "影片拍攝難題許願", desc: "許願最想看團隊解說的題目與觀念。", fields: ["學制與單元", "想看哪一題", "題目照片"] }
];

const formLinks = [
  "https://docs.google.com/forms/d/e/1FAIpQLSd3tSgs-UOBCmCeDjEiwtPIJW_z_ffC_lC8ubinkDvxo5G0Gw/viewform",
  "https://docs.google.com/forms/d/e/1FAIpQLSfJ72S7NDm8KJxnoAM4pqgYIbTATcXnDHYHipbfa5XbyVE_gQ/viewform",
  "https://docs.google.com/forms/d/e/1FAIpQLScMXNeKfxpfMi9aDKnCZy_sJvYCKOfP1WnUgJV0MWV8uGP4zA/viewform",
  "https://docs.google.com/forms/d/e/1FAIpQLSe29BhFmIi5Hr7-C3fSW1M2t-ZgCNg-BaA7rfX43NxkalnSfQ/viewform"
];

const main = document.querySelector("main");
const nav = document.querySelector(".main-nav");
const menuButton = document.querySelector(".menu-button");
document.querySelector("#year").textContent = new Date().getFullYear();

function homePage() {
  return `<section class="hero"><div class="wrap hero-copy reveal"><p class="eyebrow">由科學班團隊把關的學習資源</p><h1>把知識整理成<br><span>可以走的路。</span></h1><p class="lead">從國小資優到高中奧賽，將精選題庫、重點實驗、圖解詳解與影音課程，放進一張清晰的學習矩陣。</p><div class="button-row"><a class="button" href="#/learn/junior">開始探索題庫 <span>→</span></a><a class="button secondary" href="#/contribute">一起共創</a></div><div class="proof-strip"><div class="proof-item"><b>5 大學習入口</b><small>常規課綱 × 資優競賽</small></div><div class="proof-item"><b>3 種學習資源</b><small>重點、題庫、影音詳解</small></div><div class="proof-item"><b>完全匿名共創</b><small>勘誤、投稿與難題許願</small></div></div></div></section>
  <section class="section dark-section"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Learning paths</p><h2>找到你的學習座標</h2></div><p>依目前階段進入，再用課綱順序或單元主題自由切換。每一份資源都回到清楚、可查找的知識位置。</p></div><div class="level-grid">${Object.entries(catalogLevels).map(([id, x], i) => `<a class="level-card" href="#/learn/${id}"><span class="num">0${i + 1}</span><h3>${x.name}</h3><p>${x.label}</p><span>↗</span></a>`).join("")}</div></div></section>
  <section class="section"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Three-part learning</p><h2>一個單元，學習三部曲</h2></div></div><div class="feature-grid"><article class="feature-card"><span class="icon">📖</span><h3>重點筆記</h3><p>公式定理、學長姐心法與課內必修實驗，整理成可快速複習的脈絡。</p></article><article class="feature-card"><span class="icon">📥</span><h3>試題</h3><p>升學考試、特招與競賽考古題，依單元歸檔並提供乾淨版 PDF。</p></article><article class="feature-card"><span class="icon">💡</span><h3>解題</h3><p>可摺疊文字詳解與手寫圖解，想看提示或完整推導都可以。</p></article></div></div></section>
  <section class="section"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Latest resources</p><h2>最新上架</h2></div></div><div class="home-empty"><b>資源準備中</b><p>第一批 PDF 與解題影片上架後，這裡會自動顯示最新內容。</p></div></div></section>`;
}

let learningState = { subject: null, topic: null, tab: "notes", order: "curriculum" };
function learnPage(id) {
  const level = catalogLevels[id];
  if (!level) return notFound();
  const subjectNames = Object.keys(level.subjects);
  if (!learningState.subject || !level.subjects[learningState.subject]) learningState.subject = subjectNames[0];
  const subjectData = level.subjects[learningState.subject];
  const topics = Array.isArray(subjectData) ? subjectData : (subjectData[learningState.order] || subjectData.curriculum);
  if (!learningState.topic || !topics.includes(learningState.topic)) learningState.topic = topics[0];
  const orderedTopics = topics;
  if (id === "elementary-gifted" && learningState.tab === "solutions") learningState.tab = "notes";
  const isScienceExam = id === "junior-gifted" && learningState.subject === "科學班甄選考古題" && window.scienceClassExamCatalog?.[learningState.topic];
  const isCkGiftedExam = id === "junior-gifted" && learningState.subject === "科學班甄選考古題" && learningState.topic === "建中資優班歷屆試題";
  if ((isScienceExam || isCkGiftedExam) && learningState.tab === "notes") learningState.tab = "files";
  const tabs = id === "elementary-gifted"
    ? { notes: "重點筆記", files: "試題" }
    : (isScienceExam || isCkGiftedExam)
      ? { files: "試題", solutions: "解題" }
      : { notes: "重點筆記", files: "試題", solutions: "解題" };
  const isScienceQualificationExam = id === "senior-gifted" && learningState.subject === "科學班聯合學科資格考";
  const hasPublicResources = window.getPublicResources?.(id, learningState.subject, learningState.topic);
  const unitDescription = isScienceExam
    ? "整理 100–115 學年度官方甄選試題入口；直接 PDF、歷屆專區與尚待公開的年份分開標示。"
    : isScienceQualificationExam
      ? "整理全國科學班聯合學科資格考官方試題與參考答案，涵蓋國文、英文、數學、物理、化學及生物。"
      : isCkGiftedExam
      ? "整理建中官方公開的資優班甄選試題與答案；點擊檔案會在新分頁開啟 Google Drive PDF 預覽。"
      : hasPublicResources
      ? "已整理官方公開來源與使用狀態；請至「試題」查看原始發布頁面。"
      : "這個單元的內容框架已就位，資料會隨 PDF、筆記與影片逐步補齊。";
  return `<section class="page-hero"><div class="wrap reveal"><div class="breadcrumbs"><a href="#/">首頁</a>　/　${level.name}</div><p class="eyebrow">${level.label}</p><h1>${level.name}學習矩陣</h1><p class="lead">${level.intro}</p></div></section><div class="wrap learning-shell"><aside class="sidebar" aria-label="學科與專題"><div class="sidebar-heading"><p class="sidebar-label">學科與專題</p><button class="collapse-sidebar" type="button" data-collapse-sidebar>全部收合</button></div>${subjectNames.map(s => `<details class="subject-group" ${s === learningState.subject ? "open" : ""}><summary data-subject="${s}"><span>${s}</span><span aria-hidden="true">⌄</span></summary><ul class="topic-list">${orderedTopics.map(t => `<li><button class="topic-button ${t === learningState.topic ? "active" : ""}" data-topic="${t}">${t}</button></li>`).join("")}</ul></details>`).join("")}</aside><section class="learning-main"><div class="learning-toolbar"><h2>${learningState.subject}</h2></div><article class="unit-card"><span class="unit-meta">${level.name} · ${learningState.subject}</span><h3>${learningState.topic}</h3><p>${unitDescription}</p><div class="tabs" role="tablist">${Object.entries(tabs).map(([key, label]) => `<button class="tab ${key === learningState.tab ? "active" : ""}" data-tab="${key}" role="tab" aria-selected="${key === learningState.tab}">${label}</button>`).join("")}</div>${tabPanel(learningState.tab, id, learningState.subject, learningState.topic)}</article></section></div>`;
}

function scienceExamPanel(schoolName) {
  const school = window.scienceClassExamCatalog?.[schoolName];
  if (!school) return "";
  const files = school.files || {};
  const years = Array.from({ length: 16 }, (_, index) => 115 - index);
  const fileHint = Object.keys(files).length ? " PDF 會在新分頁開啟預覽；壓縮檔則直接下載。" : "";
  return `<div class="tab-panel exam-panel"><div class="exam-source"><div><span>${school.city} · ${school.archiveLabel || "科學班歷屆"}</span><b>${schoolName}</b><p>${school.note || ""}${fileHint}</p></div></div><div class="exam-legend"><span><i class="direct"></i>有檔案</span><span><i class="pending"></i>沒有檔案</span></div><div class="year-grid">${years.map(year => {
    const localFiles = Array.isArray(files[year])
      ? files[year]
      : files[year]
        ? [{ label: "試題", path: files[year] }]
        : [];
    if (!localFiles.length) return `<div class="year-card pending" aria-label="${year} 學年度沒有檔案"><b>${year}</b><small>學年度</small><span>沒有檔案</span></div>`;
    if (localFiles.length === 1) {
      const file = localFiles[0];
      const isPdf = /\.pdf(?:$|[?#])/i.test(file.path);
      const linkMode = isPdf && schoolName !== "彰化高中科學班" ? `target="_blank" rel="noopener noreferrer"` : "download";
      const label = file.label?.replace(/^學年度/, "") || (isPdf ? "預覽 PDF" : "下載檔案");
      return `<a class="year-card direct" href="${encodeURI(file.path)}" ${linkMode}><b>${year}</b><small>學年度</small><span>${label} ${isPdf ? "↗" : "↓"}</span></a>`;
    }
    return `<details class="year-card direct multi-file"><summary><b>${year}</b><small>學年度 · ${localFiles.length} 份檔案</small><span>展開檔案 ↓</span></summary><div class="year-downloads">${localFiles.map(file => {
      const isPdf = /\.pdf(?:$|[?#])/i.test(file.path);
      const linkMode = isPdf && schoolName !== "彰化高中科學班" ? `target="_blank" rel="noopener noreferrer"` : "download";
      const label = file.label?.replace(/^學年度/, "") || (isPdf ? "預覽 PDF" : "下載檔案");
      return `<a href="${encodeURI(file.path)}" ${linkMode}>${label} ${isPdf ? "↗" : "↓"}</a>`;
    }).join("")}</div></details>`;
  }).join("")}</div></div>`;
}

function publicResourcePanel(catalog) {
  return `<div class="tab-panel public-resource-panel"><div class="rights-banner"><b>下載與授權原則</b><p>有合法重製權的檔案直接放在 Knovatrix；其餘只連到主辦單位官方頁面，不採用第三方題庫。</p></div><h4>${catalog.title}</h4><div class="public-resource-grid">${catalog.items.map(item => {
    const href = item.file || item.url;
    const isPdf = item.file && /\.pdf(?:$|[?#])/i.test(item.file);
    const action = isPdf ? "在新分頁預覽 PDF ↗" : item.file ? "站內下載檔案 ↓" : item.url ? "前往官方發布頁面 ↗" : "待主辦單位提供公開授權";
    const content = `<span class="resource-badge ${item.status}">${item.badge}</span><b>${item.title}</b><p>${item.detail}</p><small>${action}</small>`;
    if (!href) return `<div class="public-resource-card restricted">${content}</div>`;
    const linkMode = isPdf || item.url ? `target="_blank" rel="noopener noreferrer"` : "download";
    return `<a class="public-resource-card" href="${href}" ${linkMode}>${content}</a>`;
  }).join("")}</div></div>`;
}

function ckGiftedExamPanel(topic) {
  const year = String(topic).match(/\d{2,3}/)?.[0];
  const catalog = window.ckGiftedExamCatalog;
  const files = year ? catalog?.years?.[year] || [] : [];
  if (!files.length) return `<div class="tab-panel empty-state"><div><span>📂</span><b>這個學年度尚無檔案</b></div></div>`;
  const labels = {
    91: ["科學能力測驗（一）試題", "科學能力測驗（一）答案", "科學能力測驗（二）試題", "科學能力測驗（二）答案"],
    92: ["科學能力測驗（一）試題", "科學能力測驗（一）答案", "科學能力測驗（二）試題", "科學能力測驗（二）填充答案", "科學能力測驗（二）計算題答案"],
    93: ["科學能力測驗（一）試題", "科學能力測驗（一）答案", "科學能力測驗（二）試題", "科學能力測驗（二）答案"],
    94: ["人文社會測驗（一）試題", "人文社會測驗（一）答案", "科學能力測驗（一）試題", "科學能力測驗（一）答案", "人文社會測驗（二）試題", "科學能力測驗（二）試題"],
    95: ["人文社會測驗（一）試題", "人文社會測驗（一）答案", "科學能力測驗（一）試題", "科學能力測驗（一）答案", "人文社會測驗（二）試題", "科學能力測驗（二）試題", "科學能力測驗（二）答案"],
    96: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數理科學測驗（一）試題", "數理科學測驗（一）解答", "人文社會測驗（二）試題", "數理科學測驗（二）試題"],
    97: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數理科學測驗（一）試題", "數理科學測驗（一）解答", "人文社會測驗（二）試題", "數理科學測驗（二）試題"],
    98: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數理科學測驗（一）試題", "數理科學測驗（一）解答", "人文社會測驗（二）試題", "數理科學測驗（二）試題"],
    99: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數學", "人文社會測驗（二）試題", "自然", "語文表達試題", "選擇題答案"],
    100: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數學", "人文社會測驗（二）試題", "自然", "數學與自然選擇題答案", "國語文表達試題"],
    101: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數學", "數學選擇題解答", "人文社會測驗（二）試題", "自然", "自然選擇題解答", "國語文表達試題"],
    102: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數學", "數學選擇題解答", "人文社會測驗（二）試題", "自然", "自然選擇題解答", "國語文表達試題"],
    103: ["人文社會測驗（一）試題", "人文社會測驗（一）解答", "數學", "人文社會測驗（二）試題", "自然", "國語文表達試題", "數學與自然選擇題解答"],
    104: ["人文社會科學試題", "數學", "語文表達試題", "人文社會選擇題解答", "自然", "自然選擇題解答"],
    105: ["人文社會科學試題", "數學", "語文表達試題", "人文社會選擇題解答", "自然", "自然選擇題解答"],
    109: ["人文社會科學試題", "數學", "語文表達試題", "自然", "自然選擇題答案"],
    110: ["人文社會科學試題", "數學", "語文表達試題", "自然", "自然選擇題答案"]
  };
  return `<div class="tab-panel public-resource-panel"><div class="rights-banner"><b>建中資優班官方歷屆試題</b><p>${year} 學年度共 ${files.length} 份試題或答案。點擊後會在新分頁開啟 PDF 預覽。</p></div><h4>${year} 學年度</h4><div class="public-resource-grid">${files.map((file, index) => `<a class="public-resource-card" href="${file.url}" target="_blank" rel="noopener noreferrer"><span class="resource-badge official">官方 PDF</span><b>${labels[year]?.[index] || file.label}</b><p>臺北市立建國高級中學資優班甄選資料</p><small>在新分頁預覽 PDF ↗</small></a>`).join("")}</div><p><a href="${catalog.source}" target="_blank" rel="noopener noreferrer">查看建中官方歷屆試題總頁面 ↗</a></p></div>`;
}

function scienceQualificationExamPanel(topic) {
  const year = String(topic).match(/\d{3}/)?.[0];
  const catalog = window.scienceQualificationExamCatalog;
  const files = year ? catalog?.years?.[year] || [] : [];
  if (!files.length) return `<div class="tab-panel empty-state"><div><span>📂</span><b>這個學年度尚無檔案</b></div></div>`;
  return `<div class="tab-panel public-resource-panel"><div class="rights-banner"><b>全國科學班聯合學科資格考</b><p>${year} 學年度共 ${files.length} 份官方試題或參考答案，點擊後直接在新分頁開啟 PDF 預覽。</p></div><h4>${year} 學年度</h4><div class="public-resource-grid">${files.map(file => `<a class="public-resource-card" href="${file.url}" target="_blank" rel="noopener noreferrer"><span class="resource-badge official">官方 PDF</span><b>${file.label}</b><p>高級中等學校科學班聯合學科資格考</p><small>在新分頁預覽 PDF ↗</small></a>`).join("")}</div><p><a href="${catalog.source}" target="_blank" rel="noopener noreferrer">查看官方歷屆試題總頁面 ↗</a></p></div>`;
}

function featuredNotesPanel(subject, topic) {
  const featuredNotes = window.elementaryFeaturedNotes?.[subject]?.[topic] || [];
  if (!featuredNotes.length) {
    return `<section class="featured-notes"><div class="featured-notes-head"><div><b>優秀筆記</b><span>這裡會收錄同學投稿的高品質筆記、圖解或整理檔。</span></div><a href="#/contribute">踴躍投稿 →</a></div><div class="featured-notes-empty">目前尚無精選筆記，歡迎踴躍投稿。</div></section>`;
  }
  return `<section class="featured-notes"><div class="featured-notes-head"><div><b>優秀筆記</b><span>同學投稿與社群整理的延伸學習素材。</span></div><a href="#/contribute">投稿筆記 →</a></div><div class="featured-notes-grid">${featuredNotes.map(note => {
    const content = `<b>${note.title}</b><p>${note.detail || "適合搭配本單元複習的補充筆記。"}</p><small>${note.author ? `投稿者：${note.author}` : "優秀筆記"}</small>`;
    return note.url
      ? `<a class="featured-note-card" href="${note.url}" target="_blank" rel="noopener noreferrer">${content}</a>`
      : `<div class="featured-note-card">${content}</div>`;
  }).join("")}</div></section>`;
}

function elementaryNotesPanel(subject, topic) {
  const noteSets = {
    "數學": {
      title: "數學資優與私中特訓重點",
      subtitle: "熟練核心心法、速算技巧與必考題型。",
      notes: window.elementaryMathNotes
    },
    "自然科學": {
      title: "自然科學資優特訓重點",
      subtitle: "聚焦實驗變因、進階原理、計算題型與易錯陷阱。",
      notes: window.elementaryScienceNotes
    }
  };
  const noteSet = noteSets[subject];
  const notes = noteSet?.notes?.[topic] || null;
  if (!notes) {
    return `<div class="tab-panel"><ul class="note-list"><li>單元核心觀念與公式將顯示於此</li><li>常見陷阱與學長姐解題心法</li><li>相關必修實驗、探究步驟與安全提醒</li></ul>${featuredNotesPanel(subject, topic)}</div>`;
  }
  return `<div class="tab-panel"><div class="note-intro"><b>${noteSet.title}</b><span>${noteSet.subtitle}</span></div><ul class="note-list detailed-notes">${notes.map(note => `<li>${note}</li>`).join("")}</ul>${featuredNotesPanel(subject, topic)}</div>`;
}

function tabPanel(tab, levelId, subject, topic) {
  if (tab === "notes" && levelId === "elementary-gifted") return elementaryNotesPanel(subject, topic);
  if (tab === "notes") return `<div class="tab-panel"><ul class="note-list"><li>單元核心觀念與公式將顯示於此</li><li>常見陷阱與學長姐解題心法</li><li>相關必修實驗、探究步驟與安全提醒</li></ul></div>`;
  if (tab === "files" && levelId === "junior-gifted" && subject === "科學班甄選考古題") return scienceExamPanel(topic);
  if (tab === "files" && levelId === "senior-gifted" && subject === "科學班聯合學科資格考") return scienceQualificationExamPanel(topic);
  if (tab === "files" && levelId === "junior-gifted" && topic === "建中資優班歷屆試題") return ckGiftedExamPanel(topic);
  const publicResources = tab === "files" ? window.getPublicResources?.(levelId, subject, topic) : null;
  if (publicResources) return publicResourcePanel(publicResources);
  if (tab === "files") return `<div class="tab-panel empty-state"><div><span>📂</span><b>PDF 題庫尚未上架</b><br>未來將依年份、來源與難度自動整理在這裡。</div></div>`;
  return `<div class="tab-panel empty-state"><div><span>🎬</span><b>詳解與影音準備中</b><br>文字詳解、手寫圖解與 YouTube 影片將顯示於此。</div></div>`;
}

function aboutPage() {
  return `<section class="page-hero"><div class="wrap reveal"><p class="eyebrow">About Knovatrix</p><h1>讓好的學習資源，<br>不再散落各處。</h1><p class="lead">Knovatrix 是由一人獨立建立與維護的學科資源整理計畫，希望讓題目、筆記與解題資料更容易被找到與使用。</p></div></section><section class="section"><div class="wrap"><div class="info-grid"><article class="info-card"><span class="big-icon">🧭</span><h3>為什麼開始</h3><p>許多優質試題散落在不同學校與競賽網站，查找不易。我想把它們整理成一張清楚、可以持續擴充的知識地圖。</p></article><article class="info-card"><span class="big-icon">🗂️</span><h3>我在做什麼</h3><p>從網站設計、資料蒐集到題庫歸檔皆由我獨立完成，並依學制、科目、單元與年份逐步整理。</p></article><article class="info-card"><span class="big-icon">🔎</span><h3>整理原則</h3><p>盡量保留資料來源與出題單位資訊，讓使用者能快速辨識內容；發現錯誤或缺漏時，也會持續修正。</p></article><article class="info-card"><span class="big-icon">🌱</span><h3>一起讓它更完整</h3><p>網站由一人維護，但每一則勘誤、筆記投稿與題目補充，都能幫助這座資源庫慢慢成長。</p></article></div><div class="callout"><div><h3>這是一個持續更新的個人計畫</h3><p>我會依時間與資料取得狀況逐步補齊內容，讓每次更新都真正增加網站的實用性。</p></div><a class="button" href="#/contribute">提供資料或建議 →</a></div></div></section>`;
}

function contributePage() {
  return `<section class="page-hero"><div class="wrap reveal"><p class="eyebrow">Anonymous contribution</p><h1>你的回饋，會讓<br>下一份資源更好。</h1><p class="lead">四個完全匿名的入口，沒有姓名欄位。選擇最符合目的的表單，資料就能準確進入對應的處理流程。</p></div></section><section class="section"><div class="wrap"><div class="info-grid">${forms.map((f, i) => `<article class="info-card form-card"><span class="big-icon">${f.icon}</span><h3>${f.title}</h3><p>${f.desc}</p><ul>${f.fields.map(x => `<li>${x}</li>`).join("")}</ul><a class="button" href="${formLinks[i]}" target="_blank" rel="noopener noreferrer">開啟匿名表單 →</a></article>`).join("")}</div><div class="callout"><div><h3>隱私說明</h3><p>表單不收集稱呼或姓名；若使用檔案上傳，Google 會要求投稿者登入，表單頁會清楚標示。</p></div></div></div></section>`;
}

function supportPage() {
  return `<section class="page-hero"><div class="wrap reveal"><p class="eyebrow">Support the project</p><h1>一起維持知識庫，<br>長久而自由地運作。</h1><p class="lead">你的支持將用於網站服務、題目數位化、圖解製作與教學影片器材。加密貨幣贊助已開放，Line Pay 功能開發中。</p></div></section><section class="section"><div class="wrap"><div class="info-grid crypto-grid">
    <article class="info-card crypto-card"><span class="big-icon">⬡</span><h3>EVM 網路</h3><p>支援低手續費網路，接受 ETH、USDT 與 USDC。</p><div class="network-list"><span>Arbitrum</span><span>Optimism</span><span>Base</span></div><div class="wallet-block"><small>收款地址</small><code>0x219Ac5c16dD7011Ff2c7a6DCF58F82Aa2F4aC88c</code><button class="copy-button" data-copy="0x219Ac5c16dD7011Ff2c7a6DCF58F82Aa2F4aC88c">複製地址</button></div></article>
    <article class="info-card crypto-card"><span class="big-icon">◎</span><h3>Solana</h3><p>使用 Solana Mainnet，接受 SOL、USDT 與 USDC。</p><div class="network-list"><span>Solana Mainnet</span></div><div class="wallet-block"><small>收款地址</small><code>9LKm1a5gQjb2armKxAeURWWT4RsFgeGPBTESzH1Kikrm</code><button class="copy-button" data-copy="9LKm1a5gQjb2armKxAeURWWT4RsFgeGPBTESzH1Kikrm">複製地址</button></div></article>
    <article class="info-card linepay-card"><span class="big-icon">💚</span><h3>Line Pay</h3><p>Line Pay 支付功能正在開發中，完成後會在此提供安全的官方付款連結。</p><button class="button disabled placeholder-link">Line Pay 開發中</button></article>
    <article class="info-card linepay-card"><span class="big-icon">🎮</span><h3>RollerCoin</h3><p>也可以透過 Knovatrix 的 RollerCoin 推薦連結加入，以另一種方式支持網站持續整理學習資源。</p><a class="button" href="https://rollercoin.com/?r=mn67zsfp" target="_blank" rel="noopener noreferrer sponsored">前往 RollerCoin →</a></article>
  </div></div></section>`;
}

function notFound() {
  return `<section class="page-hero"><div class="wrap"><p class="eyebrow">404</p><h1>這個座標還不存在。</h1><p class="lead">回到首頁，從學習矩陣重新選擇一條路。</p><div class="button-row"><a class="button" href="#/">回到首頁</a></div></div></section>`;
}

function render({ scrollToTop = false } = {}) {
  const path = location.hash.slice(1) || "/";
  learningState = path.startsWith("/learn/") ? learningState : { subject: null, topic: null, tab: "notes", order: "curriculum" };
  if (path === "/") main.innerHTML = homePage();
  else if (path.startsWith("/learn/")) main.innerHTML = learnPage(path.split("/")[2]);
  else if (path === "/about") main.innerHTML = aboutPage();
  else if (path === "/contribute") main.innerHTML = contributePage();
  else if (path === "/support") main.innerHTML = supportPage();
  else main.innerHTML = notFound();
  updateNav(path);
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if (scrollToTop) window.scrollTo(0, 0);
  bindPageEvents();
}

function updateNav(path) {
  nav.querySelectorAll("a").forEach(a => {
    const target = a.getAttribute("href").slice(1);
    a.classList.toggle("active", target === path);
  });
}

function bindPageEvents() {
  document.querySelectorAll("[data-subject]").forEach(b => b.addEventListener("click", event => { const group = b.closest(".subject-group"); if (group?.open && learningState.subject === b.dataset.subject) { event.preventDefault(); group.removeAttribute("open"); return; } learningState.subject = b.dataset.subject; learningState.topic = null; learningState.tab = "notes"; render(); }));
  document.querySelectorAll("[data-collapse-sidebar]").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".subject-group[open]").forEach(group => group.removeAttribute("open")); }));
  document.querySelectorAll("[data-topic]").forEach(b => b.addEventListener("click", () => { learningState.topic = b.dataset.topic; learningState.tab = "notes"; render(); }));
  document.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => { learningState.tab = b.dataset.tab; render(); }));
  document.querySelectorAll("[data-order]").forEach(b => b.addEventListener("click", () => { learningState.order = b.dataset.order; render(); }));
  document.querySelectorAll(".placeholder-link").forEach(b => b.addEventListener("click", () => showToast("入口尚未設定，之後只需替換表單或金流網址。")));
  document.querySelectorAll(".copy-button").forEach(b => b.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(b.dataset.copy);
      showToast("地址已複製，轉帳前請再次核對網路與幣種。");
    } catch {
      const field = document.createElement("textarea");
      field.value = b.dataset.copy;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
      showToast("地址已複製，轉帳前請再次核對網路與幣種。");
    }
  }));
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
window.addEventListener("hashchange", () => render({ scrollToTop: true }));
render({ scrollToTop: true });
