import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import { Header, Footer } from "@/app/components/layout/header-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI product hunter",
  description: "A product hunter for AI products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
