"use client";

import useCart from "@/hooks/useCart";
import { useState } from "react";
import { Heart } from "lucide-react";

export function WishlistButton({product}) {
  const { addProductToWishList, removeFromWishList, wishList } = useCart();
  const wished = wishList.some((item) => item.productId === product.id);
  const handleWishList = () => {
    if (wished) {
      removeFromWishList(product.id);
      return;
    }
    addProductToWishList(product.id);
  };
  return (
    <button
      onClick={handleWishList}
      className={`absolute top-3 z-30 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transition cursor-pointer ${
        wished ? "text-red-500" : "text-gray-400"
      }`}
      aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart size={16} fill={wished ? "currentColor" : "none"} />
    </button>
  );
}

export function AddToCartButton({productID}) {
  const{addToCartProduct}=useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (itemID) => {
    setAdded(true);
    addToCartProduct(itemID)
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={()=>handleAdd(productID)}
      className={`w-full py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
        added
          ? "bg-green-500 text-white"
          : "bg-indigo-600 text-white hover:bg-indigo-700"
      }`}
    >
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}
