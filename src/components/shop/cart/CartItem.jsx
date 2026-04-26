import { X } from "lucide-react";
import Image from "next/image";

const CartItem =()=>{
 return(
    <>
    <div className="group flex gap-4 items-center bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
      {/* Image */}
      <div className="relative">
        <Image
          src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
          alt="Product"
          width={100}
          height={100}
          className="w-16 h-16 rounded-xl object-cover ring-1 ring-gray-200"
        />
        <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
          -25%
        </span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900 leading-tight">
          Luxury Hoodie Collection
        </p>
        <p className="text-xs text-gray-400 mt-1">Size M • Black</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-semibold text-indigo-600">
            $45
          </span>
          <span className="text-xs text-gray-400 line-through">
            $60
          </span>
        </div>
      </div>

      {/* Remove */}
      <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer">
        <X/>
      </button>
    </div>
    </>
 );
};

export default CartItem;