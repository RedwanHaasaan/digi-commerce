"use client"
import { Heart } from "lucide-react";
import Link from "next/link";

const WishlistButton = () => {

  return (
    <Link
      href="/wishlist"
      className="relative hidden md:block p-2 text-white hover:bg-transparent group"
    >
      {/* Ping animation */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-100 opacity-0 group-hover:opacity-75 group-hover:animate-ping"></span>
      </span>

      {/* Icon */}
      <Heart
        className="relative text-red-500 z-10"
        fill="#FF0000"
        size={20}
      />
    </Link>
  );
};

export default WishlistButton;