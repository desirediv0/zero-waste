
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://zerowaste-india.com"),

  title: {
    default: "ZeroWaste India | Scrap Pickup & Recycling Services",
    template: "%s | ZeroWaste India",
  },

  description:
    "Sell household and commercial scrap with ZeroWaste India. Schedule scrap pickup, check scrap rates, and explore quality refurbished furniture.",

  keywords: [
    "ZeroWaste India",
    "scrap pickup",
    "scrap collection",
    "sell scrap online",
    "scrap buyers",
    "waste recycling",
    "recycling services India",
    "refurbished furniture",
    "scrap rates",
    "e-waste recycling",
    "household scrap collection",
    "commercial scrap collection",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ZeroWaste India | Scrap Pickup & Recycling Services",
    description:
      "Schedule scrap pickup, get fair scrap rates, and explore refurbished furniture with ZeroWaste India.",
    url: "https://zerowaste-india.com/",
    siteName: "ZeroWaste India",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZeroWaste India | Scrap Pickup & Recycling Services",
    description:
      "Schedule scrap pickup, check scrap rates, and explore refurbished furniture with ZeroWaste India.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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

        {/* Floating WhatsApp Contact Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
