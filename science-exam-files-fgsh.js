// Taipei First Girls High School local exam files.
(() => {
  const school = window.scienceClassExamCatalog?.["北一女中科學班"];
  if (!school) return;
  school.files = {
    110: [
      { label: "語文科試題", path: "files/science-class/fgsh/110/110-language.pdf" },
      { label: "數學科試題", path: "files/science-class/fgsh/110/110-math.pdf" },
      { label: "自然科試題", path: "files/science-class/fgsh/110/110-natural-science.pdf" }
    ]
  };
})();
