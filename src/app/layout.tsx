import type { Metadata } from "next";
import "./globals.css";
import { leagueSpartan } from "./fonts/fonts"
export const metadata: Metadata = {
  title: "Dev-jSuzuki",
  description: "Seu desenvolvedor amigo da vizinhança",
  icons: {
    icon: [
      { url: "/logo-site.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-site.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/logo-site.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={leagueSpartan.className}>
        {children}
      </body>
    </html>
  );
}
