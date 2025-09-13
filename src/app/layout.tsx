import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Orbitron, Nunito } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import "flowbite/dist/flowbite.css";
import "keen-slider/keen-slider.min.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic Cart 🛒",
  description: "Solar System on Sale",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${nunito.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Client-side state handling goes here */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
