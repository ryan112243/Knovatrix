// Taipei First Girls High School sample exam files.
(() => {
  const school = window.scienceClassExamCatalog?.["\u5317\u4e00\u5973\u4e2d\u79d1\u5b78\u73ed"];
  if (!school) return;
  const sample = (label, path) => ({ label, path });
  school.files = {
    115: [{ label: "115 \u5b78\u5e74\u5ea6\u7bc4\u4f8b\u8a66\u984c\uff08\u5b98\u65b9\u9801\u9762\uff09", url: "https://www.hs.ntnu.edu.tw/cs-class/content?a=T0RESU16Y3lNakEzTkRFPXlRRE01TWpOeGNsVGludGVseQ==", type: "pdf" }],
    107: [
      sample("\u8a9e\u6587\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/107/107-language.pdf"),
      sample("\u6578\u5b78\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/107/107-math.pdf"),
      sample("\u81ea\u7136\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/107/107-natural-science.pdf")
    ],
    108: [
      sample("\u8a9e\u6587\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/108/108-language.pdf"),
      sample("\u6578\u5b78\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/108/108-math.pdf"),
      sample("\u81ea\u7136\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/108/108-natural-science.pdf")
    ],
    109: [
      sample("\u8a9e\u6587\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/109/109-language.pdf"),
      sample("\u6578\u5b78\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/109/109-math.pdf"),
      sample("\u81ea\u7136\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/109/109-natural-science.pdf")
    ],
    110: [
      sample("\u8a9e\u6587\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/110/110-language.pdf"),
      sample("\u6578\u5b78\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/110/110-math.pdf"),
      sample("\u81ea\u7136\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/110/110-natural-science.pdf")
    ],
    111: [
      sample("\u8a9e\u6587\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/111/111-language.pdf"),
      sample("\u6578\u5b78\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/111/111-math.pdf"),
      sample("\u81ea\u7136\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/111/111-natural-science.pdf")
    ],
    112: [
      sample("\u8a9e\u6587\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/112/112-language.pdf"),
      sample("\u6578\u5b78\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/112/112-math.pdf"),
      sample("\u81ea\u7136\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/112/112-natural-science.pdf")
    ],
    113: [
      sample("\u8a9e\u6587\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/113/113-language.pdf"),
      sample("\u6578\u5b78\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/113/113-math.pdf"),
      sample("\u81ea\u7136\u79d1\u7bc4\u4f8b\u8a66\u984c", "files/science-class/fgsh/113/113-natural-science.pdf")
    ]
  };
  school.archiveYears = Array.from({ length: 16 }, (_, index) => 115 - index);
  school.note = "\u6821\u65b9\u516c\u958b\u7684\u662f\u7bc4\u4f8b\u8a66\u984c\uff0c\u4e0d\u662f\u6b63\u5f0f\u6b77\u5c46\u8003\u984c\uff1b\u672c\u7ad9\u6536\u9304 107\uff5e113 \u5b78\u5e74\u5ea6\u672c\u5730 PDF\uff0c\u4ee5\u53ca 115 \u5b78\u5e74\u5ea6\u5b98\u65b9\u7bc4\u4f8b\u9801\u9023\u7d50\u3002";
})();
