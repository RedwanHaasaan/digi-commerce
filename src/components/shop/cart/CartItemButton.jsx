"use client"
import useCart from "@/hooks/useCart";
import { Trash2} from "lucide-react";

const CartItemButton = ({id}) => {
    const{removeFromCart}=useCart();
  return (
    <button onClick={()=>removeFromCart(id)} className="text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer">
      <Trash2/>
    </button>
  );
};

export default CartItemButton;
