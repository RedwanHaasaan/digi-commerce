"use client";

import useCart from "@/hooks/useCart";
import { ArrowRight, ShoppingBasket } from "lucide-react";
import Link from "next/link";
const CartButton = () => {
    const handleCloseDrawer = () => {
        const drawer = document.getElementById("cart-drawer");
        if (drawer) drawer.checked = false;
      };
  return (
    <div className="flex flex-col mt-4">
      <Link
        href="/shop"
        className="flex-1 group px-8 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <ShoppingBasket
          size={20}
          className="group-hover:rotate-12 transition-transform duration-300"
        />
        Checkout
        <ArrowRight
          size={20}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </Link>
      <Link
        href="/shop"
        onClick={handleCloseDrawer}
        className="text-center text-xs text-gray-400 mt-3 hover:text-indigo-500 cursor-pointer transition"
      >
        Continue shopping
      </Link>
    </div>
  );
};

export default CartButton;
