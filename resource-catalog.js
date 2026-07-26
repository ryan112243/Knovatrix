const officialLink = (title, url, detail) => ({ title, url, detail, status: "official", badge: "官方公開來源" });
const localFile = (title, file, detail) => ({ title, file, detail, status: "official", badge: "本站收錄檔案" });
const indexOnly = (title, url, detail) => ({ title, url, detail, status: "index", badge: "僅建立索引" });
const unavailable = (title, detail) => ({ title, detail, status: "restricted", badge: "未收錄檔案" });

const competitionCatalog = {
  "junior-gifted::TRML 國中數學競賽（原 JHMC）": [officialLink("國中 TRML 範例試題｜2024 JHMC 競速賽", "https://www.99cef.org.tw/wp-content/uploads/2025/12/2024JHMC%E7%AB%B6%E9%80%9F%E8%B3%BD%E8%A9%A6%E9%A1%8C.pdf", "由九九文教基金會提供的 2024 JHMC 競速賽範例試題官方 PDF。"), officialLink("國中 TRML 範例試題｜2024 JHMC 個人賽", "https://www.99cef.org.tw/wp-content/uploads/2025/12/2024JHMC%E5%80%8B%E4%BA%BA%E8%B3%BD%E8%A9%A6%E9%A1%8C.pdf", "由九九文教基金會提供的 2024 JHMC 個人賽範例試題官方 PDF。"), officialLink("國中 TRML 範例試題｜2024 JHMC 團體賽", "https://www.99cef.org.tw/wp-content/uploads/2025/12/2024JHMC%E5%9C%98%E9%AB%94%E8%B3%BD%E8%A9%A6%E9%A1%8C.pdf", "由九九文教基金會提供的 2024 JHMC 團體賽範例試題官方 PDF。"), officialLink("九九文教基金會｜國中 TRML 官方網站與賽制說明", "https://www.99cef.org.tw/trml-j/", "九九文教基金會提供的國中 TRML 官方網站；可對照競速賽、個人賽與團體賽的賽制說明圖片。本站僅連結公開來源，不重製完整歷屆出版品。")],
  "junior-gifted::張進通許世賢國中數學能力競試": [officialLink("114 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-133913,r12.php?Lang=zh-tw", "嘉義高中承辦單位公開的 114 學年度競試資料頁面。"), officialLink("113 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-130371,r12.php", "嘉義高中承辦單位公開的 113 學年度競試資料頁面。"), officialLink("101 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1408,r107.php", "嘉義高中承辦單位公開的 101 學年度競試資料頁面。"), officialLink("100 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1407,r107.php", "嘉義高中承辦單位公開的 100 學年度競試資料頁面。"), officialLink("99 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1406,r107.php", "嘉義高中承辦單位公開的 99 學年度競試資料頁面。"), officialLink("98 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1405,r107.php", "嘉義高中承辦單位公開的 98 學年度競試資料頁面。"), officialLink("97 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1404,r107.php", "嘉義高中承辦單位公開的 97 學年度競試資料頁面。"), officialLink("96 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1403,r107.php", "嘉義高中承辦單位公開的 96 學年度競試資料頁面。"), officialLink("95 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1402,r107.php", "嘉義高中承辦單位公開的 95 學年度競試資料頁面。"), officialLink("94 學年度張進通、許世賢國中數學能力競試", "https://www.cysh.cy.edu.tw/p/406-1008-1401,r107.php", "嘉義高中承辦單位公開的 94 學年度競試資料頁面。"), officialLink("嘉義高中歷屆國中數學能力競試", "https://www.cysh.cy.edu.tw/p/412-1008-234.php", "承辦學校公開 102–105、108–109、112–114 學年度試題與部分參考答案。")],
  "junior-gifted::AMC 8／AMC 10": [indexOnly("MAA American Mathematics Competitions", "https://maa.org/student-programs/amc/", "題目權利屬 MAA；本站只導向主辦單位資訊，不重製試卷。")],
  "junior-gifted::IMAS 數學競賽": [indexOnly("九章數學教育基金會 IMAS 公告", "https://www.chiuchang.org.tw/modules/news/article.php?storyid=585", "臺灣主辦單位的試題公告入口；只索引基金會公開頁面，不彙整或重製非公開題本。")],
  "junior-gifted::數學奧林匹亞初選銜接": [officialLink("臺灣數學奧林匹亞歷屆試題", "https://tpmso.org/tmo/index.php/problems/", "數學奧林匹亞辦公室公開的國內選拔試題。")],
  "junior-gifted::IJSO 國際國中科學奧林匹亞": [officialLink("IJSO 近五屆國際賽試題", "https://tpmso.org/twijso/index.php/about/exam/", "官方提供中文、英文選擇題、理論題與實驗題。")],
  "junior-gifted::科展與科學探究競賽": [officialLink("全國中小學科展作品庫", "https://twsf.ntsec.gov.tw/", "國立臺灣科學教育館官方科展資料庫。")],
  "senior-gifted::數學奧林匹亞 TMO／IMO": [officialLink("TMO 國內選拔歷屆試題", "https://tpmso.org/tmo/index.php/problems/", "臺灣數學奧林匹亞辦公室公開資料。"), officialLink("IMO 官方歷屆試題", "https://imo-official.com/problems.aspx", "國際數學奧林匹亞官方依年份與語言提供 PDF。")],
  "senior-gifted::APMO 亞太數學奧林匹亞": [indexOnly("APMO 臺灣選拔資訊", "https://tpmso.org/tmo/", "透過臺灣數學奧林匹亞辦公室查詢最新選拔與公開資料。")],
  "senior-gifted::EGMO 歐洲女子數學奧林匹亞": [officialLink("EGMO 歷屆賽事", "https://www.egmo.org/egmos/", "EGMO 官方歷屆賽事與題目入口。")],
  "senior-gifted::TRML 高中數學競賽": [officialLink("TRML 高中官方題型與近期試題", "https://www.99cef.org.tw/trml-s/", "九九文教基金會公開競賽規則，以及 2025 團體賽、思考賽與個人賽題型。完整歷屆出版品仍不重製。")],
  "senior-gifted::清華盃高中化學科能力競賽": [officialLink("清華盃第 4–10 屆試題", "https://chem.asdc.tw/book/55?page=4", "高中化學學科中心公開 2007–2013 年筆試、解答與決賽試題。"), officialLink("清華盃第 1–4 屆試題", "https://chem.asdc.tw/book/55?page=5", "高中化學學科中心公開 2004–2007 年筆試、解答與決賽試題。")],
  "senior-gifted::AMC 10／12 與 AIME": [indexOnly("MAA AMC 官方入口", "https://maa.org/student-programs/amc/", "MAA 管理競賽題目與出版；本站不複製或重新散布。")],
  "senior-gifted::學科能力競賽｜數學": [officialLink("TMO 歷屆試題延伸", "https://tpmso.org/tmo/index.php/problems/", "作為數學學科能力競賽的官方公開進階練習來源。")],
  "senior-gifted::學科能力競賽｜物理": [unavailable("物理學科能力競賽歷屆試題", "試題由各區與承辦學校分散發布，尚未找到教育部統一公開授權題庫；不採第三方整理包。")],
  "senior-gifted::學科能力競賽｜化學": [officialLink("高中化學學科中心能力競賽題庫", "https://chem.asdc.tw/taxonomy/term/378", "官方學科中心公開教育部 92–95 學年度決賽、分區複賽、筆試、實驗與參考答案。")],
  "senior-gifted::學科能力競賽｜生物": [localFile("111 學年度全國生物科學科能力競賽決賽筆試", "files/academic-competition/biology/111-全國生物科學科能力競賽決賽筆試.pdf", "國立彰化師範大學官方公開試題；本站收錄檔案並保留原始來源。"), officialLink("生物學科能力競賽官方題庫入口", "https://biology.ncue.edu.tw/", "國立彰化師範大學承辦網站，持續更新歷屆試題與競賽資訊。")],
  "senior-gifted::學科能力競賽｜地球科學": [localFile("108 學年度地球科學科能力競賽決賽筆試含答案", "files/academic-competition/earth-science/108-地球科學科能力競賽決賽筆試含答案.pdf", "國立中正大學地球與環境科學系官方公開試題；本站收錄檔案並保留原始來源。"), localFile("107 學年度地球科學科能力競賽決賽筆試含答案", "files/academic-competition/earth-science/107-地球科學科能力競賽決賽筆試含答案.pdf", "國立中正大學地球與環境科學系官方公開試題；本站收錄檔案並保留原始來源。"), officialLink("地球科學能力競賽官方試題下載頁", "https://eq.ccu.edu.tw/p/412-1070-1953.php?Lang=zh-tw", "中正大學官方頁面公開 96–108 學年度決賽筆試、口試與參考答案。")] ,
  "senior-gifted::學科能力競賽｜資訊": [unavailable("資訊學科能力競賽歷屆試題", "各承辦單位的公開方式不同；未確認授權前不搬運題目或測資。")],
  "senior-gifted::物理奧林匹亞": [officialLink("物理奧林匹亞國內選拔歷屆試題", "https://tpmso.org/ipho/index.php/problems/", "官方整理國內初選、複選與相關資料。")],
  "senior-gifted::化學奧林匹亞": [officialLink("高中化學學科中心化奧題庫（一）", "https://chem.asdc.tw/book/55?order=created&page=1&sort=asc", "公開 IChO 初選、選訓、理論與實作試題。"), officialLink("高中化學學科中心化奧題庫（二）", "https://chem.asdc.tw/book/55?page=5", "公開第 44 屆 IChO 理論、實驗與初選試題入口。")],
  "senior-gifted::生物奧林匹亞": [officialLink("生物奧林匹亞歷屆試題", "https://tpmso.org/ibo/index.php/test/", "官方提供初賽、複賽、選拔營與國際賽入口。")],
  "senior-gifted::地球科學奧林匹亞": [officialLink("地球科學奧林匹亞初選歷屆試題", "https://tpmso.org/ieso/index.php/archeology/", "官方公開多屆全國初選測驗。")],
  "senior-gifted::資訊奧林匹亞 TOI／IOI": [officialLink("TOI 推廣歷屆試題", "https://tpmso.org/toi/index.php/tasks/", "資訊奧林匹亞官方練習賽與歷屆題目入口。")],
  "senior-gifted::APCS 大學程式設計先修檢測": [indexOnly("APCS 官方網站", "https://apcs.csie.ntnu.edu.tw/", "查詢檢測資訊與官方公開資源；本站不重製試題。")],
  "senior-gifted::IYPT 物理辯論": [indexOnly("IYPT 歷屆問題入口", "https://old.iypt.org/Problems.html", "IYPT 官方舊站指向歷屆問題典藏；本站只建立來源索引。")],
  "senior-gifted::科展與臺灣國際科展": [officialLink("臺灣國際科展與全國科展", "https://twsf.ntsec.gov.tw/", "國立臺灣科學教育館官方作品與競賽資料庫。")]
};

window.getPublicResources = (levelId, subject, topic) => {
  const items = competitionCatalog[`${levelId}::${subject}`];
  if (!items) return null;
  const isExhibition = subject.includes("科展");
  const pdfItems = isExhibition
    ? items
    : items.filter(item => /\.pdf(?:$|[?#])/i.test(item.file || ""));
  return pdfItems.length ? { title: `${subject}官方資源`, items: pdfItems } : null;
};
