import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZHORA APPAREL | Premium Custom Sports Jerseys",
  description: "Cibinong's finest custom jersey manufacturer for Football, Esports, Basketball, and more.",
  openGraph: {
    title: "ZHORA APPAREL",
    description: "Premium Custom Jerseys for Teams, Communities, and Champions.",
    images: ['/og-image.jpg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}