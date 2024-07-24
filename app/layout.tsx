import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Arlington GorettiFest October 5-6 - Fall Festival Hosted by Saint Maria Goretti Catholic School",
  description:
    "GorettiFest is a fall festival with delicious homemade food, carnival games, and entertainment. Hosted in the heart of Arlington, TX all proceeds benefit Saint Maria Goretti Catholic School",
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
        <Analytics />
      </body>
    </html>
  );
}
