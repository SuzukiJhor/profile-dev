import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jhordan - profile Dev",
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
      <body>
        {children}
      </body>
    </html>
  );
}
