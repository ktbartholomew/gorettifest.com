import type { Metadata } from "next";
import "./globals.css";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Arlington GorettiFest October 5-6 - Fall Festival Hosted by Saint Maria Goretti Catholic School",
  description:
    "GorettiFest is a fall festival with delicious homemade food, carnival games, and entertainment. Hosted in the heart of Arlington, TX all proceeds benefit Saint Maria Goretti Catholic School",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
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
        <script
          defer
          data-domain="gorettifest.com"
          src="/js/script.js"
        ></script>
      </body>
    </html>
  );
}
