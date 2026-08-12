(function () {
  const copy = {
    homeLead: "從國小資優到高中競賽，整理學習重點、公開試題與實驗資源，讓你能依學級、科目、年份找到下一步。",
    aboutLead: "Knovatrix 是一個整理學習重點、歷屆試題與公開競賽資源的知識庫，讓複習不必在分散的頁面之間來回尋找。",
    videoTitle: "影音內容會逐步上架",
    videoText: "解說影片需要逐題確認、撰稿、錄製與剪輯，會依序分批製作。影片尚未完成前，仍可先使用重點筆記與公開試題連結。"
  };
  const addNote = (root) => {
    if (!root || root.querySelector(".production-note")) return;
    const note = document.createElement("aside");
    note.className = "production-note";
    note.innerHTML = `<strong>${copy.videoTitle}</strong><p>${copy.videoText}</p>`;
    root.appendChild(note);
  };
  const enhance = () => {
    const path = location.hash.slice(1).split("?")[0] || "/";
    if (path === "/") {
      const lead = document.querySelector("main .hero .lead");
      if (lead) lead.textContent = copy.homeLead;
      addNote(document.querySelector("main .hero-copy"));
    }
    if (path === "/about") {
      const lead = document.querySelector("main .page-hero .lead");
      if (lead) lead.textContent = copy.aboutLead;
      addNote(document.querySelector("main .page-hero .wrap"));
    }
    document.querySelectorAll("main input[type='search']").forEach(input => {
      input.setAttribute("aria-label", "搜尋學校、年份、科目或單元");
    });
  };
  window.addEventListener("hashchange", () => setTimeout(enhance, 0));
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enhance); else enhance();
})();