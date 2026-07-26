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
    "數學競賽": ["數論篇", "代數篇", "幾何篇", "組合篇", "JHMC 與張許數學"], "物理探究": ["力學建模", "熱學與流體", "波動與光學", "電學與磁學"], "化學探究": ["定量化學", "酸鹼與氧化還原", "未知物分析"], "生物探究": ["顯微觀察與實驗設計", "遺傳與生態資料分析"], "科學班實驗實作": ["實驗安全與基本操作", "未知物系統鑑別", "實驗數據與誤差分析"] } },
  senior: { name: "高中", label: "高一至高三", intro: "整合 108 課綱、學測、分科測驗與校內考試的系統化知識庫。", subjects: {
    "數學": ["高一｜數與式、多項式函數", "高一｜指對數、數列與排列組合", "高二｜三角函數、直線與圓", "高二｜向量、矩陣與條件機率", "高三｜極限、微分與積分", "高三｜二次曲線、隨機變數與複數"],
    "物理": ["必修｜交互作用與近代物理", "選修｜運動學與牛頓定律", "選修｜動量、振動與萬有引力", "選修｜流體、氣體與波動", "選修｜電場、電容與電磁感應", "選修｜相對論與原子模型"],
    "化學": ["必修｜物質構造、鍵結與反應", "選修｜原子軌域與分子間作用力", "選修｜速率、平衡與酸鹼", "選修｜溶度積與電化學", "選修｜有機化學與生物大分子"],
    "生物": ["必修｜細胞構造、膜與能量", "必修｜遺傳與中心法則基礎", "必修｜演化與生物多樣性", "選修 I｜細胞代謝、呼吸與光合", "選修 I｜染色體、中心法則與基因表現", "選修 I｜基因工程、PCR 與生物技術", "選修 II｜生命起源、植物構造與運輸", "選修 II｜植物生殖、生長與激素", "選修 III｜動物消化、循環、呼吸與排泄", "選修 III｜神經、內分泌與防禦免疫", "選修 IV｜演化機制、哈溫平衡與分類", "選修 IV｜族群、群集、生態系與環境"],
    "地球科學": ["必修｜大氣、海洋與天文", "選修｜地質與地球物理", "選修｜大氣與海洋動力", "選修｜恆星演化與宇宙學"] } },
  "senior-gifted": { name: "高中資優", label: "奧林匹亞與專題研究", intro: "匯集學科競賽、五大奧林匹亞、TRML、清華盃、APCS 與專題研究資源。", subjects: {
    "高中數學競賽高階理論": ["先修｜整除、質數與同餘", "先修｜多項式、方程與不等式", "先修｜函數、數列與遞迴", "先修｜三角形、圓與相似", "先修｜排列組合與機率", "進階｜不定方程與數論函數", "進階｜不等式與函數方程", "進階｜幾何變換與軌跡", "進階｜圖論、遞迴與不變量"], "高中自然科學高階特訓": ["物理｜進階力學與能量", "物理｜熱學、流體與氣體", "物理｜波動、光學與電磁", "化學｜定量化學與氣體", "化學｜酸鹼、氧化還原與平衡", "化學｜未知物鑑別", "生物｜顯微、遺傳與生理實驗", "地科｜地質、氣象與天文推理", "跨科｜誤差分析與不確定度"], "數學競賽": ["數論篇", "代數篇", "幾何篇", "組合篇", "TRML 與清華盃"], "物理奧賽": ["進階力學", "電磁學", "熱統計與流體", "波動光學", "近代物理"], "化學奧賽": ["無機與分析化學", "物理化學", "有機化學", "實驗化學"], "生物奧賽": ["細胞與分子生物", "植物與動物生理", "遺傳演化與生態", "實驗與資料判讀"], "地科奧賽": ["地質與地球物理", "氣象與海洋", "天文與行星科學"], "資訊與 APCS": ["程式設計基礎", "資料結構與演算法", "APCS 實作題型"], "高階專題研究與 IYPT 物理辯論建模": ["研究問題與文獻閱讀", "量測、建模與模擬", "IYPT 論證與攻防"] } }
};

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

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
  <section class="section dark-section"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Learning paths</p><h2>找到你的學習目標</h2></div><p>依目前階段進入，再用課綱順序或單元主題自由切換。每一份資源都回到清楚、可查找的知識位置。</p></div><div class="level-grid">${Object.entries(catalogLevels).map(([id, x], i) => `<a class="level-card" href="#/learn/${id}"><span class="num">0${i + 1}</span><h3>${x.name}</h3><p>${x.label}</p><span>↗</span></a>`).join("")}</div></div></section>
  <section class="section"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Three-part learning</p><h2>一個單元，學習三部曲</h2></div></div><div class="feature-grid"><article class="feature-card"><span class="icon">📖</span><h3>學習重點</h3><p>公式定理、學長姐心法與課內必修實驗，整理成可快速複習的脈絡。</p></article><article class="feature-card"><span class="icon">📥</span><h3>試題</h3><p>升學考試、特招與競賽考古題，依單元歸檔並提供乾淨版 PDF。</p></article><article class="feature-card"><span class="icon">💡</span><h3>解題</h3><p>可摺疊文字詳解與手寫圖解，想看提示或完整推導都可以。</p></article></div></div></section>
  `;
}

let learningState = { subject: null, topic: null, tab: "notes", order: "curriculum", sidebarOpen: false, giftedCity: null, giftedSchool: null, scienceLabSchool: null, _routeLevel: null };

const subjectsWithSolutions = new Set([
  "\u79d1\u5b78\u73ed\u7504\u9078\u8003\u53e4\u984c",
  "\u6578\u7406\u8cc7\u512a\u73ed\u7504\u9078"
]);

const subjectsWithoutLearningNotes = {
  "senior-gifted": new Set([
    "科學班聯合學科資格考",
    "數學奧林匹亞 TMO／IMO",
    "APMO 亞太數學奧林匹亞",
    "EGMO 歐洲女子數學奧林匹亞",
    "TRML 高中數學競賽",
    "清華盃高中化學科能力競賽",
    "AMC 10／12 與 AIME",
    "學科能力競賽｜數學",
    "物理奧林匹亞",
    "化學奧林匹亞",
    "生物奧林匹亞",
    "地球科學奧林匹亞",
    "資訊奧林匹亞 TOI／IOI",
    "APCS 大學程式設計先修檢測",
    "學科能力競賽｜物理",
    "學科能力競賽｜化學",
    "學科能力競賽｜生物",
    "學科能力競賽｜地球科學",
    "學科能力競賽｜資訊",
    "IYPT 物理辯論",
    "科展與臺灣國際科展",
    "高階專題研究"
  ]),
  "junior-gifted": new Set([
    "科學班甄選考古題",
    "實驗實作試題",
    "數理資優班甄選",
    "TRML 國中數學競賽（原 JHMC）",
    "張進通許世賢國中數學能力競試",
    "AMC 8／AMC 10",
    "IMAS 數學競賽",
    "數學奧林匹亞初選銜接",
    "IJSO 國際國中科學奧林匹亞",
    "科展與科學探究競賽"
  ])
};

function learnPage(id) {
  const level = catalogLevels[id];
  if (!level) return notFound();
  const subjectNames = Object.keys(level.subjects);
  const examArchiveLabel = ["junior", "junior-gifted"].includes(id)
    ? "｜會考歷屆"
    : ["senior", "senior-gifted"].includes(id)
      ? "｜學測／分科歷屆"
      : "";
  const pageTitle = `${level.name}${examArchiveLabel}`;
  if (!learningState.subject || !level.subjects[learningState.subject]) learningState.subject = subjectNames[0];
  const isGiftedMathSelection = id === "junior-gifted" && learningState.subject === "數理資優班甄選";
  const isScienceLabSelection = id === "junior-gifted" && learningState.subject === "實驗實作試題";
  const subjectData = level.subjects[learningState.subject];
  const topics = Array.isArray(subjectData) ? subjectData : (subjectData[learningState.order] || subjectData.curriculum);
  const giftedSelection = isGiftedMathSelection ? giftedMathSelectionState() : null;
  if (isGiftedMathSelection) {
    if (!learningState.giftedCity || !giftedSelection.cities.includes(learningState.giftedCity)) learningState.giftedCity = giftedSelection.city;
    if (!learningState.giftedSchool || !giftedSelection.schools.some(item => item.name === learningState.giftedSchool)) learningState.giftedSchool = "";
    learningState.topic = learningState.giftedSchool ? `${learningState.giftedCity}｜${learningState.giftedSchool}` : learningState.giftedCity;
  } else if (isScienceLabSelection) {
    const schoolNames = Object.keys(window.scienceClassExamCatalog || {});
    if (!schoolNames.includes(learningState.scienceLabSchool)) learningState.scienceLabSchool = "";
    learningState.topic = learningState.scienceLabSchool || "選擇學校";
  } else if (!learningState.topic || !topics.includes(learningState.topic)) learningState.topic = topics[0];
  const orderedTopics = topics;
  if (id === "elementary-gifted" && learningState.tab === "solutions") learningState.tab = "notes";
  const isScienceExam = id === "junior-gifted" && learningState.subject === "科學班甄選考古題" && window.scienceClassExamCatalog?.[learningState.topic];
  const isElementaryExhibition = id === "elementary-gifted" && learningState.subject === "小學科展與生活探究";
  const hideLearningNotes = subjectsWithoutLearningNotes[id]?.has(learningState.subject) || false;
  const canUseSolutions = subjectsWithSolutions.has(learningState.subject);
  const isGiftedMathDirectory = isGiftedMathSelection && !learningState.giftedSchool;
  const isScienceLabDirectory = isScienceLabSelection && !learningState.scienceLabSchool;
  if ((hideLearningNotes || isScienceExam) && learningState.tab === "notes") learningState.tab = "files";
  if (!canUseSolutions && learningState.tab === "solutions") learningState.tab = hideLearningNotes || isScienceExam ? "files" : "notes";
  const tabs = isGiftedMathDirectory || isScienceLabDirectory
    ? { files: "學校選擇" }
    : isElementaryExhibition
    ? { notes: "探究指南", resources: "科展資源" }
    : id === "elementary-gifted"
      ? { notes: "學習重點", files: "試題" }
    : canUseSolutions && (hideLearningNotes || isScienceExam)
      ? { files: "試題", solutions: "解題" }
      : canUseSolutions
        ? { notes: "學習重點", files: "試題", solutions: "解題" }
        : hideLearningNotes || isScienceExam
          ? { files: "試題" }
          : { notes: "學習重點", files: "試題" };
  const isScienceQualificationExam = id === "senior-gifted" && learningState.subject === "科學班聯合學科資格考";
  const hasPublicResources = window.getPublicResources?.(id, learningState.subject, learningState.topic);
  const unitDescription = isScienceLabSelection
    ? "先選擇學校，再查看該校已收錄的實驗實作試題；沒有公開檔案的年度會保留標示。"
    : isScienceExam
    ? "整理 100–115 學年度官方甄選試題入口；直接 PDF、歷屆專區與尚待公開的年份分開標示。"
    : isScienceQualificationExam
      ? "整理全國科學班聯合學科資格考官方試題與參考答案，涵蓋國文、英文、數學、物理、化學及生物。"
      : hasPublicResources
      ? "已整理官方公開來源與使用狀態；請至「試題」查看原始發布頁面。"
      : "這個單元的內容框架已就位，資料會隨 PDF、筆記與影片逐步補齊。";
  const unitTitle = isGiftedMathDirectory ? `${learningState.giftedCity}｜選擇學校` : isScienceLabDirectory ? "選擇學校" : learningState.topic;
  return `<section class="page-hero"><div class="wrap reveal"><div class="breadcrumbs"><a href="#/">首頁</a>　/　${level.name}</div><h1>${pageTitle}</h1></div></section><div class="wrap learning-shell"><aside class="sidebar" aria-label="學科與專題"><div class="sidebar-heading"><p class="sidebar-label">學科與專題</p><button class="collapse-sidebar" type="button" data-collapse-sidebar>全部收合</button></div>${subjectSidebar(subjectNames, id, orderedTopics)}</aside><section class="learning-main"><div class="learning-toolbar"><h2>${learningState.subject}</h2></div><article class="unit-card"><span class="unit-meta">${level.name} · ${learningState.subject}</span><h3>${unitTitle}</h3><p>${unitDescription}</p><div class="tabs" role="tablist">${Object.entries(tabs).map(([key, label]) => `<button class="tab ${key === learningState.tab ? "active" : ""}" data-tab="${key}" role="tab" aria-selected="${key === learningState.tab}">${label}</button>`).join("")}</div><div class="learning-tab-content">${tabPanel(learningState.tab, id, learningState.subject, learningState.topic)}</div></article></section></div>`;
}

function scienceExamPanel(schoolName, sourceFiles = null) {
  const school = window.scienceClassExamCatalog?.[schoolName];
  if (!school) return "";
  const files = sourceFiles || school.files || {};
  const years = sourceFiles
    ? Object.keys(files).map(Number).sort((a, b) => b - a)
    : school.archiveYears || Array.from({ length: 16 }, (_, index) => 115 - index);
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
      const href = file.url || file.path;
      const isExternal = /^https?:\/\//i.test(href);
      const isPdf = file.type === "pdf" || /\.pdf(?:$|[?#])/i.test(href);
      const linkMode = isExternal || (isPdf && schoolName !== "彰化高中科學班") ? `target="_blank" rel="noopener noreferrer"` : "download";
      const label = file.label?.replace(/^學年度/, "") || (isPdf ? "預覽 PDF" : "下載檔案");
      return `<a class="year-card direct" href="${encodeURI(href)}" ${linkMode}><b>${year}</b><small>學年度</small><span>${label} ${isExternal ? "↗" : isPdf ? "PDF" : "↓"}</span></a>`;
    }
    return `<details class="year-card direct multi-file"><summary><b>${year}</b><small>學年度 · ${localFiles.length} 份檔案</small><span>展開檔案 ↓</span></summary><div class="year-downloads">${localFiles.map(file => {
      const href = file.url || file.path;
      const isExternal = /^https?:\/\//i.test(href);
      const isPdf = file.type === "pdf" || /\.pdf(?:$|[?#])/i.test(href);
      const linkMode = isExternal || (isPdf && schoolName !== "彰化高中科學班") ? `target="_blank" rel="noopener noreferrer"` : "download";
      const label = file.label?.replace(/^學年度/, "") || (isPdf ? "預覽 PDF" : "下載檔案");
      return `<a href="${encodeURI(href)}" ${linkMode}>${label} ${isExternal ? "↗" : isPdf ? "PDF" : "↓"}</a>`;
    }).join("")}</div></details>`;
  }).join("")}</div></div>`;
}

function scienceLabExamPanel(schoolName) {
  const catalog = window.scienceClassExamCatalog || {};
  const schoolNames = Object.keys(catalog);
  if (!schoolName) {
    return `<div class="tab-panel school-selection-panel"><div class="school-selection-intro"><b>請先選擇學校</b><p>選定學校後，中央區域才會顯示該校的實驗實作試題。</p></div><div class="public-resource-grid school-selection-grid">${schoolNames.map(name => {
      const school = catalog[name];
      return `<button class="public-resource-card school-choice" type="button" data-science-lab-school="${name}"><span class="resource-badge official">學校</span><b>${name}</b><p>${school.city || ""} · 實驗實作試題</p><small>查看實作試題 →</small></button>`;
    }).join("")}</div></div>`;
  }
  const school = catalog[schoolName];
  if (!school) return `<div class="tab-panel empty-state"><div><span>🏫</span><b>找不到這所學校</b><p>請重新選擇學校。</p></div></div>`;
  const years = school.archiveYears || Array.from({ length: 16 }, (_, index) => 115 - index);
  const labFiles = Object.fromEntries(years.map(year => {
    const value = school.files?.[year];
    const files = Array.isArray(value) ? value : value ? [{ label: "試題", path: value }] : [];
    return [year, files.filter(file => /實驗|實作/.test(`${file.label || ""} ${file.path || ""} ${file.url || ""}`))];
  }));
  return scienceExamPanel(schoolName, labFiles);
}

function giftedMathSchoolPanel(city, schoolName) {
  const catalog = window.juniorGiftedMathExamCatalog || {};
  const schools = catalog[city] || [];
  const school = schools.find(item => item.name === schoolName);
  if (!city) return `<div class="tab-panel empty-state"><div><span>📍</span><b>請先選擇縣市</b></div></div>`;
  if (!schoolName) {
    if (!schools.length) return `<div class="tab-panel empty-state"><div><span>🏫</span><b>${city} 尚未建檔學校資料</b><p>目前沒有可顯示的正式數理資優班學校題庫。</p></div></div>`;
    return `<div class="tab-panel school-selection-panel"><div class="school-selection-intro"><b>請選擇 ${city} 的學校</b><p>選定學校後，中央區域才會顯示該校的歷屆試題。</p></div><div class="public-resource-grid school-selection-grid">${schools.map(item => `<button class="public-resource-card school-choice" type="button" data-gifted-school="${city}::${item.name}"><span class="resource-badge official">學校</span><b>${item.name}</b><p>${item.detail || "數理資優班甄選試題"}</p><small>查看該校試題 →</small></button>`).join("")}</div></div>`;
  }
  if (!school) return `<div class="tab-panel empty-state"><div><span>🏫</span><b>${city} 尚未建檔學校資料</b><p>目前沒有可顯示的正式數理資優班學校題庫。</p></div></div>`;
  const files = school.files || [];
  if (!files.length) return `<div class="tab-panel empty-state"><div><span>📂</span><b>${city}｜${school.name}</b><p>目前尚未建檔試題。</p></div></div>`;
  return `<div class="tab-panel public-resource-panel"><div class="rights-banner"><b>${city}｜${school.name}</b><p>以下為已收錄的數理資優班甄選試題。</p></div><div class="public-resource-grid">${files.map(file => `<a class="public-resource-card" href="${file.url}" target="_blank" rel="noopener noreferrer"><span class="resource-badge official">官方資料</span><b>${file.label}</b><p>${file.year || ""} ${file.detail || ""}</p><small>開啟試題 ↗</small></a>`).join("")}</div></div>`;
}

function giftedMathSelectionState() {
  const catalog = window.juniorGiftedMathExamCatalog || {};
  const cities = Object.keys(catalog);
  const city = learningState.giftedCity || cities[0] || "";
  const school = learningState.giftedSchool || "";
  return { catalog, cities, city, school, schools: catalog[city] || [] };
}

function subjectSidebar(subjectNames, id, orderedTopics) {
  return subjectNames.map(subject => {
    if (id === "junior-gifted" && subject === "實驗實作試題") {
      return `<details class="subject-group" ${learningState.sidebarOpen && subject === learningState.subject ? "open" : ""}><summary data-subject="${subject}"><span>${subject}</span><span aria-hidden="true">⌄</span></summary><ul class="topic-list"><li class="topic-empty">請在中央區域選擇學校</li></ul></details>`;
    }
    if (id !== "junior-gifted" || subject !== "數理資優班甄選") {
      return `<details class="subject-group" ${learningState.sidebarOpen && subject === learningState.subject ? "open" : ""}><summary data-subject="${subject}"><span>${subject}</span><span aria-hidden="true">⌄</span></summary><ul class="topic-list">${orderedTopics.map(topic => `<li><button class="topic-button ${topic === learningState.topic ? "active" : ""}" data-topic="${topic}">${topic}</button></li>`).join("")}</ul></details>`;
    }
    const state = giftedMathSelectionState();
    return `<details class="subject-group" ${learningState.sidebarOpen && subject === learningState.subject ? "open" : ""}><summary data-subject="${subject}"><span>${subject}</span><span aria-hidden="true">⌄</span></summary><ul class="topic-list gifted-math-tree">${state.cities.map(city => `<li><details class="city-group" ${city === state.city ? "open" : ""}><summary data-gifted-city="${city}">${city}</summary><ul class="topic-list">${(state.catalog[city] || []).length ? state.catalog[city].map(item => `<li><button class="topic-button ${state.city === city && state.school === item.name ? "active" : ""}" data-gifted-school="${city}::${item.name}">${item.name}</button></li>`).join("") : `<li class="topic-empty">尚未建檔學校</li>`}</ul></details></li>`).join("")}</ul></details>`;
  }).join("");
}

function publicResourcePanel(catalog) {
  return `<div class="tab-panel public-resource-panel"><h4>${catalog.title}</h4><div class="public-resource-grid">${catalog.items.map(item => {
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

function videoPanel(levelId, subject, topic) {
  const query = encodeURIComponent(`${subject} ${topic} 教學 解題`);
  const cards = [{
    title: `YouTube｜搜尋「${topic}」教學與解題`,
    url: `https://www.youtube.com/results?search_query=${query}`,
    detail: "依本單元名稱搜尋公開教學、題目解析與實驗示範。"
  }];
  return `<div class="tab-panel public-resource-panel"><div class="rights-banner"><b>影音解題與延伸學習</b><p>先從可靠來源觀看，再回到本單元重點筆記整理觀念。</p></div><div class="public-resource-grid">${cards.map(card => `<a class="public-resource-card" href="${card.url}" target="_blank" rel="noopener noreferrer"><span class="resource-badge official">公開影音來源</span><b>${card.title}</b><p>${card.detail}</p><small>開啟來源 ↗</small></a>`).join("")}</div></div>`;
}

