import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import LogoNav from "@/components/shared/LogoNav";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import Footer from "../components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EVOLV HYB",
  description: "Hybrid Problem-Solving & Innovation Agency. Strategy, Technology, and Execution under one system.",
  icons: {
    icon: "/Screenshot_20260210_173501.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground overflow-x-hidden`}>
        <SmoothScrollProvider>
          <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />
          <div className="fixed inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none" />

          <LogoNav />

          <main className="relative z-10">
            {children}
            <Footer />
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
