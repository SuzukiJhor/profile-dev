import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jhordan - profile Dev",
  description: "your friendly neighborhood developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
