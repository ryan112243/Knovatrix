const officialLink = (title, url, detail) => ({ title, url, detail, status: "official", badge: "官方公開來源" });
const indexOnly = (title, url, detail) => ({ title, url, detail, status: "index", badge: "僅建立索引" });
const unavailable = (title, detail) => ({ title, detail, status: "restricted", badge: "未收錄檔案" });

const schoolExamCatalog = {
  junior: {
    "新北中正國中": officialLink("新北市立中正國中段考考古題", "https://www.ccjhs.ntpc.edu.tw/p/403-1000-114.php", "依學期、年級與次別發布，官方頁面目前有多頁歷屆資料。"),
    "高雄中正高中國中部": officialLink("高雄中正高中國中部段考題庫", "https://www.cchs.kh.edu.tw/ischool/publish_page/3/?cid=558", "收錄 108 學年度以前至近期各學期試題與解答。"),
    "高雄鼓山高中國中部": officialLink("鼓山高中國中部歷屆試題", "https://www.kusjh.kh.edu.tw/side_content/1076", "校方公開各年級段考試題與解答附件。"),
    "高雄正興國中": officialLink("正興國中歷屆考題資訊網", "https://affairs.kh.edu.tw/3725/upload/file_list/15", "依學年度與段考次別公開各科 PDF。"),
    "新北頭前國中": officialLink("頭前國中歷屆段考試題", "https://www.tqjh.ntpc.edu.tw/p/403-1000-127.php", "校方分為 101–105 與 106 學年度以後兩套歷屆資料。"),
    "高雄楠梓國中": officialLink("楠梓國中歷屆段考題目卷", "https://www.ntjh.kh.edu.tw/view/index.php?DataId=258030&MainMenuId=59190&MainType=101&SubMenuId=0&SubType=0&WebID=304&Work=View&page=1", "校方公告明示可自行下載運用，檔案由官方頁面連往公開資料夾。")
  },
  senior: {
    "高雄鼓山高中": officialLink("鼓山高中高中部歷屆試題", "https://www.kusjh.kh.edu.tw/sidelist/67", "涵蓋多學年度、三個年級與各科段考試題及解答。"),
    "武陵高中": indexOnly("武陵高中公開段考試題範例", "https://www.wlsh.tyc.edu.tw/var/file/0/1000/img/31/551595230.pdf", "校方公開的 111 學年度高二數學段考卷；本站不另存副本。"),
    "臺中一中": indexOnly("臺中一中公開模擬試題", "https://webapps.tcfsh.tc.edu.tw/jflai/rab/ra269.pdf", "校方公開的學測模擬試題範例；後續再補完整官方索引。"),
    "臺南一中": indexOnly("臺南一中公開段考詳解", "https://www.tnfsh.tn.edu.tw/df_ufiles/073/%E9%AB%98%E4%B8%80%E5%9C%8B%E6%96%87%E4%B8%89%E6%AE%B5%E8%A9%B3%E8%A7%A3.pdf", "校方公開的高一國文段考試題詳解範例；本站不另存副本。"),
    "嘉義高中": officialLink("嘉義高中各類題庫", "https://www.cysh.cy.edu.tw/p/412-1008-1422.php", "官方彙整科學班、資優班與國中數學競試等公開題庫。")
  }
};

const competitionCatalog = {
  "junior-gifted::TRML 國中數學競賽（原 JHMC）": [officialLink("TRML 國中（原 JHMC）官方題型與試題", "https://www.99cef.org.tw/trml-j/", "九九文教基金會公開競賽規則，以及 2024 競速賽、個人賽與團體賽題型範例。完整歷屆出版品仍不重製。")],
  "junior-gifted::張進通許世賢國中數學能力競試": [officialLink("嘉義高中歷屆國中數學能力競試", "https://www.cysh.cy.edu.tw/p/412-1008-234.php", "承辦學校公開 102–105、108–109、112–114 學年度試題與部分參考答案。")],
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
  "senior-gifted::學科能力競賽｜生物": [unavailable("生物學科能力競賽歷屆試題", "試題由各區與承辦學校分散發布，尚未找到教育部統一公開授權題庫；不採第三方整理包。")],
  "senior-gifted::學科能力競賽｜地球科學": [unavailable("地科學科能力競賽歷屆試題", "試題由各區與承辦學校分散發布，尚未找到教育部統一公開授權題庫；不採第三方整理包。")],
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
  if (subject === "公開段考題庫") {
    const item = schoolExamCatalog[levelId]?.[topic];
    return item ? { title: `${topic}公開題庫`, items: [item] } : null;
  }
  const items = competitionCatalog[`${levelId}::${subject}`];
  return items ? { title: `${subject}官方資源`, items } : null;
};