function legacyFeaturedNotesPanel(levelId, subject, topic) {
  if (arguments.length === 2) {
    topic = subject;
    subject = levelId;
    levelId = "elementary-gifted";
  }
  const featuredNotes = window.featuredNotesCatalog?.[levelId]?.[subject]?.[topic]
    || (levelId === "elementary-gifted" ? window.elementaryFeaturedNotes?.[subject]?.[topic] : [])
    || [];
  if (!featuredNotes.length) {
    return `<section class="featured-notes"><div class="featured-notes-head"><div><b>精選筆記</b><span>這裡會收錄同學投稿的高品質筆記、圖解或整理檔。</span></div><a href="#/contribute">踴躍投稿 →</a></div><div class="featured-notes-empty">目前尚無精選筆記，歡迎踴躍投稿。</div></section>`;
  }
  return `<section class="featured-notes"><div class="featured-notes-head"><div><b>精選筆記</b><span>同學投稿與社群整理的延伸學習素材。</span></div><a href="#/contribute">投稿筆記 →</a></div><div class="featured-notes-grid">${featuredNotes.map(note => {
    const content = `<b>${note.title}</b><p>${note.detail || "適合搭配本單元複習的補充筆記。"}</p><small>${note.author ? `投稿者：${note.author}` : "精選筆記"}</small>`;
    return note.url
      ? `<a class="featured-note-card" href="${note.url}" target="_blank" rel="noopener noreferrer">${content}</a>`
      : `<div class="featured-note-card">${content}</div>`;
  }).join("")}</div></section>`;
}

