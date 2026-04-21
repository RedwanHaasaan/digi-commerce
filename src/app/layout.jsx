import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
