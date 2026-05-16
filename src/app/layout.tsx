import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Three Furlongs - Kaiwaka Bar, Grill & Hotel',
  description: 'The perfect stopover on SH1 in Kaiwaka. Enjoy quality dining, comfortable accommodation, and genuine Northland hospitality at Three Furlongs.',
  keywords: ["Kaiwaka hotel, Kaiwaka restaurant, Northland accommodation, SH1 stopover, family restaurant Kaiwaka"],
  openGraph: {
    "title": "Three Furlongs Kaiwaka",
    "description": "Food, Drink, Stay at Three Furlongs, Kaiwaka.",
    "siteName": "Three Furlongs",
    "type": "website"
  },
};

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
