import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footerinfo from "@/components/FooterInfo";

export const metadata: Metadata = {
  title: "Ordo Realitas"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        <Navigation />
        {children}
        <Footerinfo />
      </body>
    </html>
  );
}