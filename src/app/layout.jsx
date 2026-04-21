import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DigiCommerce - Premium Shopping Experience",
  description: "An e-commerce website built with Next.js and Tailwind CSS. Discover premium products with timeless elegance.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
    <head>
      <link rel="icon" type="image/x-icon" href="/favicon.png"/>
    </head>
      <body className="flex flex-col min-h-screen bg-white">
        <header className="sticky top-0 z-50">
            <Navbar/>
        </header>
        <main className="grow">
            {children}
        </main>
        <footer className="mt-auto">
            <Footer/>
        </footer>
      </body>
    </html>
  );
}
