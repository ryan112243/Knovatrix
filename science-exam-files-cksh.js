// 建國中學科學班官方公開試題。
(() => {
  const school = window.scienceClassExamCatalog?.["建國中學科學班"];
  if (!school) return;

  school.files = {
    "112": [
      { label: "112 學年度數學能力測驗", path: "files/science-class/cksh/112/112-數學能力測驗.pdf" },
      { label: "112 學年度自然科學能力測驗", path: "files/science-class/cksh/112/112-自然科學能力測驗.pdf" }
    ],
    "113": [
      { label: "113 學年度數學能力測驗", path: "files/science-class/cksh/113/113-數學能力測驗.pdf" },
      { label: "113 學年度自然科學能力測驗", path: "files/science-class/cksh/113/113-自然科學能力測驗.pdf" }
    ],
    "114": [
      { label: "114 學年度數學能力測驗", path: "files/science-class/cksh/114/114-數學能力測驗.pdf" },
      { label: "114 學年度自然科學能力測驗", path: "files/science-class/cksh/114/114-自然科學能力測驗.pdf" }
    ]
  };
  school.archiveYears = scienceExamYears;
  school.note = "本站已收錄 112–114 學年度數學與自然科試題；其他年份保留官方查找入口，若校方公開即可依年度補入。";
})();
