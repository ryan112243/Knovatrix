# Knovatrix

學科與資優教育題庫、實驗及影音知識庫的靜態網站。

## 本機預覽

這是零建置依賴的純靜態網站。可直接開啟 `index.html`，或使用任何靜態檔案伺服器預覽。

## GitHub Pages

1. 將儲存庫推送至 GitHub。
2. 進入 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**。
4. 選擇 `main` 分支與 `/ (root)` 後儲存。

網站使用 hash 路由，因此不需伺服器 rewrite 規則，可直接部署在使用者網站或專案子路徑。

## 後續內容接入

- 學制、學科與單元：集中在 `curriculum-data.js`。
- 科學班考古題：PDF 放在 `files/science-class/`，並於 `science-exams.js` 的 `files` 登記；沒有站內檔案時只顯示「沒有檔案」。
- 競賽來源盤點：集中在 `resource-catalog.js`；有合法重製權時使用 `file` 接站內 PDF，否則連到主辦單位官方來源。
- Google 表單：4 個已發布表單已接到「意見與共創」頁面。
- PDF 與圖片：儲存方案確認後，再將題庫面板接到 GitHub 目錄清單或 Google Drive 公開連結資料。
- YouTube：頻道與影片建立後，在各單元的「解題與影音」面板加入嵌入連結。

## 專案檔案配置

- 網站入口與主程式：根目錄 `index.html`、`app.js`、`styles.css` 及資料目錄旁的 `*.js`。
- 靜態搜尋入口：`catalog.html`、`science-class-exams.html` 與 `exam-archives/`。
- 科學班校別 SEO 頁：`science-class-exams/<school>/index.html`；由 `scripts/generate-science-school-pages.js` 產生。
- 公開題目檔：`files/` 依考試類別、學校與學年度收納；頁面資料中的相對路徑必須保持一致。
- 可重用維護工具：`scripts/`；臨時分析、渲染與 QA 產物集中保留在 `tmp/`。
- 本機社群草稿與頭貼：`content/threads/`（不隨網站部署）；競賽來源盤點與報告分別放在 `tools/`、`reports/`。
- 學校名稱的初試解析 Word 工作資料夾屬未完成內容，保留原位，不納入本次整理或網站發佈。

新增或搬動公開檔案前，先確認 `app.js`／資料檔的連結路徑，再逐一驗證部署後的實際網址。

## MVP 已包含

- 9 個全局導覽入口
- 5 大學制及完整初版學科目錄
- 課綱／單元主題排序切換
- 重點與實驗／試題與下載／解題與影音三頁籤
- 4 個匿名表單入口的欄位與流程預覽
- 10 校科學班 100–115 學年度官方試題索引
- 主要數理競賽官方歷屆題目與授權狀態標示
- 關於與贊助支持頁
- 桌面、平板與手機響應式版面
