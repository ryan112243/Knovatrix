// 北一女中科學班 115 學年度官方範例試題頁。
// 校方公開的是範例資料，本站不將其標示為正式歷屆考題。
(() => {
  const school = window.scienceClassExamCatalog?.["北一女中科學班"];
  if (!school) return;

  school.files = school.files || {};
  school.files[115] = [
    {
      label: "115 學年度範例試題（官方頁面）",
      url: "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU16Y3lNakEzTkRFPXlRRE01TWpOeGNsVGludGVseQ==",
      type: "pdf"
    }
  ];
  school.archiveYears = [115, ...(school.archiveYears || []).filter(year => Number(year) !== 115)];
  school.note = "校方公開的是範例試題，不是正式歷屆考題；本站收錄 107～113 學年度本地 PDF，以及 115 學年度官方範例頁連結。";
})();
