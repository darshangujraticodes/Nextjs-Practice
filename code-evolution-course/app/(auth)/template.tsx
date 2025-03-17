"use client";

import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [inputData, setInputData] = useState("");

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}

      <div className="container">
        <div>
          <form action="">
            <input
              type="text"
              onChange={(e) => setInputData(e.target.value)}
              value={inputData}
              className="border rounded-md mt-5 px-3 py-2"
              placeholder="Enter Any Value"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default layout;
