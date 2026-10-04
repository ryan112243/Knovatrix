// 國中資優：高中端教育部核定數理資優班學校清單與公開試題入口。
window.juniorGiftedMathRegionMap = {
  "基隆市":"基隆、雙北地區","臺北市":"基隆、雙北地區","新北市":"基隆、雙北地區",
  "桃園市":"桃竹苗地區","新竹市":"桃竹苗地區","新竹縣":"桃竹苗地區","苗栗縣":"桃竹苗地區",
  "臺中市":"中彰投地區","彰化縣":"中彰投地區","南投縣":"中彰投地區",
  "雲林縣":"雲嘉南地區","嘉義市":"雲嘉南地區","嘉義縣":"雲嘉南地區","臺南市":"雲嘉南地區",
  "高雄市":"高屏、東部、離島地區","屏東縣":"高屏、東部、離島地區","宜蘭縣":"高屏、東部、離島地區","花蓮縣":"高屏、東部、離島地區","臺東縣":"高屏、東部、離島地區","澎湖縣":"高屏、東部、離島地區","金門縣":"高屏、東部、離島地區","連江縣":"高屏、東部、離島地區"
};
const school = (name, files = [], officialUrl = "") => ({ name, files, officialUrl });
const official = (label, url, detail) => ({ label, url, detail });
const zhengge = (label, url, detail) => ({ label, url, detail, source: "正哥愛數學" });
window.juniorGiftedMathExamCatalog = {
  "基隆市": [school("國立基隆高級中學"), school("國立基隆高級女子中學")],
  "臺北市": [school("臺北市立建國高級中學"), school("臺北市立第一女子高級中學"), school("國立臺灣師範大學附屬高級中學"), school("臺北市立成功高級中學"), school("臺北市立中山女子高級中學"), school("臺北市立松山高級中學"), school("臺北市立大同高級中學"), school("臺北市立麗山高級中學"), school("臺北市立景美女子高級中學"), school("臺北市立成淵高級中學"), school("臺北市立大直高級中學"), school("臺北市立百齡高級中學")],
  "新北市": [school("新北市立板橋高級中學"), school("新北市立新莊高級中學"), school("新北市立中和高級中學"), school("新北市立丹鳳高級中學"), school("新北市立新店高級中學"), school("新北市立永平高級中學"), school("新北市立三民高級中學"), school("新北市立安康高級中學"), school("新北市立錦和高級中學")],
  "桃園市": [school("桃園市立武陵高級中學", [official("武陵高中數理資優班：參考書目及參考試題", "https://www.wlsh.tyc.edu.tw/p/412-1000-234.php", "桃園市立武陵高級中學官方數理資優班頁面。")]), school("桃園市立桃園高級中學"), school("國立中央大學附屬中壢高級中學"), school("桃園市立內壢高級中學"), school("桃園市立陽明高級中學"), school("桃園市立平鎮高級中學"), school("桃園市立南崁高級中學")],
  "新竹市": [school("國立新竹高級中學"), school("國立新竹女子高級中學"), school("國立新竹科學園區實驗高級中等學校")],
  "新竹縣": [school("國立竹北高級中學")],
  "苗栗縣": [school("國立苗栗高級中學"), school("國立竹南高級中學")],
  "臺中市": [school("臺中市立臺中第一高級中等學校", [official("臺中一中數資班歷屆考題入口", "https://tcfsh.tc.edu.tw/p/412-1076-19345.php?Lang=zh-tw", "臺中一中官方教務處／特教組頁面。")]), school("臺中市立臺中女子高級中等學校"), school("國立中興大學附屬高級中學"), school("臺中市立文華高級中等學校"), school("臺中市立臺中第二高級中等學校"), school("臺中市立清水高級中學"), school("臺中市立長億高級中等學校"), school("臺中市立忠明高級中等學校")],
  "彰化縣": [school("國立彰化高級中學", [official("彰化高中數理資優班歷屆試題", "https://www.chsh.chc.edu.tw/p/412-1009-414.php?Lang=zh-tw", "國立彰化高中官方歷屆試題頁面。")]), school("國立彰化女子高級中學"), school("國立員林高級中學")],
  "南投縣": [school("國立中興高級中學")],
  "雲林縣": [school("國立斗六高級中學", [official("斗六高中數理資優班歷屆試題", "https://www.tlsh.ylc.edu.tw/affairs/aca-affairs/tlsh3/tlsh3-4/", "國立斗六高中官方歷屆試題頁面，列有 107 至 114 學年度。")]), school("國立虎尾高級中學")],
  "嘉義市": [school("國立嘉義高級中學", [official("嘉義高中資優班歷屆試題", "https://www.cysh.cy.edu.tw/p/412-1008-1045.php", "國立嘉義高中官方資優班歷屆資料頁面。"), official("嘉義高中資優班歷屆試題與解答", "https://www.cysh.cy.edu.tw/p/403-1008-242-1.php?Lang=zh-tw", "國立嘉義高中官方資優班歷屆試題頁面。")]), school("國立嘉義女子高級中學")],
  "嘉義縣": [],
  "臺南市": [school("國立臺南第一高級中學"), school("國立臺南女子高級中學"), school("國立臺南大學附屬高級中學")],
  "高雄市": [school("高雄市立高雄高級中學"), school("高雄市立高雄女子高級中學"), school("國立鳳山高級中學"), school("國立高雄師範大學附屬高級中學"), school("高雄市立新莊高級中學"), school("高雄市立瑞祥高級中學"), school("高雄市立鼓山高級中學"), school("高雄市立左營高級中學")],
  "屏東縣": [school("國立屏東高級中學"), school("國立屏東女子高級中學"), school("國立潮州高級中學")],
  "宜蘭縣": [school("國立宜蘭高級中學"), school("國立羅東高級中學")],
  "花蓮縣": [school("國立花蓮高級中學"), school("國立花蓮女子高級中學")],
  "臺東縣": [school("國立臺東高級中學"), school("國立臺東女子高級中學")],
  "澎湖縣": [], "金門縣": [], "連江縣": []
};

