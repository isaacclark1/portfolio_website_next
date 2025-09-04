import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab();

export const metadata: Metadata = {
  title: "Isaac Clark - Software Engineer",
  description: "Isaac Clark Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          robotoSlab.className,
          "antialiased bg-black text-white absolute inset-0"
        )}
      >
        <div className="flex flex-col h-full">
          <Header />
          <main className="flex-1 overflow-visible z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
