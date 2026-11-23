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
  // Completed Wuling science-class first-stage explanations (Word downloads).
  for (const [year, subject, slug] of [
    ["101", "數學", "math"],
    ["102", "數學", "math"],
    ["103", "數學", "math"],
    ["104", "數學", "math"],
    ["105", "數學", "math"],
    ["106", "數學", "math"],
    ["107", "數學", "math"],
    ["108", "數學", "math"],
    ["109", "數學", "math"],
    ["110", "數學", "math"],
    ["111", "數學", "math"],
    ["112", "數學", "math"],
    ["113", "化學", "chemistry"],
    ["113", "物理", "physics"],
    ["114", "化學", "chemistry"],
    ["114", "生物", "biology"],
    ["114", "物理", "physics"],
    ["115", "化學", "chemistry"],
    ["115", "生物", "biology"],
    ["115", "物理", "physics"],
  ]) {
    school.files[year] ||= [];
    school.files[year].push({ label: `${subject}初試詳解（Word）`, path: `files/science-class/wlsh/solutions/${year}/${year}-wlsh-${slug}-solution.docx`, type: "solution" });
  }
})();