// 只收錄已核對的學校官方題庫與「正哥愛數學」頁面；其他來源先不加入。
const setGiftedMathFiles = (city, name, files) => {
  const entry = window.juniorGiftedMathExamCatalog[city].find(item => item.name === name);
  if (entry) entry.files = files;
};
setGiftedMathFiles("臺北市", "臺北市立建國高級中學", [
  zhengge("建中數理資優班逐年試題", "https://sites.google.com/chjs.ntpc.edu.tw/carlovemath/建中資優班", "100–114 年；原站可選擇各年試題。")
]);
setGiftedMathFiles("桃園市", "桃園市立武陵高級中學", [
  official("武陵數理資優班參考試題", "https://www.wlsh.tyc.edu.tw/p/16-1000-14437.php?Lang=zh-tw", "校方提供的參考試題；不是特定學年度的歷屆考卷。")
]);
setGiftedMathFiles("臺中市", "臺中市立臺中第一高級中等學校", [
  official("中一中數資班歷屆考題", "https://tcfsh.tc.edu.tw/p/403-1076-4401.php", "106–115 學年度；逐年提供各科試題，部分年份含解答與實作。"),
  zhengge("中一中資優班逐年試題", "https://sites.google.com/chjs.ntpc.edu.tw/carlovemath/中一中資優班", "100–114 年；含第一階段及部分年份第二階段實作。")
]);
setGiftedMathFiles("臺中市", "臺中市立文華高級中等學校", [
  official("文華高中資優鑑定歷屆考題", "https://web.whsh.tc.edu.tw/ischool/publish_page/7/?cid=1183", "官方頁面列有 98–110 學年度試題；部分年度為數理暨語文合併資料，請依檔案內容辨識。")
]);
setGiftedMathFiles("彰化縣", "國立彰化高級中學", [
  official("彰中數理資優班歷屆試題", "https://www.chsh.chc.edu.tw/p/412-1009-414.php?Lang=zh-tw", "校方歷屆試題入口。"),
  official("114 學年度數理資優班複選試題", "https://www.chsh.chc.edu.tw/p/405-1009-169977,c414.php?Lang=zh-tw", "數學、物理、化學官方試題與參考解答。"),
  zhengge("彰中資優班逐年試題", "https://sites.google.com/chjs.ntpc.edu.tw/carlovemath/彰中資優班", "100–114 年；原站可選擇各年複試試題。")
]);
setGiftedMathFiles("彰化縣", "國立彰化女子高級中學", [
  official("彰女資優鑑定複選參考例題", "https://www.chgsh.chc.edu.tw/%E5%85%AC%E5%91%8A%E8%A8%8A%E6%81%AF/%E8%A1%8C%E6%94%BF%E5%96%AE%E4%BD%8D/%E6%95%99%E5%8B%99%E8%99%95/%E7%89%B9%E6%95%99%E7%B5%84/%E5%AD%B8%E8%A1%93%E6%80%A7%E5%90%91%E8%B3%87%E5%84%AA%E9%91%91%E5%AE%9A/", "官方數理科複選例題；並非歷屆正式考卷。")
]);
setGiftedMathFiles("雲林縣", "國立斗六高級中學", [
  official("斗六高中數理資優班歷屆試題", "https://www.tlsh.ylc.edu.tw/affairs/aca-affairs/tlsh3/tlsh3-4/", "107–114 學年度複選；逐年提供數學、化學、生物、物理考題。")
]);
setGiftedMathFiles("雲林縣", "國立虎尾高級中學", [
  official("虎尾高中數理資優班歷屆試題", "https://www.hwsh.ylc.edu.tw/ischool/publish_page/3/?cid=57", "官方招生訊息頁列有 109–114 學年度甄選試題；依年份選擇下載。")
]);
setGiftedMathFiles("嘉義市", "國立嘉義高級中學", [
  official("嘉中資優班歷屆試題與解答", "https://www.cysh.cy.edu.tw/p/403-1008-242-1.php?Lang=zh-tw", "100–113 學年度；原站逐年提供各科試題與解答。"),
  zhengge("嘉中資優班逐年試題", "https://sites.google.com/chjs.ntpc.edu.tw/carlovemath/嘉中資優班", "102–114 年；原站可選擇各年複試試題。")
]);
setGiftedMathFiles("臺南市", "國立臺南第一高級中學", [
  official("110 學年度數理資優班複選試題", "https://www.tnfsh.tn.edu.tw/latestevent/Details.aspx?Parser=22%2C6%2C256%2C%2C%2C%2C4802", "校方提供數學、自然及數學／物理／化學／生物實作試題。"),
  zhengge("南一中資優班逐年試題", "https://sites.google.com/chjs.ntpc.edu.tw/carlovemath/南一中資優班", "100–113 年；原站可選擇各年第一階段及部分複試試題。")
]);
