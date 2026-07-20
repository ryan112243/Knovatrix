const scienceExamYears = Array.from({ length: 16 }, (_, index) => 115 - index);

window.scienceClassExamCatalog = {
  "建國中學科學班": { city: "臺北市", official: "https://sites.google.com/gl.ck.tp.edu.tw/scienter", sourceLabel: "建中科學班官方專區", note: "本站收錄建中官方公開的 112–114 學年度數學與自然科試題；完整歷屆資料請回到校方專區查詢。", archiveYears: [114, 113, 112] },
  "北一女中科學班": { city: "臺北市", archiveLabel: "科學班範例試題", official: "https://www.fg.tp.edu.tw/fgscience/%E7%A7%91%E5%AD%B8%E7%8F%AD/", sourceLabel: "北一女科學班官方專區", note: "校方僅公開 107～113 學年度的語文、數學與自然科範例試題；本站不將其標示為正式歷屆考題。" },
  "師大附中科學班": { city: "臺北市", official: "https://www.hs.ntnu.edu.tw/science-class/", sourceLabel: "師大附中科學班官方專區", note: "歷年甄選資訊分散於校方公告；本站先提供逐年官方查找入口。" },
  "武陵高中科學班": { city: "桃園市", official: "https://www.wlsh.tyc.edu.tw/p/404-1000-9975,c103-1.php", sourceLabel: "武陵高中科學班數學試題官方頁面", note: "校方公開 101–112 學年度科學班入學測驗數學試題。", direct: { 110: "https://www.wlsh.tyc.edu.tw/var/file/0/1000/img/31/543074645.pdf", 115: "https://www.wlsh.tyc.edu.tw/p/16-1000-41360.php?Lang=zh-tw" } },
  "新竹科學園區實中科學班": { city: "新竹市", official: "https://www.nehs.hc.edu.tw/?tag=sci", sourceLabel: "竹科實中科學班官方公告", note: "校方未公開歷屆甄選試題，本站目前沒有可收錄的檔案。" },
  "臺中一中科學班": { city: "臺中市", official: "https://tcfsh.tc.edu.tw/p/403-1076-4548-1.php", sourceLabel: "臺中一中歷屆試題官方專區", note: "官方歷屆專區已整理 100–114 學年度甄選試題；115 年度依校方更新。", archiveYears: scienceExamYears.filter(year => year <= 114) },
  "彰化高中科學班": { city: "彰化縣", official: "https://www.chsh.chc.edu.tw/p/412-1009-4510.php", sourceLabel: "彰化高中歷屆甄選試題官方專區", note: "官方頁面公開 106～114 年科學能力檢定、實驗實作試題與參考答案；目前未列出 115 年。", archiveYears: scienceExamYears },
  "嘉義高中科學班": { city: "嘉義市", official: "https://www.cysh.cy.edu.tw/p/412-1008-888.php", sourceLabel: "嘉義高中歷屆甄選試題官方專區", note: "官方專區依年度發布科學能力檢定、實驗實作試題與參考答案；本站已收錄至 115 學年度。", archiveYears: scienceExamYears },
  "臺南一中科學班": { city: "臺南市", official: "https://www.tnfsh.tn.edu.tw/sub/latestevent/index.aspx?Parser=9%2C31%2C200", sourceLabel: "臺南一中歷屆試題官方專區", note: "官方歷屆專區收錄各年度科學能力檢定與相關附件。", archiveYears: scienceExamYears, direct: { 100: "https://www.tnfsh.tn.edu.tw/df_ufiles/245/100%E7%A7%91%E5%AD%B8%E7%8F%AD%E5%AD%B8%E8%83%BD%E5%8A%9B%E6%AA%A2%E5%AE%9A--%E6%95%B8%E5%AD%B8.pdf" } },
  "高雄中學科學班": { city: "高雄市", official: "https://www.kshs.kh.edu.tw/sub/form/index?Parser=2%2C34%2C211", sourceLabel: "高雄中學歷屆試題官方專區", note: "官方表單下載專區集中發布科學班歷屆試題與答案。", archiveYears: scienceExamYears }
};
