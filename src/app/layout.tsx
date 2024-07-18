import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/header/navbar";
import localFont from "next/font/local";
import Footer from "@/components/footer/footer";
import Footer_Menu from "@/components/footer/footer_menu";
import { Wrapper } from "@/context/ContextAPI";

export const metadata: Metadata = {
  title: "DealGuru",
  description: "By DealGuru Organization",
};
import { Open_Sans } from "next/font/google";
import { Suspense } from "react";
import Loading from "./(Home_page)/components/layout/Loading";

const open_sans = Open_Sans({ subsets: ["latin"], variable: "--open_sans" });

const myFont = localFont({ src: "../../public/assets/font/nunito.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${myFont.className} ${open_sans.variable}`}>
        <Navbar />
        <Wrapper>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Wrapper>
        <Footer />
        <Footer_Menu />
      </body>
    </html>
  );
}
