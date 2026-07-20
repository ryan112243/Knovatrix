// 建國中學科學班官方公開試題。98–114 學年度連結均整理自建中官方歷屆試題頁。
(() => {
  const school = window.scienceClassExamCatalog?.["建國中學科學班"];
  if (!school) return;

  const official = (label, url) => ({ label, url, type: "pdf" });
  school.files = {
    "114": [
      { label: "數學能力測驗（本站 PDF）", path: "files/science-class/cksh/114/114-建中科學班數學能力測驗.pdf" },
      { label: "自然科學能力測驗（本站 PDF）", path: "files/science-class/cksh/114/114-建中科學班自然科學能力測驗.pdf" },
      official("語文能力測驗", "https://drive.google.com/file/d/1ib6cr4mnkeX-IKkcTSxiMVydRNW-KYQb/view?usp=sharing"),
      official("選擇題解答", "https://drive.google.com/file/d/1f9jSMkIUreuBmnE5Kes7JJUTYP5yI64y/view?usp=sharing")
    ],
    "113": [
      { label: "數學能力測驗（本站 PDF）", path: "files/science-class/cksh/113/113-建中科學班數學能力測驗.pdf" },
      { label: "自然科學能力測驗（本站 PDF）", path: "files/science-class/cksh/113/113-建中科學班自然科學能力測驗.pdf" },
      official("語文能力測驗", "https://drive.google.com/file/d/1vpI69oyI-yS8EaqDXn8TCmpJaavQ3gcQ/view?usp=sharing"),
      official("選擇題解答", "https://drive.google.com/file/d/11BQSEnDjBS2VH16OdDCfVT-Qg-WWg2qT/view?usp=sharing")
    ],
    "112": [
      { label: "數學能力測驗（本站 PDF）", path: "files/science-class/cksh/112/112-建中科學班數學能力測驗.pdf" },
      { label: "自然科學能力測驗（本站 PDF）", path: "files/science-class/cksh/112/112-建中科學班自然科學能力測驗.pdf" },
      official("語文能力測驗", "https://drive.google.com/file/d/1o9SBIVvNzWwHHlg9SV927Ngx2Lkrmi6c/view?usp=sharing"),
      official("選擇題解答", "https://drive.google.com/file/d/1ie2Iz-RLzkPepR-DEZrQg08YuiQn2GCL/view?usp=sharing")
    ],
    "111": [
      official("數學能力測驗", "https://drive.google.com/file/d/1jQHLfctQw7PNZTTmGHOUaDDxJ3u9FPDk/view?usp=share_link"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/14vetUEd-G8ehEx7ROUa8kUWGHQVhI139/view?usp=share_link"),
      official("語文能力測驗", "https://drive.google.com/file/d/1fMrL6uEDjKhHAQJMJ4R4ka-e8H05aEbP/view?usp=share_link"),
      official("選擇題解答", "https://drive.google.com/file/d/18PJMYQMNGIudXOQOB1bUqxp0JqI4mR-P/view?usp=share_link")
    ],
    "110": [
      official("數學能力測驗", "https://drive.google.com/file/d/1SS7klNN7t48SYPQjEE9XIVERalXEqDRk/view?usp=sharing"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/1fkAa8M9a8GZHRoQ_Sp4KCwM2hMdeV0Mb/view?usp=sharing"),
      official("語文能力測驗", "https://drive.google.com/file/d/1mAhdeHQkAwI6K6HzgnkOHTmpjRSE4UyL/view?usp=sharing"),
      official("選擇題解答", "https://drive.google.com/file/d/1nP1ggM0TbAfO_0KYF9o7rqeyCXas4-aS/view?usp=sharing")
    ],
    "109": [
      official("數學能力測驗", "https://drive.google.com/file/d/1QQLa4HmsUCSGpB00fVRX7PC9_5khM-ao/view?usp=sharing"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/1JZXM3INlvMGE5vZwhhnFSwAqFein6U-m/view?usp=sharing"),
      official("語文能力測驗", "https://drive.google.com/file/d/1ILDSfYIETSydE1HKu7l4rYa18WUIdzUg/view?usp=sharing"),
      official("選擇題解答", "https://drive.google.com/file/d/1KaXvMzSxUNIt73Xor2t3X-6u1tspsSCH/view?usp=sharing")
    ],
    "108": [
      official("數學能力測驗", "https://drive.google.com/open?id=1nvjBp_hnl25qSSl8GtGqdOmIDgYoux_Q"),
      official("自然科學能力測驗", "https://drive.google.com/open?id=1zi2d6izEeicEf-zm5b3JhvikM59RbBpy"),
      official("語文能力測驗", "https://drive.google.com/open?id=1wBgOvrJE7Tpa4m3qUyFqERp1IhgavSEm"),
      official("選擇題解答", "https://drive.google.com/open?id=1yt_EuHGvyPgD_fJzdNabDxlmtJCwD44o")
    ],
    "107": [
      official("數學能力測驗", "https://drive.google.com/open?id=16jLSHXZ_RkR5717zrM0nAe4f0bObeetP"),
      official("自然科學能力測驗", "https://drive.google.com/open?id=1CpNaTN70gNo8TeTfNaesikknrf9_VIuC"),
      official("語文能力測驗", "https://drive.google.com/open?id=1veeSnIrGFYIp8a31_xRiR9yy6BW1L5ez"),
      official("選擇題解答", "https://drive.google.com/open?id=1rC6rRxCNjtQWyUXJxNDai6moeMq6hnOn")
    ],
    "106": [
      official("數學能力測驗", "https://drive.google.com/open?id=1Ous-4usUNSNmcwXJSezukNsGnIz63Vwj"),
      official("自然科學能力測驗", "https://drive.google.com/open?id=1eHZEk30JMFpM8ttCFwNY9zN50F3xUpn2"),
      official("語文能力測驗", "https://drive.google.com/open?id=1FN8panw3g2CK18S36XXVK6iKeZ6t7wcS"),
      official("選擇題解答", "https://drive.google.com/open?id=1NjBAJJ7-cJjq90BSbQtuqwEMKLBHLGUx")
    ],
    "105": [
      official("數學能力測驗", "https://drive.google.com/file/d/0B4k-Ls6RCeC2Qm11XzA5MmZqVWc/view?resourcekey=0-tASKuuZWHPjfxKHgeMesrQ"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/0B4k-Ls6RCeC2ZTVGMVlXSDBfYm8/view?resourcekey=0-tUP8RCEeVgpZ4wBkUx_0dw"),
      official("語文能力測驗", "https://drive.google.com/file/d/0B4k-Ls6RCeC2M3BUWXFYRFRwdTA/view?resourcekey=0-RnRLsB-E4PqcY_v5eKbUYQ"),
      official("選擇題解答", "https://drive.google.com/file/d/0B4k-Ls6RCeC2Nlp3c1dwdXpYVUE/view?resourcekey=0-czbZrbctgEKHL969pCAi-w")
    ],
    "104": [
      official("數學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirZkRLMmpvaWg3Mlk/view?resourcekey=0-I--BlAD7r5d2xlMlFiN70w"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirZThxMzR6eFFhQmM/view?resourcekey=0-0Krv4TUoE4vWSMIiEko8Dg"),
      official("選擇題解答", "https://drive.google.com/file/d/0B7jDeVmaMNirNkM2WXZLSFlaSmc/view?resourcekey=0-CNIA9hOAMUmXepJ2C3O2qw")
    ],
    "103": [
      official("數學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirWTMtTjF3TWtxLWs/view?resourcekey=0-7QSn4Y3wLp_5Ir2nrvqr-g"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirLUdkNzhaajFYQlU/view?resourcekey=0-ClUY1YSxjjePW9iembn9_Q"),
      official("選擇題解答", "https://drive.google.com/file/d/0B7jDeVmaMNirN0xjRGFBQy1KVnM/view?resourcekey=0-BJ46hGE6-Hig4JhG-EEEfQ")
    ],
    "102": [
      official("數學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirUW1mTTg1TkxZODg/view?resourcekey=0-MUQ-KWQjr91eGZNepq5ceQ"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirNzF0dEdWS0NtOEU/view?resourcekey=0-I-vWHBBNLkW0-zbWIN0yOQ"),
      official("選擇題解答", "https://drive.google.com/file/d/0B7jDeVmaMNirTDhka0Z4dnIwU2c/view?resourcekey=0-qhJx_poRJoj1Jw31QIeDLw")
    ],
    "101": [
      official("數學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirdDl2UVJCVnJ2OFE/view?resourcekey=0-QF-C6iO19cb2PeBDdOPB2Q"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirMWl3MWlPSldmREk/view?resourcekey=0-7BAahCpR3M4DHZPRGliEeA"),
      official("選擇題解答", "https://drive.google.com/file/d/0B7jDeVmaMNirWEFHNWhfbkg3aW8/view?resourcekey=0-u2kA72gvr0QgBLcBXflYHA")
    ],
    "100": [
      official("數學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirWVFPSjk5cmJpM00/view?resourcekey=0-GDncXHR8zjBgYkXbyYTsOw"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNiraVo5N3BiWFFlLXM/view?resourcekey=0-5N9oq0zRIqXQwkJaOHay0g"),
      official("選擇題解答", "https://drive.google.com/file/d/0B7jDeVmaMNirWExZd1l6RFdzZ0U/view?resourcekey=0-KlqzkOuUPF4stPAi1r5UWg")
    ],
    "99": [
      official("數學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirNlFTZEpUM2x2OXM/view?resourcekey=0-claBsyQB00fO4BrPjs2mRg"),
      official("自然科學能力測驗", "https://drive.google.com/file/d/0B7jDeVmaMNirOC1tRFI2ZHNCRnM/view?resourcekey=0-1zoLWyzEedSrwoy9ROwfFQ"),
      official("選擇題解答", "https://drive.google.com/file/d/0B7jDeVmaMNirN1FrdVEyeEp1dDg/view?resourcekey=0-fYCx61M0ZIqt2XMSzftAaA")
    ],
    "98": [
      official("科學能力測驗 I", "https://drive.google.com/file/d/0B7jDeVmaMNirRFVtZ2NOcFI3VUU/view?resourcekey=0-suJLCvEsuPfe-ATODWGfUQ"),
      official("科學能力測驗 I 解答", "https://drive.google.com/file/d/0B7jDeVmaMNirMkMwOGFIYmdnWEk/view?resourcekey=0-LRoyQpyhxPQS7CdImTjWrA"),
      official("科學能力測驗 II", "https://drive.google.com/file/d/0B7jDeVmaMNirZi1PaEtkbUx3dlE/view?resourcekey=0-mTXiguWuuqW7grQXBBpyiA")
    ]
  };
  school.archiveYears = [115, ...Object.keys(school.files).map(Number).sort((a, b) => b - a)];
})();
