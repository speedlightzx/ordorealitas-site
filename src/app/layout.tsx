import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footerinfo from "@/components/FooterInfo";

export const metadata: Metadata = {
  title: "Ordo Realitas",
  description: "Ordo Realitas é um bot de rpg dentro do discord que tem como base o sistema de Ordem Paranormal.",
  keywords: ['bot discord', 'bot discord rpg', 'discord rpg', 'ordem paranormal discord', 'ordem paranormal bot discord', 'ordem paranormal bot', 'ordo realitas discord', 'ordo realitas discord bot', 'ordo realitas bot'],
  authors: [{ name: 'Allan Herbert', url: 'https://github.com/speedlightzx'}],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Ordo Realitas Bot',
    description: "Ordo Realitas é um bot de rpg dentro do discord que tem como base o sistema de Ordem Paranormal.",
    url: 'https://ordorealitas-site.vercel.app',
    siteName: 'Ordo Realitas'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="maior.png" type="image/png" />
      <body>
        <Navigation/>
        {children}
        <Footerinfo />
      </body>
    </html>
  );
}