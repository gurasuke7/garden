// ============================================
// 西向きベランダ菜園記録 データファイル
// 記録の追加・修正はこのファイルだけ編集すればOK
// 写真は images/ フォルダに入れてファイル名を指定
// ============================================

const SITE = {
  title: "西向きベランダで野菜を育てる記録",
  subtitle: "完全西向き、高さ140cmの壁に囲まれた東京のベランダ。\n日照制限という条件の中で、何が育ち、何が難しいのか。\n試行錯誤のリアルな栽培ログです。",
  badges: ["🧭 完全西向き", "🧱 壁高140cm", "東京都内", "プランター栽培", "2025年〜"],
  // ヒーロー写真（3枚推奨：1枚目が大きく表示される）
  heroPhotos: [
    // "hero1.jpg",
    // "hero2.jpg",
    // "hero3.jpg",
  ],
};

// 環境データ
const ENV = [
  { icon: "🧭", label: "方角", value: "完全西向き" },
  { icon: "🧱", label: "壁の高さ", value: "約140cm" },
  { icon: "☀️", label: "日照時間", value: "午後のみ" },
  { icon: "🪣", label: "栽培方法", value: "プランター" },
];

// 設備・資材
const SETUP = {
  photos: [
    // { src: "setup1.jpg", caption: "プランター配置全体" },
    // { src: "setup2.jpg", caption: "スタンドで高さを確保" },
  ],
  cards: [
    {
      title: "🌿 プランタースタンド",
      items: ["サイズ：45.2 × 51.4 × 60cm", "段々式で高さを確保", "壁の影を避けるため最上段活用"],
    },
    {
      title: "🏠 虫よけビニールハウス",
      items: ["シート：1m × 1.5m × 2枚", "虫よけネット（ダイソー）1m × 1.4m", "フレーム網：52×40cm×3・52×20cm×1"],
    },
    // カードはいくつでも追加OK
  ],
};