function getFeaturedNotes(levelId, subject, topic) {
  return window.featuredNotesCatalog?.[levelId]?.[subject]?.[topic]
    || (levelId === "elementary-gifted" ? window.elementaryFeaturedNotes?.[subject]?.[topic] : [])
    || [];
}

function featuredNoteCard(note) {
  const content = `<b>${note.title}</b><p>${note.detail || "重點整理與延伸學習筆記。"}</p><small>${note.author ? `投稿者：${note.author}` : "精選筆記"}</small>`;
  return note.url
    ? `<a class="featured-note-card" href="${note.url}" target="_blank" rel="noopener noreferrer">${content}</a>`
    : `<div class="featured-note-card">${content}</div>`;
}

function featuredNotesPanel(levelId, subject, topic) {
  if (arguments.length === 2) {
    topic = subject;
    subject = levelId;
    levelId = "elementary-gifted";
  }
  const featuredNotes = getFeaturedNotes(levelId, subject, topic);
  if (!featuredNotes.length) {
    return `<section class="featured-notes"><div class="featured-notes-head"><div><b>精選筆記</b><span>這裡會收錄同學投稿的高品質筆記、圖解或整理檔。</span></div><div class="featured-notes-actions"><a href="#/contribute">踴躍投稿 →</a></div></div><div class="featured-notes-empty">目前尚無精選筆記，歡迎踴躍投稿。</div></section>`;
  }
  const notesUrl = `#/notes?level=${encodeURIComponent(levelId)}&subject=${encodeURIComponent(subject)}&topic=${encodeURIComponent(topic)}`;
  const actions = `${featuredNotes.length > 3 ? `<a href="${notesUrl}">查看更多（${featuredNotes.length}）→</a>` : ""}<a href="#/contribute">投稿筆記 →</a>`;
  return `<section class="featured-notes"><div class="featured-notes-head"><div><b>精選筆記</b><span>同學投稿與社群整理的延伸學習素材。</span></div><div class="featured-notes-actions">${actions}</div></div><div class="featured-notes-grid">${featuredNotes.slice(0, 3).map(featuredNoteCard).join("")}</div></section>`;
}

