import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leul Melkamu | Senior System Engineer",
  description: "System Engineer specializing in distributed systems, infrastructure architecture, and platform engineering. Designing resilient, scalable systems with 99.9% availability.",
  keywords: ["System Engineer", "SRE", "Distributed Systems", "Microservices", "Platform Engineering", "Cloud Infrastructure", "Spring Boot", "Kafka", "Kubernetes"],
  authors: [{ name: "Leul Melkamu Bezabih" }],
  openGraph: {
    title: "Leul Melkamu | Senior System Engineer",
    description: "Designing and operating distributed systems at scale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