// ============================================
// 野菜データ
// id：英数字（ページ内リンクに使われる）
// color：moss / bark / teal / olive / amber / plum から選択
// westRating：西向き適性 1〜5
// ============================================
const VEGGIES = [
  {
    id: "parsley",
    emoji: "🌿",
    name: "パセリ",
    sub: "イタリアンパセリ",
    color: "olive",
    status: "🌱 栽培中",
    westRating: 5,
    basicData: [
      { key: "収穫開始の目安", val: "草丈20cm・本葉15枚以上" },
      { key: "収穫方法", val: "外側から根元でカット・10本以上の葉を残す" },
      { key: "追肥タイミング", val: "葉が黄色くなり始めたら" },
      { key: "収穫後の液肥", val: "1000倍液肥を週1回" },
    ],
    points: [
      "草丈20cm・本葉15枚以上になってから収穫開始",
      "外側の葉から根元でカット",
      "収穫後は株に10本以上の葉を残す",
      "収穫後は1000倍液肥を週1回ペースで",
    ],
    warnings: [
      "葉が黄色くなり始めたら追肥のサイン",
    ],
    westNote: "西向きでも半日陰に強いパセリは旺盛に生育。種まきから越冬して2年目に入り安定した収穫が続いている。",
    photos: [
      "parsley_240616_3.jpg",
      "parsley_240616_1.jpg",
    ],
    timeline: [
      { date: "10/3夜", tags: ["seed"], title: "種を水に浸す", text: "一晩水に浸して発芽を促す。好光性種子のため翌日の種まき後は遮光しない。", photos: [] },
      { date: "10/4", tags: ["seed"], title: "小鉢×2に種まき", text: "2つの小鉢に種をまく。", photos: [] },
      { date: "10/15〜16", tags: ["grow"], title: "発芽確認", text: "種まきから約11日で発芽が始まった。", photos: [] },
      { date: "11/23", tags: ["grow"], title: "定植（4株）", text: "本葉が展開した苗4株を定植。", photos: [] },
      { date: "12/9", tags: ["grow"], title: "間引いて2株に", text: "生育の良い2株を残して間引き。株間を確保し風通しを改善。", photos: [] },
      { date: "4/10", tags: ["harvest"], title: "収穫（2本）・苦味あり", text: "2本収穫。この時点でこれまでに計4本ほど収穫済み。苦味が感じられた（冬越し後の特徴）。", photos: [] },
      { date: "4/12", tags: ["grow"], title: "液肥実施", text: "", photos: [] },
      { date: "4/20", tags: ["grow"], title: "液肥実施", text: "", photos: [] },
      { date: "4/28", tags: ["harvest"], title: "収穫（3本）", text: "3本収穫。", photos: [] },
      { date: "4/29", tags: ["grow"], title: "液肥・葉面散布", text: "液肥の通常施用に加え、葉面散布も実施。", photos: [] },
      { date: "5/12", tags: ["grow"], title: "液肥実施", text: "", photos: [] },
      { date: "5/19", tags: ["grow"], title: "液肥実施", text: "", photos: [] },
      { date: "5/28", tags: ["grow"], title: "液肥実施", text: "", photos: [] },
      { date: "6/5", tags: ["grow"], title: "液肥実施", text: "", photos: [] },
      { date: "6/12", tags: ["grow", "harvest"], title: "液肥実施・収穫", text: "液肥を実施するとともに収穫も行った。", photos: [] },
      {
        date: "6/16",
        tags: ["grow"],
        title: "収穫前・旺盛に生育中",
        text: "青々とした葉が鉢いっぱいに広がっている状態。",
        photos: [
          "parsley_240616_3.jpg",
          "parsley_240616_1.jpg",
          "parsley_240616_2.jpg",
        ],
      },
      {
        date: "6/16",
        tags: ["harvest"],
        title: "収穫 茎10本ほど",
        text: "外葉から茎ごと約10本収穫。収穫後も株元から新芽がしっかり残っており、次の収穫も期待できる状態。",
        photos: [
          "parsley_240616_harvest.jpg",
          "parsley_240616_after1.jpg",
          "parsley_240616_after2.jpg",
          "parsley_240616_after3.jpg",
        ],
      },
      {
        date: "6/19",
        tags: ["grow"],
        title: "液肥実施・週1ペースで管理",
        text: "6/16の収穫後から3日。新芽が再び展開してきた。液肥を実施。週1回ペースで継続予定。",
        photos: [
          "parsley_250619_1.jpg",
        ],
      },
    ],
  },

  {
    id: "melon",
    emoji: "🍈",
    name: "メロン",
    sub: "種まきから育苗中",
    color: "amber",
    status: "🌱 栽培中",
    westRating: 2,
    basicData: [
      { key: "種まき深さ", val: "1cm" },
      { key: "定植タイミング", val: "本葉3〜4枚" },
      { key: "親づる摘芯", val: "本葉5〜6枚" },
      { key: "子づる", val: "2本伸ばす・8節目まで脇芽除去・15〜20節で摘芯" },
      { key: "追肥", val: "着果・ピンポン玉大から化成肥料10g・2週おきに10g" },
      { key: "収穫予想", val: "着果から45〜50日（9/12頃？）" },
    ],
    points: [
      "本葉2〜3枚で間引き（根が繊細なのでハサミを使う）",
      "本葉3〜4枚で定植、本葉5〜6枚で親づる摘芯",
      "子ヅル2本を伸ばし、他の脇芽はすべて除去",
      "子づるの8節目までの脇芽は摘む",
      "子づるは15〜20節位で摘芯",
      "着果節以外の孫づるは葉1〜2枚残して切る",
      "1ヅル1果が理想・1株最大3果まで",
      "収穫2週間前から水を絞ると甘くなる",
      "受粉は午前8時までに実施",
    ],
    warnings: [
      "下の方の黄変した葉はこまめに除去",
      "2025年は受粉させなくても大きくなった（要記録）",
    ],
    westNote: "西向きでは日照不足が心配だが、チャレンジ中。着果・肥大のデータを記録して来年に活かす。",
    photos: [
      "melon_250619_1.jpg",
      "melon_250615_1.jpg",
    ],
    timeline: [
      { date: "5/21", tags: ["seed"], title: "小ポット×3に種まき（深さ1cm）", text: "3つの小ポットに種をまく。深さ1cm。", photos: [] },
      { date: "5/31", tags: ["grow"], title: "発芽確認・複数の芽", text: "複数の芽が出始めた。", photos: [] },
      { date: "6/2", tags: ["grow"], title: "間引き・2株以下/ポットに", text: "根が繊細なためハサミで間引き。各ポット2株以下に。", photos: [] },
      {
        date: "6/15",
        tags: ["grow"],
        title: "本葉1枚しっかり展開",
        text: "本葉が1枚しっかり展開。白ポット1株・黒ポット2株の計3株が順調に育苗中。",
        photos: ["melon_250615_1.jpg"],
      },
      {
        date: "6/19",
        tags: ["grow"],
        title: "本葉2枚しっかり展開・定植間近",
        text: "本葉2枚がしっかり展開。定植の目安（本葉3〜4枚）まであと少し。",
        photos: ["melon_250619_1.jpg"],
      },
    ],
  },

  {
    id: "moroheiya",
    emoji: "🌿",
    name: "モロヘイヤ",
    sub: "そら豆の後作",
    color: "moss",
    status: "🌱 栽培中",
    westRating: 3,
    basicData: [
      { key: "発芽適温", val: "25〜30℃" },
      { key: "種まき", val: "5月下旬から・ポットに2〜3粒・深さ0.5〜1cm" },
      { key: "定植", val: "本葉4〜5枚" },
      { key: "摘芯", val: "高さ40cmで実施" },
      { key: "収穫開始", val: "高さ50cmで先端の柔らかい茎葉から" },
    ],
    points: [
      "気温がしっかり上がった5月下旬の種まきが良い",
      "定植後3日間は少し日が当たる程度の場所に置く",
      "定植3日後から日当たりの良い場所へ移動",
      "植え付けから1ヶ月ごとに追肥",
      "高さ40cmで摘芯",
      "花は見つけ次第摘み取る",
      "高さ50cmになったら先端の柔らかい茎葉を収穫",
    ],
    warnings: [],
    westNote: "そら豆の後作として同じプランターを使用。石灰水で土壌調整してからスタート。",
    photos: [
      "moroheiya_250615_1.jpg",
    ],
    timeline: [
      { date: "5/11", tags: ["grow"], title: "スナップエンドウ終了・根取り＆石灰水", text: "前作のスナップエンドウを終了し根を取り除き、石灰水で土壌調整。", photos: [] },
      { date: "5/17", tags: ["grow"], title: "元肥追加", text: "次作に向けて元肥を追加。", photos: [] },
      { date: "5/29", tags: ["seed"], title: "種まき", text: "ポットに種まき（やや適当に播種）。", photos: [] },
      { date: "6/2", tags: ["grow"], title: "双葉複数発芽・間引き", text: "双葉がいくつも発芽。3株程度に間引き。", photos: [] },
      {
        date: "6/15",
        tags: ["grow"],
        title: "本葉3枚目が出始め",
        text: "赤ポット・黒ポットそれぞれに1株ずつ育苗中。本葉3枚目が展開し始めた段階。",
        photos: ["moroheiya_250615_1.jpg"],
      },
      {
        date: "6/19",
        tags: ["grow"],
        title: "本葉4枚目展開・定植実施",
        text: "本葉4枚目が出てきたタイミングで定植を実施。赤ポット・黒ポットの株をそれぞれ大きめのプランターへ植え替え。",
        photos: ["moroheiya_250619_1.jpg", "moroheiya_250619_2.jpg", "moroheiya_250619_3.jpg"],
      },
    ],
  },

  {
    id: "rucola",
    emoji: "🥗",
    name: "ルッコラ",
    sub: "種まきから育苗",
    color: "teal",
    status: "🌱 栽培中",
    westRating: 5,
    basicData: [
      { key: "追肥開始", val: "背丈10cm頃から液肥" },
      { key: "液肥", val: "週1回" },
    ],
    points: [
      "背丈10cm頃から液肥を開始",
      "液肥は週1回ペースで継続",
    ],
    warnings: [],
    westNote: "西向きでも葉物は問題なく育つ。ルッコラは特に相性が良く、種まきから旺盛に生育している。",
    photos: [
      "rucola_250619_1.jpg",
      "rucola_250615_1.jpg",
    ],
    timeline: [
      { date: "4/29", tags: ["seed"], title: "種まき", text: "長鉢に種まき。", photos: [] },
      { date: "6/7", tags: ["grow"], title: "液肥実施", text: "背丈が10cmほどになったため液肥を開始。", photos: [] },
      {
        date: "6/15",
        tags: ["grow"],
        title: "旺盛に生育中・収穫間近",
        text: "長鉢いっぱいに葉が茂り、収穫間近の状態。",
        photos: ["rucola_250615_1.jpg"],
      },
      {
        date: "6/19",
        tags: ["grow"],
        title: "さらに生育・葉が密に",
        text: "6/15からさらに葉が密になり、いよいよ収穫適期。",
        photos: ["rucola_250619_1.jpg"],
      },
    ],
  },

  {
    id: "shungiku",
    emoji: "🌼",
    name: "春菊",
    sub: "",
    color: "moss",
    status: "📋 記録追加予定",
    westRating: 0,
    basicData: [],
    points: [],
    warnings: [],
    westNote: "",
    photos: [],
    timeline: [],
  },

  {
    id: "chili",
    emoji: "🌶️",
    name: "唐辛子",
    sub: "",
    color: "amber",
    status: "🌱 栽培中",
    westRating: 3,
    basicData: [],
    points: [],
    warnings: [],
    westNote: "",
    photos: [
      "chili_250615_1.jpg",
      "chili_250615_2.jpg",
    ],
    timeline: [
      {
        date: "6/15",
        tags: ["flower"],
        title: "開花・小さな実が確認できる",
        text: "白い花が複数咲いており、小さな緑の実も確認できる。青い支柱ケージで茎をしっかり支えている。",
        photos: [
          "chili_250615_1.jpg",
          "chili_250615_2.jpg",
        ],
      },
      {
        date: "6/19",
        tags: ["grow"],
        title: "頂部内側の枝を剪定・化成肥料追肥",
        text: "頂部の内側に込み入って伸びた枝を剪定して風通しと光を改善。化成肥料を追肥。剪定した枝には白い花と小さな実がついていた。",
        photos: [
          "chili_250619_3.jpg",
          "chili_250619_1.jpg",
          "chili_250619_2.jpg",
        ],
      },
    ],
  },

  {
    id: "nira",
    emoji: "🌿",
    name: "ニラ",
    sub: "種まきから育苗中",
    color: "olive",
    status: "🌱 栽培中",
    westRating: 4,
    basicData: [
      { key: "発芽適温", val: "18〜22℃" },
      { key: "植え付け適期", val: "6月下旬・草丈20cm" },
      { key: "植え付け前", val: "半分に切り揃える" },
      { key: "株間", val: "8cm（5束前後にまとめて）" },
    ],
    points: [
      "5cmで1回目の間引き（株間1cmずつ）",
      "10cmで2回目の間引き（3〜5束ずつ・株間8cm）",
      "15cmまでは薄い液肥を月1回程度",
      "草丈15cmで5束前後にまとめて株間8cmに間引く",
      "間引き後3〜4週経ったら月1回化成肥料",
      "植え付け前に草丈の半分に切り揃える",
    ],
    warnings: [
      "5cmや10cmでの間引きタイミングを忘れずに",
    ],
    westNote: "種まきから育苗中。西向きでも育てやすい野菜のひとつ。6月下旬の植え付けを目標に管理中。",
    photos: [
      "nira_250615_1.jpg",
    ],
    timeline: [
      { date: "4/29", tags: ["seed"], title: "種まき", text: "発芽適温18〜22℃を目安に種まき。", photos: [] },
      {
        date: "5/17",
        tags: ["grow"],
        title: "草丈6〜7cm・間引き実施",
        text: "草丈6〜7cmに成長。本来は15cmまで待つところ忘れてしまい、株間1cmと4〜5株の8cmに間引き。次回は手順通りに。",
        photos: [],
      },
      { date: "6/11", tags: ["grow"], title: "化成肥料", text: "化成肥料を施用。", photos: [] },
      {
        date: "6/15",
        tags: ["grow"],
        title: "生育中・白長鉢でビニールハウス内管理",
        text: "白い長鉢いっぱいに細い葉が密生している。ビニールハウス内で管理中。黄色粘着トラップで害虫対策も実施。",
        photos: ["nira_250615_1.jpg"],
      },
    ],
  },

  {
    id: "basil",
    emoji: "🌱",
    name: "バジル",
    sub: "種まきから育苗",
    color: "moss",
    status: "🌱 栽培中",
    westRating: 3,
    basicData: [
      { key: "摘芯タイミング", val: "草丈20〜25cmで先端2〜3節分を摘む" },
      { key: "摘芯後の繰り返し", val: "脇芽が15〜20cmになったら再度摘芯" },
      { key: "追肥", val: "定植後3週〜・液肥（窒素多め）週1・化成肥料3週毎" },
      { key: "最終間引き", val: "本葉4〜6枚で株間20〜30cm" },
    ],
    points: [
      "本葉2枚で株間5cmに間引き",
      "本葉4〜6枚で株間20〜30cmに最終間引き",
      "できるだけ明るい場所に置く（徒長防止）",
      "草丈20〜25cmで先端2〜3節分を摘芯",
      "摘芯後に脇芽が15〜20cmになったら再摘芯を繰り返す",
      "摘芯後に側枝が出てきたタイミングで追肥が効果的",
      "秋まで収穫可能",
    ],
    warnings: [
      "花が咲くと葉の風味が落ちて株全体が老化→花芽は早めに摘み取る",
    ],
    westNote: "西向きでも育つが徒長しやすいため、できるだけ高い位置に置いて西日を確保する。",
    photos: [
      "basil_250615_1.jpg",
    ],
    timeline: [
      { date: "4/23", tags: ["seed"], title: "プリンカップに遮光して種まき", text: "小さなプリンカップに種をまき、遮光して発芽を促す。", photos: [] },
      { date: "4/29", tags: ["grow"], title: "発芽確認", text: "種まきから約6日で芽が出始めた。", photos: [] },
      { date: "5/3頃", tags: ["grow"], title: "鉢まきの芽も発生・プリンカップ分を廃止", text: "別に鉢へ直まきした分も発芽。プリンカップより生育が良かったため、鉢まきの苗に絞ることに。", photos: [] },
      { date: "5/11", tags: ["grow"], title: "間引き", text: "生育の悪い苗を間引き。", photos: [] },
      { date: "5/31", tags: ["grow"], title: "本葉4枚・2株に最終間引き", text: "本葉4枚に成長したタイミングで2株に最終間引き。株間を広げて生育スペースを確保。", photos: [] },
      {
        date: "6/15",
        tags: ["grow"],
        title: "生育中・テラコッタ鉢＋長鉢に複数株",
        text: "テラコッタ鉢に1株、長鉢に2株を栽培中。いずれも本葉が展開し順調に生育している。",
        photos: ["basil_250615_1.jpg"],
      },
    ],
  },

  {
    id: "shiso",
    emoji: "🌿",
    name: "紫蘇",
    sub: "零れ種でスタート",
    color: "teal",
    status: "🌱 栽培中",
    westRating: 4,
    basicData: [
      { key: "スタート", val: "零れ種" },
      { key: "摘芯タイミング", val: "草丈30cm前後" },
      { key: "収穫開始", val: "葉10枚から・下葉から順に" },
      { key: "追肥", val: "月1〜2回（液肥または固形10g）" },
    ],
    points: [
      "本葉8枚で追肥開始（以降月1〜2回）",
      "草丈30cm前後で摘芯するとわき芽が増える",
      "収穫は葉10枚以上から・下葉から順に",
      "収穫開始後は月1〜2回・固形肥料10g",
    ],
    warnings: [
      "夏の強い直射日光には寒冷紗で遮光",
    ],
    westNote: "零れ種から自然発芽した株。西向きでも旺盛に生育中。摘芯を繰り返してわき芽を増やす管理を継続。",
    photos: [
      "shiso_250619_2.jpg",
      "shiso_250619_1.jpg",
    ],
    timeline: [
      {
        date: "零れ種",
        tags: ["seed"],
        title: "零れ種から自然発芽",
        text: "昨年の株からこぼれた種が自然に発芽。植え替えて栽培開始。",
        photos: [],
      },
      {
        date: "5/29",
        tags: ["grow"],
        title: "液肥実施",
        text: "初回の液肥を実施。",
        photos: [],
      },
      {
        date: "6/1",
        tags: ["grow"],
        title: "摘芯（1株）・ボカシ肥料投入",
        text: "1株を摘芯。コーヒーかすのボカシ肥料を1株に大さじ1杯ほど投入。",
        photos: [],
      },
      {
        date: "6/3",
        tags: ["harvest"],
        title: "初収穫 5枚",
        text: "下葉から5枚収穫。",
        photos: [],
      },
      {
        date: "6/5",
        tags: ["grow"],
        title: "液肥実施",
        text: "液肥を実施。",
        photos: [],
      },
      {
        date: "6/12",
        tags: ["grow"],
        title: "液肥実施",
        text: "液肥を実施。",
        photos: [],
      },
      {
        date: "6/15",
        tags: ["grow"],
        title: "摘芯実施・草丈30cm（左株）",
        text: "四角い鉢の左株が草丈約30cmになったため摘芯。右株は先に摘芯済み。",
        photos: [
          "shiso_250615_2.jpg",
          "shiso_250615_1.jpg",
        ],
      },
      {
        date: "6/19",
        tags: ["grow"],
        title: "液肥実施・丸鉢株も摘芯",
        text: "液肥を実施（週1回ペースで継続予定）。丸い鉢の株も草丈30cmほどになったため摘芯。",
        photos: [
          "shiso_250619_2.jpg",
          "shiso_250619_1.jpg",
        ],
      },
    ],
  },

  {
    id: "cucumber",
    emoji: "🥒",
    name: "きゅうり",
    sub: "",
    color: "moss",
    status: "🌱 栽培中",
    westRating: 3,
    basicData: [
      { key: "追肥開始", val: "本葉3枚から1〜2週に1回" },
      { key: "液肥", val: "定植2週後から" },
      { key: "化成肥料", val: "定植2〜3週後から（2〜3週/回）" },
      { key: "主枝摘芯", val: "25〜30節（高さ約2m）" },
    ],
    points: [
      "6節目までのわき芽はすべて除去",
      "7〜10節の子ヅル：葉1枚残して先端を切る（孫ツルも葉1枚残して切る）",
      "11節目〜の子ヅル：葉2枚残して先端を切る（孫ツルは放置・混み合ったら先端のみ切る）",
      "主枝は25〜30節（約2m）で摘芯",
      "葉かき：収穫後の下葉・黄化葉・ハダニ被害葉を除去",
      "葉かきは1日2枚まで（多いとストレスになる）",
      "風通しの悪い大きな葉を切り新芽・新葉に光を当てる",
    ],
    warnings: [
      "水切れ注意！特に夏は朝・夕の1日2回水やり",
      "定植後2〜3日は強い日差しに注意（日陰で様子見）",
      "実が次々なる時期は追肥をこまめに",
    ],
    westNote: "西向きのため午後からの日照のみ。ネットに誘引して上方向へ伸ばし西日を最大限確保。",
    photos: [
      "cucumber_250615_1.jpg",
    ],
    timeline: [
      { date: "5/24", tags: ["grow"], title: "苗を購入", text: "ホームセンターで苗を購入。", photos: [] },
      { date: "5/25", tags: ["grow"], title: "植付", text: "プランターに定植。定植後2〜3日は強い日差しを避けて様子見。", photos: [] },
      { date: "5/29", tags: ["grow"], title: "日当たりの良い場所へ移動", text: "根が落ち着いたためより日の当たる場所へ移動。", photos: [] },
      {
        date: "6/15",
        tags: ["grow"],
        title: "化成肥料・生育中・開花確認",
        text: "化成肥料を施用。ネットに誘引しながら上方向へ生育中。黄色い花も確認できる。",
        photos: ["cucumber_250615_1.jpg"],
      },
    ],
  },

  {
    id: "tomato",
    emoji: "🍅",
    name: "ミニトマト",
    sub: "",
    color: "bark",
    status: "🌱 栽培中",
    westRating: 3,
    basicData: [
      { key: "追肥", val: "定植後2〜3週・化成肥料2週に1回 or 液肥週1" },
      { key: "わき芽かき", val: "5mm以下のうちに除去" },
      { key: "摘芯", val: "6段目花房の上に葉2枚残して摘芯（高さ1.5m目安）" },
      { key: "収穫タイミング", val: "果実全体が色づき、軽く押して弾力があるくらい" },
    ],
    points: [
      "わき芽は5mm以下のうちに除去",
      "6段目花房の上に葉2枚残して摘芯（高さ1.5m目安）",
      "収穫済みの段より下の葉は順次摘葉（風通し改善）",
      "均一な水やりが裂果防止に大切",
      "夏は朝たっぷり・夕方は土の状態を見て判断",
      "東京の8月は連続収穫ラッシュ・毎日チェック",
    ],
    warnings: [
      "葉が内巻きは肥料過多のサイン",
      "採り遅れると裂果（実割れ）の原因に",
      "7〜8月の35℃超が続くと高温障害で花が落ちることがある",
      "高温対策：遮光率20〜30%のネットで午後2〜4時の直射を遮る",
    ],
    westNote: "西向きのため午後からの日照のみ。支柱で高い位置へ誘引し西日を最大限確保して管理中。",
    photos: [
      "tomato_250615_1.jpg",
    ],
    timeline: [
      { date: "5/29", tags: ["grow"], title: "購入・定植", text: "苗を購入し、プランター1つに定植。", photos: [] },
      { date: "6/1", tags: ["grow"], title: "日当たりの良い場所へ移動・わき芽かき", text: "より日の当たる場所へプランターを移動。初回のわき芽かきを実施。", photos: [] },
      {
        date: "6/15",
        tags: ["grow"],
        title: "生育中・スパイラル支柱で誘引・開花確認",
        text: "スパイラル支柱で上方向へ誘引しながら生育中。黄色い花も確認できる。",
        photos: ["tomato_250615_1.jpg"],
      },
      {
        date: "6/19",
        tags: ["grow"],
        title: "わき芽かき・液肥実施・高さ約60cm・4段目花房確認",
        text: "高さ約60cmに成長。花節が4つ目まで出てきた。わき芽かきと液肥を実施。",
        photos: ["tomato_250619_1.jpg"],
      },
    ],
  },
];

// タグの表示名と色（基本このままでOK）
const TAGS = {
  seed:    { label: "種まき",  cls: "seed" },
  grow:    { label: "生育",    cls: "grow" },
  harvest: { label: "収穫",    cls: "harvest" },
  trouble: { label: "トラブル", cls: "trouble" },
  flower:  { label: "開花",    cls: "flower" },
  fail:    { label: "失敗",    cls: "fail" },
};

// 全体ログ（時系列のできごと）
const LOG = [
  // {
  //   date: "9/29",
  //   tags: ["seed"],
  //   title: "秋作スタート",
  //   text: "しゅんぎく・そら豆・スナップを播種。",
  //   photo: "log_0929.jpg",
  // },
];
