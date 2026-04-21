"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X,} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-blue-600 border-b border-gray-200 sticky top-0 z-50">
      <div className="navbar px-4 md:px-8">

        {/* LEFT: Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="text-2xl font-extrabold text-white tracking-tight"
          >
            DigiCommerce
          </Link>
        </div>

        {/* CENTER: Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex gap-6 font-medium text-white">
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/shop" >Shop</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">
          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {open ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 font-medium text-white items-center">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;