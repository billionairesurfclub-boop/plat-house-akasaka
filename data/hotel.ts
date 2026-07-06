export const hotel = {
  id: "plat-house-akasaka",
  name: {
    ja: "ぷらっとハウス赤坂",
    en: "Plat House Akasaka",
  },
  catchcopy: {
    ja: "赤坂駅徒歩4分。40㎡・最大4名。赤坂　赤坂見附エリアのプライベートステイ",
    en: "4 min from 赤坂駅. Plat House Akasaka — private stay in 赤坂　赤坂見附.",
  },
  address: {
    postalCode: "107-0052",
    ja: "東京都港区赤坂５－１－３５",
    en: "東京都港区赤坂５－１－３５",
  },
  area: "赤坂　赤坂見附",
  phone: "08070583086",
  category: "民泊",
  website: "https://akasaka.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 22000,
    max: 22000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=303536&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "赤坂駅", line: "", walk: 4 },
    { station: "赤坂駅", line: "", walk: 7 }
  ],
  floors: "",
  parking: 0,
  capacity: 4,
  size: "40㎡",
};

export const amenities = [
  { name: "Emma Premium 2キングベッド", nameEn: "Emma Premium 2 King Bed", icon: "🛏️", highlight: true },
  { name: "パソコン", nameEn: "パソコン", icon: "💻", highlight: false },
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "ポケットWi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "インターネット（Wi-Fi）", icon: "🌐", highlight: true },
  { name: "洗濯機", nameEn: "洗濯機", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "冷蔵庫", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "電子レンジ", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "電気ケトル", icon: "☕", highlight: false },
  { name: "シャワー", nameEn: "シャワー", icon: "🚿", highlight: false },
  { name: "独立トイレ", nameEn: "独立トイレ", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "ウォシュレット", icon: "✨", highlight: false },
  { name: "掃除機", nameEn: "掃除機", icon: "🧹", highlight: false },
  { name: "エアコン", nameEn: "エアコン", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "大型TV", icon: "📺", highlight: false },
  { name: "Emma Premiumベッド", nameEn: "Emma Premiumベッド", icon: "🛏️", highlight: true },
  { name: "ヘアドライヤー", nameEn: "ヘアドライヤー", icon: "💨", highlight: false },
  { name: "キッチン", nameEn: "キッチン", icon: "🍳", highlight: true },
  { name: "アメニティ一式", nameEn: "アメニティ一式", icon: "🧴", highlight: false },
  { name: "ボタニスト（アメニティ）", nameEn: "ボタニスト（アメニティ）", icon: "🌿", highlight: false },
  { name: "バスタオル・フェイスタオル", nameEn: "バスタオル・フェイスタオル", icon: "🏩", highlight: false },
  { name: "空気清浄機", nameEn: "空気清浄機", icon: "💨", highlight: false },
  { name: "ソファー", nameEn: "ソファー", icon: "✅", highlight: false },
  { name: "ローテブル", nameEn: "ローテブル", icon: "✅", highlight: false },
  { name: "クローゼット", nameEn: "クローゼット", icon: "✅", highlight: false },
  { name: "洋服掛け", nameEn: "洋服掛け", icon: "✅", highlight: false },
  { name: "ハンガー", nameEn: "ハンガー", icon: "✅", highlight: false },
  { name: "洗剤関係", nameEn: "洗剤関係", icon: "✅", highlight: false },
  { name: "調理器具", nameEn: "調理器具", icon: "✅", highlight: false },
  { name: "皿・グラス関係", nameEn: "皿・グラス関係", icon: "✅", highlight: false },
  { name: "リビングスペース", nameEn: "リビングスペース", icon: "✅", highlight: false }
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "ぷらっとハウス赤坂（40㎡・1DK）", en: "Plat House Akasaka (40㎡ 1DK)" },
    bedType: { ja: "Emma Premium 2キングベッド×2", en: "2 Emma Premium 2 King Beds" },
    maxGuests: 4,
    description: {
      ja: "40㎡の1DK戸建て一棟貸切。高品質なEmma Premium 2キングベッドを2台ご用意。最大4名様でご利用いただけます。赤坂駅から徒歩4分の好立地です。",
      en: "Entire 40㎡ 1DK house. Features 2 premium Emma Premium 2 king beds. Accommodates up to 4 guests. 4 min walk from Akasaka Station.",
    },
    images: [],
  }
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16:00、チェックアウトは11:00です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大4名様までご宿泊いただけます。", en: "Up to 4 guests." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "赤坂駅（）徒歩4分です。", en: "赤坂駅 () is a 4 min walk." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
