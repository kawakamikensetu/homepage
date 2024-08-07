export interface Region {
  name: string;
  areas: string[];
}

export const kansaiRegions: Region[] = [
  {
    name: "奈良県",
    areas: [
      "奈良市",
      "大和郡山市",
      "天理市",
      "橿原市",
      "桜井市",
      "生駒市",
      "香芝市",
      "葛城市",
      "平群町",
      "三郷町",
      "斑鳩町",
      "安堵町",
      "川西町",
      "三宅町",
      "田原本町",
    ],
  },
  {
    name: "大阪府",
    areas: [
      "大阪市（24区）",
      "堺市堺区",
      "堺市中区",
      "堺市東区",
      "堺市西区",
      "堺市南区",
      "堺市北区",
      "堺市美原区",
      "東大阪市",
      "枚方市",
      "豊中市",
      "吹田市",
      "茨木市",
      "高槻市",
      "八尾市",
      "寝屋川市",
      "守口市",
      "門真市",
      "摂津市",
      "四條畷市",
      "交野市",
      "大東市",
      "箕面市",
      "池田市",
      "羽曳野市",
      "藤井寺市",
      "松原市",
      "柏原市",
      "富田林市",
      "河内長野市",
      "大阪狭山市",
    ],
  },
  {
    name: "京都府",
    areas: [
      "京都市（11区）",
      "宇治市",
      "城陽市",
      "向日市",
      "長岡京市",
      "八幡市",
      "京田辺市",
      "木津川市",
      "久御山町",
      "精華町",
    ],
  },

  {
    name: "兵庫県",
    areas: ["尼崎市", "伊丹市", "川西市"],
  },
  {
    name: "滋賀県",
    areas: ["大津市", "草津市", "守山市", "栗東市"],
  },
];