function ensureFeaturedNotes(panelHtml, levelId, subject, topic) {
  return panelHtml.includes("featured-notes")
    ? panelHtml
    : `${panelHtml}${featuredNotesPanel(levelId, subject, topic)}`;
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
    },
    "小學科展與生活探究": {
      title: "科學探究與專題研究方法",
      subtitle: "掌握完整探究流程，建立正確邏輯、研究態度與發表能力。",
      notes: window.elementaryExhibitionNotes
    }
  };
  const noteSet = noteSets[subject];
  const notes = noteSet?.notes?.[topic] || null;
  if (!notes) {
    return `<div class="tab-panel"><ul class="note-list"><li>單元核心觀念與公式將顯示於此</li><li>常見陷阱與學長姐解題心法</li><li>相關必修實驗、探究步驟與安全提醒</li></ul></div>`;
  }
  return `<div class="tab-panel"><div class="note-intro"><b>${noteSet.title}</b><span>${noteSet.subtitle}</span></div><ul class="note-list detailed-notes">${notes.map(note => `<li>${note}</li>`).join("")}</ul></div>`;
}

function juniorNotesPanel(subject, topic) {
  const noteSets = {
    "數學": {
      title: "國中數學會考與資優銜接重點",
      subtitle: "統整三年核心單元、速解公式與易混淆陷阱。",
      notes: window.juniorMathNotes
    },
    "生物": {
      title: "國中生物會考特訓重點",
      subtitle: "聚焦實驗操作、圖表判讀、生理關聯與易混淆名詞。",
      notes: window.juniorBiologyNotes
    },
    "理化": {
      title: "國中理化八、九年級會考特訓重點",
      subtitle: "統整化學基礎、熱學、光學、力學、電學、磁學與進階物理。",
      notes: window.juniorPhysicsChemistryNotes
    },
    "地球科學": {
      title: "國中地球科學九年級會考特訓重點",
      subtitle: "聚焦圖表判讀、天文空間概念與台灣本土環境。",
      notes: window.juniorEarthScienceNotes
    }
  };
  const noteSet = noteSets[subject];
  const notes = noteSet?.notes?.[topic] || null;
  if (!notes) {
    return `<div class="tab-panel"><ul class="note-list"><li>單元核心觀念與公式將顯示於此</li><li>常見陷阱與會考解題心法</li><li>相關實驗、圖表判讀與比較表</li></ul></div>`;
  }
  return `<div class="tab-panel"><div class="note-intro"><b>${noteSet.title}</b><span>${noteSet.subtitle}</span></div><ul class="note-list detailed-notes">${notes.map(note => `<li>${note}</li>`).join("")}</ul></div>`;
}

