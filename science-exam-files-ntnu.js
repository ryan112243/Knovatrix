// National Taiwan Normal University Affiliated Senior High School sample files.
(() => {
  const school = window.scienceClassExamCatalog?.["\u5e2b\u5927\u9644\u4e2d\u79d1\u5b78\u73ed"];
  if (!school) return;
  const sample = (label, url) => ({ label, url, type: "pdf" });
  school.files = {
    112: [sample("112 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u53ca\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1UWTROamt4TkRBPTJjak4zZ2pOeGNsVGludGVseQ==")],
    111: [sample("111 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1EZzVNVE16TkRFPTBVVE80TWpOeGNsVGludGVseQ==")],
    110: [sample("110 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1EUXpNRFkzTXpBPTBVVE80TWpOeGNsVGludGVseQ==")],
    109: [sample("109 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5EWTRPVFl4TlRVPXlRRE01TWpOeGNsVGludGVseQ==")],
    108: [sample("108 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5EVXlNVGt3TmpRPXlRRE01TWpOeGNsVGludGVseQ==")],
    107: [sample("107 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5ERTFPVGd6T0RjPXlRRE01TWpOeGNsVGludGVseQ==")],
    106: [sample("106 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU16a3lPVEExT1RRPXlRRE01TWpOeGNsVGludGVseQ==")]
  };
  school.archiveLabel = "\u7bc4\u4f8b\u8a66\u984c\uff08\u975e\u6b63\u5f0f\u6b77\u5c46\uff09";
  school.archiveYears = [112, 111, 110, 109, 108, 107, 106];
  school.official = "https://drive.google.com/drive/folders/11bXpJqHwMFWbcWtTPmQpOUPXJ3V_bf8_";
  school.sourceLabel = "\u5e2b\u5927\u9644\u4e2d\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u5b98\u65b9\u7bc4\u4f8b\u5c08\u5340";
  school.note = "\u9644\u4e2d\u672a\u516c\u958b\u79d1\u5b78\u73ed\u6b63\u5f0f\u6b77\u5c46\u8003\u53e4\u984c\uff1b\u4ee5\u4e0b\u70ba\u6821\u65b9\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u516c\u958b\u7684\u7bc4\u4f8b\u8a66\u984c\u8207\u89e3\u7b54\uff0c\u50c5\u4f9b\u7df4\u7fd2\uff0c\u4e0d\u4ee3\u8868\u6b63\u5f0f\u79d1\u5b78\u73ed\u8003\u53e4\u984c\u3002";
})();
