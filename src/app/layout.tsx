import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Providers from "@/providers";
import Header from "@/components/Header";
import MainContainer from "@/components/UI/MainContainer";
import Modals from "@/components/Modals";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram Clone",
  description:
    "Instagram clone app for sharing your best moments with your lovely people",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Providers session={session}>
          <header className="shadow border-b bg-white sticky top-0 z-10 mb-8">
            <Header />
          </header>
          <MainContainer>{children}</MainContainer>
          <Modals />
        </Providers>
      </body>
    </html>
  );
}
