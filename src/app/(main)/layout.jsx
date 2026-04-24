import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CartDrawer from "@/components/shop/cart/CartDrawer";

export default function MainLayout({ children }) {
  return (
    <>
      <CartDrawer>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="grow">{children}</main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </CartDrawer>
    </>
  );
}
