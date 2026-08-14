(function () {
  const juniorGifted = "junior-gifted";
  const mathSelection = "\u6578\u7406\u8cc7\u512a\u73ed\u7504\u9078";
  const scienceSelection = "\u79d1\u5b78\u73ed\u7504\u9078\u8003\u53e4\u984c";
  const originalSubjectSidebar = window.subjectSidebar;
  const originalTabPanel = window.tabPanel;

  function scienceExamSchoolPanel(schoolName) {
    const catalog = window.scienceClassExamCatalog || {};
    const schoolNames = Object.keys(catalog);
    if (!schoolName) {
      return `<div class="tab-panel school-selection-panel"><div class="school-selection-intro"><b>\u8acb\u5148\u9078\u64c7\u5b78\u6821</b><p>\u9078\u5b9a\u5b78\u6821\u5f8c\uff0c\u4e2d\u592e\u5340\u57df\u624d\u6703\u986f\u793a\u8a72\u6821\u7684\u79d1\u5b78\u73ed\u7504\u9078\u6b77\u5c46\u8a66\u984c\u3002</p></div><div class="public-resource-grid school-selection-grid">${schoolNames.map(name => { const school = catalog[name]; return `<button class="public-resource-card school-choice" type="button" data-science-exam-school="${name}"><span class="resource-badge official">\u5b78\u6821</span><b>${name}</b><p>${school.city || ""} \u00b7 \u79d1\u5b78\u73ed\u7504\u9078\u8003\u53e4\u984c</p><small>\u67e5\u770b\u6b77\u5c46\u8a66\u984c \u2192</small></button>`; }).join("")}</div></div>`;
    }
    return window.scienceExamPanel(schoolName);
  }

  window.subjectSidebar = function (subjectNames, id, orderedTopics) {
    if (id !== juniorGifted) return originalSubjectSidebar(subjectNames, id, orderedTopics);
    return subjectNames.map(subject => {
      const isOpen = learningState.sidebarOpen && subject === learningState.subject;
      if (subject === mathSelection) {
        const catalog = window.juniorGiftedMathExamCatalog || {};
        const cities = Object.keys(catalog);
        return `<details class="subject-group" ${isOpen ? "open" : ""}><summary data-subject="${subject}"><span>${subject}</span><span aria-hidden="true">⌄</span></summary><ul class="topic-list gifted-math-tree">${cities.map(city => `<li><details class="city-group" ${city === learningState.giftedCity ? "open" : ""}><summary data-gifted-city="${city}">${city}</summary><ul class="topic-list">${(catalog[city] || []).length ? catalog[city].map(item => `<li><button class="topic-button ${learningState.giftedCity === city && learningState.giftedSchool === item.name ? "active" : ""}" data-gifted-school="${city}::${item.name}">${item.name}</button></li>`).join("") : `<li class="topic-empty">\u5c1a\u672a\u5efa\u6a94\u5b78\u6821</li>`}</ul></details></li>`).join("")}</ul></details>`;
      }
      if (subject === scienceSelection) {
        const schools = Object.keys(window.scienceClassExamCatalog || {});
        return `<details class="subject-group" ${isOpen ? "open" : ""}><summary data-subject="${subject}"><span>${subject}</span><span aria-hidden="true">⌄</span></summary><ul class="topic-list">${schools.map(name => `<li><button class="topic-button ${learningState.scienceLabSchool === name ? "active" : ""}" data-science-exam-school="${name}">${name}</button></li>`).join("")}</ul></details>`;
      }
      return originalSubjectSidebar([subject], id, orderedTopics);
    }).join("");
  };

  window.tabPanel = function (tab, levelId, subject, topic) {
    if (tab === "files" && levelId === juniorGifted && subject === scienceSelection) return scienceExamSchoolPanel(learningState.scienceLabSchool);
    return originalTabPanel(tab, levelId, subject, topic);
  };

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-science-exam-school]");
    if (!button) return;
    event.preventDefault();
    learningState.subject = scienceSelection;
    learningState.scienceLabSchool = button.dataset.scienceExamSchool;
    learningState.topic = learningState.scienceLabSchool;
    learningState.tab = "files";
    learningState.sidebarOpen = true;
    syncLearningUrl();
    render({ preserveScroll: true });
  }, true);
})();

// Remove the standalone science-lab training entry. Historical science-class files stay intact.
(() => {
  const standaloneLab = "\u79d1\u5b78\u73ed\u5be6\u9a57\u5be6\u4f5c";
  if (typeof levels !== "undefined" && levels["junior-gifted"]?.subjects) {
    delete levels["junior-gifted"].subjects[standaloneLab];
  }
  const route = (location.hash.slice(1) || "/").split("?")[0];
  if (route === "/learn/junior-gifted" && learningState.subject === standaloneLab) {
    learningState.index = true;
    learningState.subject = null;
    learningState.topic = null;
    learningState.tab = "notes";
    render({ preserveScroll: true });
  } else if (route === "/learn/junior-gifted") {
    render({ preserveScroll: true });
  }
})();

// The core catalogue is encapsulated; remove only the standalone entry from rendered navigation.
(() => {
  const standaloneLab = "\u79d1\u5b78\u73ed\u5be6\u9a57\u5be6\u4f5c";
  const removeStandaloneLabEntry = () => {
    document.querySelectorAll("[data-subject], [data-index-subject]").forEach(control => {
      const subject = control.dataset.subject || control.dataset.indexSubject;
      if (subject !== standaloneLab) return;
      const container = control.closest(".subject-group, .index-subject-card, .subject-card, li") || control;
      container.remove();
    });
  };
  const target = document.querySelector("#app") || document.body;
  new MutationObserver(removeStandaloneLabEntry).observe(target, { childList: true, subtree: true });
  removeStandaloneLabEntry();
})();

// Gifted routes keep their PDF resources and also expose the practice studio.
(() => {
  const practiceUrl = "https://ryan112243.github.io/Knovatrix-Practice/";
  const giftedLevels = new Set(["junior-gifted", "senior-gifted"]);
  const previousTabPanel = window.tabPanel;
  const giftedPracticeLink = `<section class="featured-notes practice-link-panel"><div class="featured-notes-head"><div><b>\u5237\u984c\u7df4\u7fd2</b><span>\u9664\u4e86\u6b77\u5c46 PDF\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u9078\u64c7\u55ae\u5143\u8207\u984c\u578b\u7df4\u7fd2\u3002</span></div><a href="${practiceUrl}" target="_blank" rel="noopener noreferrer">\u524d\u5f80\u5237\u984c\u7ad9 \u2192</a></div></section>`;
  window.tabPanel = function(tab, levelId, subject, topic) {
    const panel = previousTabPanel(tab, levelId, subject, topic);
    if (tab === "files" && giftedLevels.has(levelId)) return `${panel}${giftedPracticeLink}`;
    return panel;
  };
  if ((location.hash || "").includes("/learn/")) render({ preserveScroll: true });
})();
