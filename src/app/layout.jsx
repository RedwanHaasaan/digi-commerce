import "./globals.css";

export const metadata = {
  title: "DigiCommerce - Premium Shopping Experience",
  description: "An e-commerce website built with Next.js and Tailwind CSS. Discover premium products with timeless elegance.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
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
