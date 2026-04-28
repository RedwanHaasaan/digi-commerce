"use client";

import Image from "next/image";
import { ShoppingCart, Trash2 } from "lucide-react";
import useCart from "@/hooks/useCart";

const WishlistItem = ({ item }) => {
  const { removeFromWishList, addToCartProduct } = useCart();

  return (
    <div className="group flex gap-4 items-center bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
      
      {/* Image */}
      <div className="relative">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={100}
          height={100}
          className="w-16 h-16 rounded-xl object-cover ring-1 ring-gray-200"
        />
        <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
          -{Math.ceil(item.discountPercentage)}%
        </span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900 leading-tight">
          {item.title}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {item.category}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-semibold text-indigo-600">
            ${item.price}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">

        {/* Add to Cart */}
        <button
          onClick={() => addToCartProduct(item.id)}
          className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs hover:bg-indigo-700 transition cursor-pointer"
        >
          <ShoppingCart size={14} />
          Add To Cart
        </button>

        {/* Remove */}
        <button
          onClick={() => removeFromWishList(item.id)}
          className="p-2 rounded-lg bg-red-50 hover:bg-red-100 transition cursor-pointer"
          aria-label="Remove from wishlist"
        >
          <Trash2 size={16} className="text-red-500" />
        </button>

      </div>
    </div>
  );
};

export default WishlistItem;