function juniorGiftedNotesPanel(subject, topic) {
  const noteSets = {
    "資優數學主題": {
      title: "國中資優數學特訓重點",
      subtitle: "整除、代數、幾何、組合與證明方法的競賽銜接。",
      notes: window.juniorGiftedMathNotes
    },
    "資優自然主題": {
      title: "國中資優自然特訓重點",
      subtitle: "力學、化學、生物、地科與跨科實驗的高階觀念。",
      notes: window.juniorGiftedScienceNotes
    },
    "科學班實驗實作": {
      title: "科學班實驗實作特訓重點",
      subtitle: "安全操作、定量分析、資料擬合與實驗報告的完整流程。",
      notes: window.juniorGiftedLabNotes
    }
  };
  const noteSet = noteSets[subject];
  const notes = noteSet?.notes?.[topic] || null;
  if (!noteSet || !notes) {
    return `<div class="tab-panel"><ul class="note-list"><li>本主題的競賽觀念整理正在補充中。</li><li>可先搭配試題與跨科圖表練習建立解題框架。</li></ul></div>`;
  }
  return `<div class="tab-panel"><div class="note-intro"><b>${noteSet.title}</b><span>${noteSet.subtitle}</span></div><ul class="note-list detailed-notes">${notes.map(note => `<li>${note}</li>`).join("")}</ul></div>`;
}

