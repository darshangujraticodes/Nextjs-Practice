import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Script from "next/script";

// import FeatureScript from "@/public/FeatureScript";

// import FeatureScript from "@/app/Components/FeatureScript";

import { log } from "console";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Login Page | Next JS Static Metadata Export ",
  description:
    "  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi voluptatibus quaerat culpa ab quasi. ",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
