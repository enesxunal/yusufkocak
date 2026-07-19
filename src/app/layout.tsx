import type { Metadata } from "next";
import { DM_Sans, Roboto } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import { getSiteMetadata } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
});

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = getSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${dmSans.variable} ${roboto.variable} antialiased`}>
        <StructuredData />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