function seniorGiftedNotesPanel(subject, topic) {
  const noteSets = {
    "高中數學競賽高階理論": {
      title: "高中數學競賽高階理論",
      subtitle: "整理數論、代數、幾何、組合與高階奧林匹亞工具。",
      notes: window.seniorGiftedMathAdvancedNotes
    },
    "高中自然科學高階特訓": {
      title: "高中自然科學、科學班與奧賽複賽高階特訓",
      subtitle: "聚焦物理建模、化學分析、生物實驗、地科推理與不確定度。",
      notes: window.seniorGiftedScienceAdvancedNotes
    }
  };
  const noteSet = noteSets[subject];
  const notes = noteSet?.notes?.[topic] || null;
  if (!notes) {
    return `<div class="tab-panel"><ul class="note-list"><li>競賽核心理論與高階解題工具將顯示於此</li><li>複賽、選訓與科學班資格考常見題型</li><li>實驗、模型、圖表與證明策略整理</li></ul></div>`;
  }
  return `<div class="tab-panel"><div class="note-intro"><b>${noteSet.title}</b><span>${noteSet.subtitle}</span></div><ul class="note-list detailed-notes">${notes.map(note => `<li>${note}</li>`).join("")}</ul></div>`;
}

function seniorNotesPanel(subject, topic) {
  const noteSets = {
    "數學": {
      title: "高中數學學測與分科重點",
      subtitle: "統整必修、數學 A、數學 B 的核心公式與解題心法。"
    },
    "物理": {
      title: "高中物理學測與分科重點",
      subtitle: "統整必修與選修物理的模型、公式推導與物理直觀。"
    },
    "化學": {
      title: "高中化學學測與分科重點",
      subtitle: "統整必修與選修化學的反應模型、計量與實驗要點。"
    },
    "生物": {
      title: "高中生物學測與分科重點",
      subtitle: "統整細胞、遺傳、生理、演化與生態的核心機制。"
    },
    "地球科學": {
      title: "高中地球科學學測與分科重點",
      subtitle: "統整地質、大氣、海洋、天文與宇宙觀測重點。"
    }
  };
  const noteSet = noteSets[subject];
  const notes = window.seniorGeneralNotes?.[subject]?.[topic] || null;
  if (!noteSet || !notes) {
    return `<div class="tab-panel"><ul class="note-list"><li>單元核心觀念與公式將顯示於此</li><li>常見陷阱與學測、分科解題心法</li><li>相關實驗、圖表判讀與模型整理</li></ul></div>`;
  }
  return `<div class="tab-panel"><div class="note-intro"><b>${noteSet.title}</b><span>${noteSet.subtitle}</span></div><ul class="note-list detailed-notes">${notes.map(note => `<li>${note}</li>`).join("")}</ul></div>`;
}

function elementaryExhibitionPanel() {
  return `<div class="tab-panel resource-panel"><div class="rights-banner"><b>小學科展與生活探究</b><p>從生活觀察、問題形成到研究成果展示，這裡提供官方科展作品與探究資源。</p></div><a class="public-resource-card" href="https://twsf.ntsec.gov.tw/Article.aspx?a=41&lang=1" target="_blank" rel="noopener noreferrer"><span class="resource-badge official">官方資源</span><b>全國中小學科展作品與資料庫</b><p>國立臺灣科學教育館官方科展資源。</p><small>開啟官方資源 ↗</small></a></div>`;
}

function tabPanel(tab, levelId, subject, topic) {
  if (tab === "resources" && levelId === "elementary-gifted" && subject === "小學科展與生活探究") return elementaryExhibitionPanel();
  if (tab === "notes" && levelId === "elementary-gifted") return elementaryNotesPanel(subject, topic);
  if (tab === "notes" && levelId === "junior") return ensureFeaturedNotes(juniorNotesPanel(subject, topic), levelId, subject, topic);
  if (tab === "notes" && levelId === "junior-gifted") return ensureFeaturedNotes(juniorGiftedNotesPanel(subject, topic), levelId, subject, topic);
  if (tab === "notes" && levelId === "senior") return ensureFeaturedNotes(seniorNotesPanel(subject, topic), levelId, subject, topic);
  if (tab === "notes" && levelId === "senior-gifted") return ensureFeaturedNotes(seniorGiftedNotesPanel(subject, topic), levelId, subject, topic);
  if (tab === "notes") return `<div class="tab-panel"><ul class="note-list"><li>單元核心觀念與公式將顯示於此</li><li>常見陷阱與學長姐解題心法</li><li>相關必修實驗、探究步驟與安全提醒</li></ul></div>`;
  if (tab === "files" && levelId === "junior-gifted" && subject === "科學班甄選考古題") return scienceExamPanel(topic);
  if (tab === "files" && levelId === "junior-gifted" && subject === "實驗實作試題") return scienceLabExamPanel(learningState.scienceLabSchool);
  if (tab === "files" && levelId === "junior-gifted" && subject === "數理資優班甄選") {
    const selected = giftedMathSelectionState();
    return giftedMathSchoolPanel(selected.city, selected.school);
  }
  if (tab === "files" && levelId === "senior-gifted" && subject === "科學班聯合學科資格考") return scienceQualificationExamPanel(topic);
  const publicResources = tab === "files" ? window.getPublicResources?.(levelId, subject, topic) : null;
  if (publicResources) return publicResourcePanel(publicResources);
  if (tab === "files") return `<div class="tab-panel empty-state"><div><span>📂</span><b>PDF 題庫尚未上架</b><br>未來將依年份、來源與難度自動整理在這裡。</div></div>`;
  return videoPanel(levelId, subject, topic);
}

function aboutPage() {
  return `<section class="page-hero"><div class="wrap reveal"><p class="eyebrow">About Knovatrix</p><h1>關於我們</h1><p class="lead">Knovatrix 是一個由我獨自建立的學習整理網站。</p></div></section><section class="section"><div class="wrap"><div class="info-grid"><article class="info-card"><span class="big-icon">🎯</span><h3>創立動機</h3><p>我在準備科學班考試時，常遇到試題、答案與學習資料分散在不同網站，查找和整理都很不方便。因此我建立 Knovatrix，希望把值得保存的學習資源集中整理，讓準備考試與自主學習更有效率。</p></article><article class="info-card"><span class="big-icon">🧭</span><h3>整理方式</h3><p>網站依學制、學科、單元與競賽分類，逐步加入試題、參考答案、重點整理與官方資源。</p></article><article class="info-card"><span class="big-icon">📚</span><h3>網站定位</h3><p>Knovatrix 只負責整理與導覽公開學習資料，題目與內容的著作權仍歸原出題方或原作者所有。</p></article><article class="info-card"><span class="big-icon">🌱</span><h3>持續更新</h3><p>這是一個持續建置中的個人專案，會依照實際需求逐步補充資料、修正錯誤並改善使用體驗。</p></article></div></div></section>`;
}

