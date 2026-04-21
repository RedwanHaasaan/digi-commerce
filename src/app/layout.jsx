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
  title: "DigiCommerce",
  description: "An e-commerce website built with Next.js and Tailwind CSS.",
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
      <body className="min-h-full flex flex-col">
        <header>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
      </body>
    </html>
  );
}
