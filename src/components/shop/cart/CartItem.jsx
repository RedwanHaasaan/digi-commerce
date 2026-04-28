"use client"
import Image from "next/image";
import CartItemButton from "./CartItemButton";
import QuantityControl from "./QuantityControler";
import useCart from "@/hooks/useCart";

const CartItem =({cartItem})=>{
  const {updateQuantity}=useCart();
 return(
    <>
    <div className="group flex gap-4 items-center bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
      {/* Image */}
      <div className="relative">
        <Image
          src={cartItem.thumbnail}
          alt={cartItem.title}
          width={100}
          height={100}
          className="w-16 h-16 rounded-xl object-cover ring-1 ring-gray-200"
        />
        <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
          -{Math.ceil(cartItem.discountPercentage)}%
        </span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900 leading-tight">
          {cartItem.title}
        </p>
        <p className="text-xs text-gray-400 mt-1">{cartItem.category}</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-semibold text-indigo-600">
            ${cartItem.price}
          </span>
        </div>
      </div>
      <div>
        <QuantityControl quantity={cartItem.quantity} onIncrease={() => updateQuantity(cartItem.id, cartItem.quantity + 1)} onDecrease={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}/>
      </div>
      {/* Remove */}
      <CartItemButton id={cartItem.id}/>
    </div>
    </>
 );
};

export default CartItem;