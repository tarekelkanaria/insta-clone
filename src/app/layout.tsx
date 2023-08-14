import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram Clone",
  description:
    "Instagram clone app for sharing your best moments with your lovely people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Providers>
          <header className="shadow border-b bg-white sticky top-0 z-10 mb-8">
            <Header />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
