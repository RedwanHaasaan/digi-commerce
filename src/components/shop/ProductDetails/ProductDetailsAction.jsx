"use client"

import useCart from "@/hooks/useCart";

const ProductDetailsAction = ({productID}) => {
    const {addProductToWishList,addToCartProduct}=useCart();
  return (
    <>
      <button onClick={()=>addToCartProduct(productID)}  className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition cursor-pointer">
        Add to Cart
      </button>
      <button onClick={()=>addProductToWishList(productID)} className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
        ♥ Wishlist
      </button>
    </> 
  );
};

export default ProductDetailsAction;
