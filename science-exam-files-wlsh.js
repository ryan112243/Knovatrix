// Wuling Senior High School local exam files.
(() => {
  const school = window.scienceClassExamCatalog?.["武陵高中科學班"];
  if (!school) return;
  school.files = Object.fromEntries(
    Array.from({ length: 12 }, (_, index) => 101 + index).map(year => [
      year,
      [{ label: "科學班入學測驗數學試題", path: `files/science-class/wlsh/${year}/${year}-science-class-exam.pdf` }]
    ])
  );
})();
