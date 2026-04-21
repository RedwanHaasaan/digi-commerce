import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="grow">
        {children}
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </>
  );
}
