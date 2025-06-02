import type React from "react";
import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "Yayasan Peduli Ilmu",
  description:
    "Yayasan Peduli Ilmu Sulawesi Tengah - Membangun Generasi Qur'ani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
