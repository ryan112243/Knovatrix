// 師大附中官方公開的資訊科學特色班範例試題頁。
// 校方未將這些資料標示為科學班正式歷屆考古題，因此僅列為範例練習。
(() => {
  const school = window.scienceClassExamCatalog?.["師大附中科學班"];
  if (!school) return;

  const sample = (label, url) => ({ label, url, type: "pdf" });
  school.files = {
    "112": [sample("112 學年度資訊科學特色班試題及解答", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1UWTROamt4TkRBPTJjak4zZ2pOeGNsVGludGVseQ==")],
    "111": [sample("111 學年度資訊科學特色班試題與解答", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1EZzVNVE16TkRFPTBVVE80TWpOeGNsVGludGVseQ==")],
    "110": [sample("110 學年度資訊科學特色班試題與解答", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1EUXpNRFkzTXpBPTBVVE80TWpOeGNsVGludGVseQ==")],
    "109": [sample("109 學年度資訊科學特色班試題與解答", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5EWTRPVFl4TlRVPXlRRE01TWpOeGNsVGludGVseQ==")],
    "108": [sample("108 學年度資訊科學特色班試題與解答", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5EVXlNVGt3TmpRPXlRRE01TWpOeGNsVGludGVseQ==")],
    "107": [sample("107 學年度資訊科學特色班試題與解答", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5ERTFPVGd6T0RjPXlRRE01TWpOeGNsVGludGVseQ==")],
    "106": [sample("106 學年度資訊科學特色班試題與解答", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU16a3lPVEExT1RRPXlRRE01TWpOeGNsVGludGVseQ==")],
    "105": [sample("105 學年度資訊科學特色招生試題組合", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU16Y3lNakEzTkRFPXlRRE01TWpOeGNsVGludGVseQ==")]
  };
  school.archiveLabel = "範例試題（非正式歷屆）";
  school.archiveYears = Object.keys(school.files).map(Number).sort((a, b) => b - a);
  school.official = "https://drive.google.com/drive/folders/11bXpJqHwMFWbcWtTPmQpOUPXJ3V_bf8_";
  school.sourceLabel = "師大附中資訊科學特色班官方範例專區";
  school.note = "附中未公開科學班正式歷屆考古題；以下為校方資訊科學特色班公開的範例試題與解答，僅供練習，不代表正式科學班考古題。檔案連結會開啟附中官方頁面。";
})();
