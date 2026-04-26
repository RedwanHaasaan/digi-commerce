"use client";

import { useState } from "react";

export function WishlistButton() {
  const [wished, setWished] = useState(false);
  const handleWishList = () =>{
    setWished(!wished)
  }
  return (
    <button
      onClick={ handleWishList}
      className={`absolute top-3 z-30 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transition cursor-pointer ${
        wished ? "text-red-500" : "text-gray-400"
      }`}
      aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
    >
      ♥
    </button>
  );
}

export function AddToCartButton() {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleAdd}
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
