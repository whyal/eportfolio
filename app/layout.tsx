import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yong Lun's eportfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_slab.className}>
        <header>
          <Navbar />
        </header>
        <main className="w-4/5 min-h-screen my-4 mx-auto sm:w-3/5 lg:w-1/2">
          {children}
        </main>
      </body>
    </html>
  );
}
