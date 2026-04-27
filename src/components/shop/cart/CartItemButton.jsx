"use client"
import useCart from "@/hooks/useCart";
import { X } from "lucide-react";

const CartItemButton = ({id}) => {
    const{removeFromCart}=useCart();
  return (
    <button onClick={()=>removeFromCart(id)} className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer">
      <X/>
    </button>
  );
};

export default CartItemButton;
