import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crystal Ball | Workforce Planning",
  description:
    "See your workforce future clearly. Plan headcount, talent, and performance with Crystal Ball.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070512] text-[#e8e4f5]">
        {children}
      </body>
    </html>
  );
}
