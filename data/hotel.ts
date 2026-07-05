export const hotel = {
  id: "plat-house-asakusa",
  name: {
    ja: "ぷらっとハウス浅草",
    en: "Plat House Asakusa",
  },
  catchcopy: {
    ja: "浅草駅4分。下町情緒あふれる浅草で、2名様だけの特別な時間を",
    en: "4 min from Asakusa Station. Your cozy private room in the heart of historic Asakusa.",
  },
  address: {
    postalCode: "111-0035",
    ja: "東京都台東区西浅草３－２５－４",
    en: "3-25-4 Nishi-Asakusa, Taito-ku, Tokyo 111-0035",
  },
  area: "浅草",
  phone: "08070583086",
  category: "民泊",
  website: "https://asakusa.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 12000,
    max: 25000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=248689&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "浅草駅", line: "東京メトロ銀座線・都営浅草線・東武スカイツリーライン", walk: 4 },
    { station: "入谷駅", line: "東京メトロ日比谷線", walk: 10 },
  ],
  floors: "戸建て",
  parking: 0,
  capacity: 4,
  size: "28㎡ × 2客室",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "置き型Wi-Fi", nameEn: "Home Wi-Fi Router", icon: "🌐", highlight: true },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "シャワー", nameEn: "Shower", icon: "🚿", highlight: false },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "客室A（28㎡）", en: "Room A (28㎡)" },
    bedType: { ja: "ダブルベッド", en: "Double Bed" },
    maxGuests: 2,
    description: {
      ja: "28㎡のコンパクトで居心地の良い客室。ダブルベッドでカップルや2名様のご利用に最適です。Netflix・Nintendo Switch完備。",
      en: "A cozy 28㎡ room with a double bed. Perfect for couples. Netflix and Nintendo Switch included.",
    },
    images: [],
  },
  {
    id: "room-b",
    floor: "",
    name: { ja: "客室B（28㎡）", en: "Room B (28㎡)" },
    bedType: { ja: "ダブルベッド", en: "Double Bed" },
    maxGuests: 2,
    description: {
      ja: "28㎡のコンパクトで居心地の良い客室。ダブルベッドでカップルや2名様のご利用に最適です。Netflix・Nintendo Switch完備。",
      en: "A cozy 28㎡ room with a double bed. Perfect for couples. Netflix and Nintendo Switch included.",
    },
    images: [],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "各客室2名様までご宿泊いただけます。2室ご予約いただければ最大4名様でご利用いただけます。", en: "Up to 2 guests per room. Book both rooms for up to 4 guests total." },
  },
  {
    q: { ja: "浅草観光に便利ですか？", en: "Is it convenient for sightseeing in Asakusa?" },
    a: { ja: "浅草駅から徒歩4分と非常に便利な立地です。浅草寺・仲見世・隅田川花火など浅草の名所へすぐアクセスできます。", en: "Just 4 minutes walk from Asakusa Station. Easy access to Senso-ji Temple, Nakamise, and all Asakusa attractions." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "Wi-Fiは使えますか？", en: "Is Wi-Fi available?" },
    a: { ja: "ポケットWi-Fiと置き型Wi-Fiの両方をご用意しています。外出先でもポケットWi-Fiをご利用いただけます。", en: "Both a pocket Wi-Fi (for use outside) and a home router are available in each room." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
