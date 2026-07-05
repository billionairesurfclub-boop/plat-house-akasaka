import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス浅草 | 浅草駅4分 民泊 カップル・2名様向け 28㎡",
  description:
    "浅草駅から徒歩4分。28㎡の快適な客室2室。Netflix・Nintendo Switch・ポケットWi-Fi・置き型Wi-Fi完備。浅草寺・仲見世すぐそば。カップル・2名様の東京旅行に最適。",
  keywords:
    "ぷらっとハウス浅草, 浅草 民泊, 浅草 宿泊, 浅草 カップル, 浅草 2名, 台東区 民泊, 浅草 観光 宿泊, Asakusa accommodation, Tokyo Asakusa stay, 浅草寺 近く 宿泊",
  openGraph: {
    title: "ぷらっとハウス浅草 | 浅草駅4分 民泊 カップル向け",
    description:
      "浅草駅4分。28㎡の客室2室。Netflix・Switch・Wi-Fi完備。浅草観光の拠点に最適。",
    url: "https://asakusa.plat-house.jp",
    siteName: "Plat House Asakusa",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://asakusa.plat-house.jp",
    languages: {
      "ja": "https://asakusa.plat-house.jp",
      "en": "https://asakusa.plat-house.jp/en",
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
          "name": "ぷらっとハウス浅草",
          "url": "https://asakusa.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "西浅草3-25-4",
            "addressLocality": "台東区",
            "addressRegion": "東京都",
            "postalCode": "111-0035",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥12,000〜¥25,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "置き型Wi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
