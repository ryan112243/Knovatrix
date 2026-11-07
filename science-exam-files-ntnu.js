// National Taiwan Normal University Affiliated Senior High School information-science exam archive.
(() => {
  const school = window.scienceClassExamCatalog?.["\u5e2b\u5927\u9644\u4e2d\u8cc7\u79d1\u73ed"];
  if (!school) return;
  const sample = (label, url) => ({ label, url });
  school.files = {
    105: [sample("105 \u5b78\u5e74\u5ea6\u8a66\u984c\u8207\u89e3\u7b54\uff08\u5b98\u65b9\u516c\u544a\uff09", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU16Y3lNakEzTkRFPXlRRE01TWpOeGNsVGludGVseQ==")],
    112: [sample("112 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u53ca\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1UWTROamt4TkRBPTJjak4zZ2pOeGNsVGludGVseQ==")],
    111: [sample("111 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1EZzVNVE16TkRFPTBVVE80TWpOeGNsVGludGVseQ==")],
    110: [sample("110 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU1EUXpNRFkzTXpBPTBVVE80TWpOeGNsVGludGVseQ==")],
    109: [sample("109 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5EWTRPVFl4TlRVPXlRRE01TWpOeGNsVGludGVseQ==")],
    108: [sample("108 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5EVXlNVGt3TmpRPXlRRE01TWpOeGNsVGludGVseQ==")],
    107: [sample("107 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU5ERTFPVGd6T0RjPXlRRE01TWpOeGNsVGludGVseQ==")],
    106: [sample("106 \u5b78\u5e74\u5ea6\u8cc7\u8a0a\u79d1\u5b78\u7279\u8272\u73ed\u8a66\u984c\u8207\u89e3\u7b54", "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU16a3lPVEExT1RRPXlRRE01TWpOeGNsVGludGVseQ==")]
  };
  school.archiveLabel = "\u8cc7\u79d1\u73ed\u5b98\u65b9\u6b77\u5c46\u516c\u544a";
  school.archiveYears = Array.from({ length: 8 }, (_, index) => 112 - index);
  school.official = "https://www.hs.ntnu.edu.tw/cs-class/";
  school.sourceLabel = "\u5e2b\u5927\u9644\u4e2d\u8cc7\u79d1\u73ed\u6b77\u5c46\u8a66\u984c\u5b98\u65b9\u516c\u544a";
  school.note = "\u6821\u65b9\u516c\u544a\u9801\u76ee\u524d\u5217\u51fa 105\uff5e112 \u5b78\u5e74\u5ea6\u7684\u8a66\u984c\u8207\u89e3\u7b54\u3002\u5167\u5bb9\u70ba\u8cc7\u79d1\u73ed\u516c\u544a\u7684\u7279\u8272\u62db\u751f\u8003\u8a66\u8cc7\u6599\uff1b\u5b78\u6821\u65b0\u805e\u5167\u5bb9\u8207\u6b63\u5f0f\u79d1\u5b78\u73ed\u7269\u7406\u5316\u5b78\u751f\u7269\u7279\u5b9a\u79d1\u76ee\u7684\u6b77\u5c46\u984c\u76ee\u4e0d\u53ef\u6df7\u70ba\u4e00\u985e\u3002";
})();
