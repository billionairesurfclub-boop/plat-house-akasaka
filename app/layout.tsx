import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス赤坂 | 赤坂駅徒歩4分 40㎡1DK 最大4名 民泊",
  description:
    "赤坂駅（東京メトロ千代田線）徒歩4分。40㎡の1DK戸建て一棟貸切・最大4名。Emma Premium 2キングベッド×2・Netflix・キッチン完備。赤坂・六本木エリアのグループ旅行に最適。",
  keywords:
    "ぷらっとハウス赤坂, 赤坂 民泊, 赤坂駅 宿泊, 港区 民泊, 赤坂見附 民泊, Akasaka accommodation, Tokyo group stay",
  openGraph: {
    title: "ぷらっとハウス赤坂 | 赤坂駅4分 40㎡1DK 最大4名",
    description:
      "赤坂駅4分。40㎡1DK戸建て一棟貸切・最大4名。Emma Premium 2キングベッド×2・Netflix・キッチン完備。",
    url: "https://akasaka.plat-house.jp",
    siteName: "Plat House Akasaka",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://akasaka.plat-house.jp",
    languages: {
      "ja": "https://akasaka.plat-house.jp",
      "en": "https://akasaka.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス赤坂",
          "url": "https://akasaka.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "赤坂５－１－３５",
            "addressLocality": "港区",
            "addressRegion": "東京都",
            "postalCode": "107-0052",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥22,000〜¥22,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Emma Premium 2キングベッド", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
