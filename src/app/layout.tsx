import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leul Melkamu | Backend Engineer",
  description: "Portfolio of Leul Melkamu Bezabih - Senior Backend Developer specialized in Microservices and Cloud Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetBrainsMono.variable} font-mono antialiased bg-background text-foreground`}
      >
        <div className="crt-overlay" />
        <div className="crt-scanline" />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
