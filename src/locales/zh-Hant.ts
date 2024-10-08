// 繁體中文

export default {
  lang: {
    language: "zh-Hant",
    languageName: "繁體中文",
  },
  notify: {
    lang: {
      title: "語言已切換",
      content_first: "檢測到您位於 {region}，已自動將語言設置為 @:{'lang.languageName'}。如需更改，請在頁腳修改語言設定。",
      content: "已成功將語言切換為 @:{'lang.languageName'}。",
      countdown: "此提示將在 {countdown} 秒後自動關閉。"
    }
  },
  page: {
    // 首頁
    main: {
      menu: {
        options: {
          info: "資訊站",
          mail: "郵箱"
        },
        kanonbot: "Bot",
        device: "貓盤",
        discord: "Discord",
        support: "贊助",
        about: "關於",
      },
    },
    // QQ機器人
    kanonbot: {
      title: "KanonBot",
      subtitle: "支持多平台的 osu! 查分機器人",
      description: [
        "個人資料、遊玩成績、對比 pp+ 數據",
        "查詢賽事 cost 值、查詢今日新增 bp、推薦鋪面（std）",
        "Kanon 勳章系統、自定義 osu! infopanel 圖像"
      ],
      linkToDetail: "貓貓還可以做的更多！ >>",
      linkTooltip: "前往資訊站查看 KanonBot2022 使用文檔"
    },
    // 貓盤
    device: {
      // Meowpad v2
      defaultModal: [
        ["desu.life device 交流群：722122663 {'|'} 309702152"],
        "Meowpad V2：",
        ["meowpad_v2 配置器(1.0.1)： ", "Windows x64", "Linux x64 (deb)", "Linux x64(appimage)"],
        ["meowpad_v2 standard edition 固件 (1.0.1)： ", "本地下載"],
        "Meowpad V1：",
        ["產品說明及固件升級教程：", "前往資訊站查看"],
        ["meowpad_v1 配置器(0.3.1)： ", "Windows x64", "Linux x64 (deb)", "MacOS x64"],
        ["meowpad_v1.1_hs固件 (Hall Effect release 1.0.0 patch 23090101)： ", "本地下載"],
        ["meowpad_v1.0固件 (Mechanical beta 0.1.6)： ", "本地下載"],
        ["meowpad_v1固件升級套件 (dfu-util)： ", "本地下載"]
      ],
      v2: {
        title: "Meowpad v2",
        subtitle: "高性能磁軸小鍵盤",
        benefits: [
          "卓越的硬件性能",
          "0.125ms 極速響應",
          "多種燈效模式",
          "自定義觸發"
        ],
        linkToMarket: "這麼好？給我也整一個！ >>",
        linkToOldMarket: "點這裡購買配件 >>",
        linkTooltip: "打開貓盤淘寶店鋪頁",
        btnOpenDialog: "已經整了？下載驅動！ >>",
        btnTooltip: "下載驅動程序",
        modalTitle: "下載 Meowpad 驅動",
      },
      v2Se: {
        title: "Meowpad SE v2",
        subtitle: "多場景適用的磁軸小鍵盤",
        benefits: [
          "USB-C 接口",
          "1ms 高速響應",
          "可調背光",
          "自定義觸發"
        ],
        linkToMarket: "這麼好？給我也整一個！ >>",
        linkToOldMarket: "點這裡購買配件 >>",
        linkTooltip: "打開貓盤淘寶店鋪頁",
        btnOpenDialog: "已經整了？下載驅動！ >>",
        btnTooltip: "下載驅動程序",
        modalTitle: "下載 Meowpad 驅動",
      },
    },
    // Discord
    discord: {
      label: "DESU.Life 邀請您加入",
      name: "Discord 服務器",
      btn: "點擊加入"
    },
    // 贊助
    support: {
      title: "支持 DESU.Life",
      content: [
        "DESU.Life 的運營離不開大家的支持",
        "感謝屏幕上飄過的所有小夥伴對 DESU.Life 的支持",
        "此處記錄了截止2023年12月之前能記錄到的所有贊助。",
        "所有贊助金額將全部用於服務器、域名、各種雲服務的費用支出。",
        "但是由於各種原因，我們目前不再接受新的贊助。",
        "雖然如此，DESU.Life還是會和大家一同走向我們所期盼的未來。",
      ]
    },
    footer: {
      topimgCopyRight: "頭圖來自來自隨機圖庫，作品版權源於各作者"
    }
  },
};