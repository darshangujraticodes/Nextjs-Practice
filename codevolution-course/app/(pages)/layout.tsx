// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarSection from "../components/NavbarSection";
import FooterSection from "../components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NavbarSection />
      {children}
      <FooterSection />
    </div>
  );
}
