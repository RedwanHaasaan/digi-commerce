"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search} from "lucide-react";
import useCart from "@/hooks/useCart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {cart}=useCart();
  return (
    <div className="sticky top-0 z-50 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-lg border-b border-indigo-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT: Logo */}
          <Link
            href="/"
            className="text-3xl font-bold bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent hover:from-indigo-100 hover:to-white transition-all duration-300 tracking-tight"
          >
            ✦ DigiCommerce
          </Link>

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 font-medium">
              <li>
                <Link href="/" className="text-white hover:text-indigo-100 transition-colors duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white hover:text-indigo-100 transition-colors duration-300 relative group">
                  Shop
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-indigo-100 transition-colors duration-300 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-indigo-100 transition-colors duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon - Desktop */}
            <button className="hidden md:block p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Search size={20} />
            </button>
            
            {/* Cart Icon - Desktop */}
            <label htmlFor="cart-drawer" className="hidden md:block p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300 relative cursor-pointer">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 h-5 w-5 bg-yellow-400 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">{cart.length}</span>
            </label>
            
            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20 animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-3 font-medium items-center">
              <li>
                <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={() => setOpen(false)} className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setOpen(false)} className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setOpen(false)} className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shop/cart" className="w-full flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
                  <ShoppingCart size={18} /> Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;