function contributePage() {
  return `<section class="page-hero"><div class="wrap reveal"><p class="eyebrow">Anonymous contribution</p><h1>你的回饋，會讓<br>下一份資源更好。</h1><p class="lead">四個完全匿名的入口，沒有姓名欄位。選擇最符合目的的表單，資料就能準確進入對應的處理流程。</p></div></section><section class="section"><div class="wrap"><div class="info-grid">${forms.map((f, i) => `<article class="info-card form-card"><span class="big-icon">${f.icon}</span><h3>${f.title}</h3><p>${f.desc}</p><ul>${f.fields.map(x => `<li>${x}</li>`).join("")}</ul><a class="button" href="${formLinks[i]}" target="_blank" rel="noopener noreferrer">開啟匿名表單 →</a></article>`).join("")}</div><div class="callout contact-callout"><div><h3>其他問題</h3><p>如果有任何其他方面的問題，請聯絡 <a href="mailto:yutze0314+Knovatrix@gmail.com">yutze0314+Knovatrix@gmail.com</a>。</p></div></div><div class="callout"><div><h3>隱私說明</h3><p>表單不收集稱呼或姓名；若使用檔案上傳，Google 會要求投稿者登入，表單頁會清楚標示。</p></div></div></div></section>`;
}

function supportPage() {
  return `<section class="page-hero"><div class="wrap reveal"><p class="eyebrow">Support the project</p><h1>一起維持知識庫，<br>長久而自由地運作。</h1><p class="lead">你的支持將用於網站服務、題目數位化、圖解製作與教學影片器材。加密貨幣贊助已開放，Line Pay 功能開發中。</p></div></section><section class="section"><div class="wrap"><div class="info-grid crypto-grid">
    <article class="info-card crypto-card"><span class="big-icon">⬡</span><h3>EVM 網路</h3><p>支援低手續費網路，接受 ETH、USDT 與 USDC。</p><div class="network-list"><span>Arbitrum</span><span>Optimism</span><span>Base</span></div><div class="wallet-block"><small>收款地址</small><code>0x219Ac5c16dD7011Ff2c7a6DCF58F82Aa2F4aC88c</code><button class="copy-button" data-copy="0x219Ac5c16dD7011Ff2c7a6DCF58F82Aa2F4aC88c">複製地址</button></div></article>
    <article class="info-card crypto-card"><span class="big-icon">◎</span><h3>Solana</h3><p>使用 Solana Mainnet，接受 SOL、USDT 與 USDC。</p><div class="network-list"><span>Solana Mainnet</span></div><div class="wallet-block"><small>收款地址</small><code>9LKm1a5gQjb2armKxAeURWWT4RsFgeGPBTESzH1Kikrm</code><button class="copy-button" data-copy="9LKm1a5gQjb2armKxAeURWWT4RsFgeGPBTESzH1Kikrm">複製地址</button></div></article>
    <article class="info-card linepay-card"><span class="big-icon">💚</span><h3>Line Pay</h3><p>Line Pay 支付功能正在開發中，完成後會在此提供安全的官方付款連結。</p><button class="button disabled placeholder-link">Line Pay 開發中</button></article>
  </div></div></section>`;
}

function notesPage(params) {
  const levelId = params.get("level") || "";
  const subject = params.get("subject") || "";
  const topic = params.get("topic") || "";
  const level = levels.find(item => item.id === levelId);
  const notes = getFeaturedNotes(levelId, subject, topic);
  const backUrl = levelId && subject && topic
    ? `#/learn/${levelId}?subject=${encodeURIComponent(subject)}&topic=${encodeURIComponent(topic)}`
    : "#/";
  const context = [level?.name, subject, topic].filter(Boolean).join("｜");
  return `<section class="page-hero"><div class="wrap reveal"><div class="breadcrumbs"><a href="${backUrl}">返回學習頁</a></div><p class="eyebrow">Featured notes</p><h1>精選筆記</h1><p class="lead">${context || "完整收錄社群投稿與整理筆記。"}</p></div></section><section class="section notes-page-section"><div class="wrap">${notes.length ? `<div class="featured-notes-grid all-notes-grid">${notes.map(featuredNoteCard).join("")}</div>` : `<div class="featured-notes-empty">目前尚無精選筆記，歡迎踴躍投稿。</div>`}</div></section>`;
}

function notFound() {
  return `<section class="page-hero"><div class="wrap"><p class="eyebrow">404</p><h1>這個座標還不存在。</h1><p class="lead">回到首頁，從學習矩陣重新選擇一條路。</p><div class="button-row"><a class="button" href="#/">回到首頁</a></div></div></section>`;
}

