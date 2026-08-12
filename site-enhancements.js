(() => {
  const practiceUrl = "https://ryan112243.github.io/Knovatrix-Practice/";
  const copy = {
    homeLead: "\u5f9e\u570b\u5c0f\u8cc7\u512a\u5230\u9ad8\u4e2d\u7af6\u8cfd\uff0c\u6574\u7406\u53ef\u67e5\u627e\u7684\u984c\u5eab\u8207\u91cd\u9ede\u7b46\u8a18\uff0c\u8b93\u6bcf\u4e00\u6b65\u90fd\u6709\u65b9\u5411\u3002",
    aboutLead: "Knovatrix \u662f\u4e00\u500b\u7531\u5b78\u751f\u767c\u8d77\u7684\u5b78\u7fd2\u8cc7\u6e90\u5e73\u53f0\uff0c\u5e0c\u671b\u8b93\u984c\u5eab\u3001\u91cd\u9ede\u7b46\u8a18\u8207\u5b78\u7fd2\u76ee\u6a19\u66f4\u5bb9\u6613\u9023\u8d77\u4f86\u3002",
    videoTitle: "\u5f71\u97f3\u5167\u5bb9\u6301\u7e8c\u88fd\u4f5c\u4e2d",
    videoText: "\u5f71\u7247\u9700\u8981\u5b8c\u6210\u9078\u984c\u3001\u67e5\u8b49\u3001\u8173\u672c\u3001\u9304\u88fd\u8207\u526a\u8f2f\uff0c\u6211\u5011\u6703\u4ee5\u6b63\u78ba\u8207\u53ef\u7528\u70ba\u512a\u5148\uff0c\u5206\u6279\u91cb\u51fa\u3002"
  };

  const addPracticeLink = () => {
    const nav = document.querySelector(".main-nav");
    if (nav && !nav.querySelector(".practice-site-nav")) {
      const link = document.createElement("a");
      link.className = "practice-site-nav";
      link.href = practiceUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "\u5237\u984c\u7ad9";
      nav.append(link);
    }
  };

  const addNote = container => {
    if (!container || container.querySelector(".production-note")) return;
    const note = document.createElement("aside");
    const title = document.createElement("strong");
    const text = document.createElement("p");
    note.className = "production-note";
    title.textContent = copy.videoTitle;
    text.textContent = copy.videoText;
    note.append(title, text);
    container.append(note);
  };

  const addHeroLink = container => {
    const actions = container?.querySelector(".button-row");
    if (!actions || actions.querySelector(".practice-site-cta")) return;
    const link = document.createElement("a");
    link.className = "button secondary practice-site-cta";
    link.href = practiceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "\u524d\u5f80\u5237\u984c\u7ad9";
    actions.append(link);
  };

  const enhance = () => {
    const path = location.hash.slice(1).split("?")[0] || "/";
    addPracticeLink();
    if (path === "/") {
      const hero = document.querySelector("main .hero-copy");
      const lead = hero?.querySelector(".lead");
      if (lead) lead.textContent = copy.homeLead;
      addHeroLink(hero);
      addNote(hero);
    }
    if (path === "/about") {
      const hero = document.querySelector("main .page-hero .wrap");
      const lead = hero?.querySelector(".lead");
      if (lead) lead.textContent = copy.aboutLead;
      addNote(hero);
    }
    document.querySelectorAll("main input[type='search']").forEach(input => input.setAttribute("aria-label", "\u5168\u7ad9\u95dc\u9375\u5b57\u641c\u5c0b"));
  };

  window.addEventListener("hashchange", () => setTimeout(enhance, 0));
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enhance); else enhance();
})();
