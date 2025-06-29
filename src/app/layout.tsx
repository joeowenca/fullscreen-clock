import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sixtyfour } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sixtyfour = Sixtyfour({
  weight: "400",
  style: "normal",
  variable: "--font-bytesized",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fullscreen Clock",
  description: "A Fullscreen Clock",
  viewport:
    "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sixtyfour.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
