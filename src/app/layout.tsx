"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServerBar from "./components/ServerBar";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="app-layout">
          <ServerBar />
          <Navigation />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