function render({ scrollToTop = false, preserveScroll = false } = {}) {
  const savedScroll = preserveScroll
    ? {
      pageY: window.scrollY,
      sidebarY: document.querySelector(".sidebar")?.scrollTop || 0
    }
    : null;
  const rawPath = location.hash.slice(1) || "/";
  const [path, queryString = ""] = rawPath.split("?");
  const routeLevel = path.startsWith("/learn/") ? path.split("/")[2] : null;
  if (routeLevel !== learningState._routeLevel) {
    learningState = { subject: null, topic: null, tab: "notes", order: "curriculum", sidebarOpen: false, giftedCity: null, giftedSchool: null, scienceLabSchool: null, _routeLevel: routeLevel };
  }
  if (path.startsWith("/learn/")) {
    const params = new URLSearchParams(queryString);
    if (params.has("subject")) learningState.subject = params.get("subject");
    if (params.has("topic")) learningState.topic = params.get("topic");
    if (params.has("tab")) learningState.tab = params.get("tab");
    if (params.has("order")) learningState.order = params.get("order");
    if (params.has("city")) learningState.giftedCity = params.get("city");
    if (params.has("school")) learningState.giftedSchool = params.get("school");
    if (params.has("school")) learningState.scienceLabSchool = params.get("school");
  }
  learningState = path.startsWith("/learn/") ? learningState : { subject: null, topic: null, tab: "notes", order: "curriculum", sidebarOpen: false, giftedCity: null, giftedSchool: null, scienceLabSchool: null, _routeLevel: null };
  if (path === "/") main.innerHTML = homePage();
  else if (path.startsWith("/learn/")) main.innerHTML = learnPage(path.split("/")[2]);
  else if (path === "/notes") main.innerHTML = notesPage(new URLSearchParams(queryString));
  else if (path === "/about") main.innerHTML = aboutPage();
  else if (path === "/contribute") main.innerHTML = contributePage();
  else if (path === "/support") main.innerHTML = supportPage();
  else main.innerHTML = notFound();
  if (path.startsWith("/learn/")) syncLearningUrl({ push: false });
  updateNav(path);
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if (scrollToTop) window.scrollTo(0, 0);
  else if (savedScroll) {
    const restoreScroll = () => {
      window.scrollTo({ top: savedScroll.pageY, left: 0, behavior: "auto" });
      const sidebar = document.querySelector(".sidebar");
      if (sidebar) sidebar.scrollTop = savedScroll.sidebarY;
    };
    restoreScroll();
    requestAnimationFrame(() => requestAnimationFrame(restoreScroll));
  }
  bindPageEvents();
}

function updateNav(path) {
  nav.querySelectorAll("a").forEach(a => {
    const target = a.getAttribute("href").slice(1);
    a.classList.toggle("active", target === path);
  });
}

function syncLearningUrl({ push = true } = {}) {
  const route = (location.hash.slice(1) || "/").split("?")[0];
  if (!route.startsWith("/learn/")) return;
  const params = new URLSearchParams();
  if (learningState.subject) params.set("subject", learningState.subject);
  if (learningState.topic) params.set("topic", learningState.topic);
  if (learningState.tab && learningState.tab !== "notes") params.set("tab", learningState.tab);
  if (learningState.order && learningState.order !== "curriculum") params.set("order", learningState.order);
  if (learningState.subject === "數理資優班甄選" && learningState.giftedCity) params.set("city", learningState.giftedCity);
  if (learningState.subject === "數理資優班甄選" && learningState.giftedSchool) params.set("school", learningState.giftedSchool);
  if (learningState.subject === "實驗實作試題" && learningState.scienceLabSchool) params.set("school", learningState.scienceLabSchool);
  const nextHash = `#${route}${params.toString() ? `?${params.toString()}` : ""}`;
  const nextUrl = `${location.pathname}${location.search}${nextHash}`;
  if (nextUrl === `${location.pathname}${location.search}${location.hash}`) return;
  history[push ? "pushState" : "replaceState"]({}, "", nextUrl);
}

function bindPageEvents() {
  document.querySelectorAll("[data-subject]").forEach(b => b.addEventListener("click", event => { event.preventDefault(); const group = b.closest(".subject-group"); if (group?.open && learningState.subject === b.dataset.subject) { learningState.sidebarOpen = false; group.removeAttribute("open"); return; } learningState.subject = b.dataset.subject; learningState.sidebarOpen = true; learningState.topic = null; learningState.tab = "notes"; if (learningState.subject === "實驗實作試題") learningState.scienceLabSchool = ""; syncLearningUrl(); render({ preserveScroll: true }); }));
  document.querySelectorAll("[data-collapse-sidebar]").forEach(b => b.addEventListener("click", () => { learningState.sidebarOpen = false; document.querySelectorAll(".subject-group[open]").forEach(group => group.removeAttribute("open")); }));
  document.querySelectorAll("[data-topic]").forEach(b => b.addEventListener("click", () => { learningState.topic = b.dataset.topic; learningState.tab = "notes"; syncLearningUrl(); render({ preserveScroll: true }); }));
  document.querySelectorAll("[data-gifted-city]").forEach(b => b.addEventListener("click", () => { learningState.giftedCity = b.dataset.giftedCity; learningState.giftedSchool = ""; learningState.subject = "數理資優班甄選"; learningState.tab = "files"; learningState.sidebarOpen = true; syncLearningUrl(); render({ preserveScroll: true }); }));
  document.querySelectorAll("[data-gifted-school]").forEach(b => b.addEventListener("click", event => { event.stopPropagation(); const [city, school] = b.dataset.giftedSchool.split("::"); learningState.giftedCity = city; learningState.giftedSchool = school; learningState.subject = "數理資優班甄選"; learningState.topic = `${city}｜${school}`; learningState.tab = "files"; learningState.sidebarOpen = true; syncLearningUrl(); render({ preserveScroll: true }); }));
  document.querySelectorAll("[data-science-lab-school]").forEach(b => b.addEventListener("click", () => { learningState.subject = "實驗實作試題"; learningState.scienceLabSchool = b.dataset.scienceLabSchool; learningState.topic = learningState.scienceLabSchool; learningState.tab = "files"; learningState.sidebarOpen = true; syncLearningUrl(); render({ preserveScroll: true }); }));
  document.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => {
    learningState.tab = b.dataset.tab;
    syncLearningUrl();
    document.querySelectorAll("[data-tab]").forEach(tab => {
      const active = tab.dataset.tab === learningState.tab;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    const content = document.querySelector(".learning-tab-content");
    if (content) content.innerHTML = tabPanel(learningState.tab, learningState._routeLevel, learningState.subject, learningState.topic);
  }));
  document.querySelectorAll("[data-order]").forEach(b => b.addEventListener("click", () => { learningState.order = b.dataset.order; syncLearningUrl(); render({ preserveScroll: true }); }));
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
window.addEventListener("popstate", () => render());
render({ scrollToTop: true });
