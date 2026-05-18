import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "ZeroWaste Asia – Building a Zero-Waste Future",
  description:
    "South Asia's most trusted recycling platform. Schedule free pickups, get fair scrap rates, and earn from your household waste.",
  keywords: "scrap, recycling, zero waste, pickup, India, e-waste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}