import { ShoppingBasket } from "lucide-react";

const NoProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-110  px-6 text-center">
      
      {/* Icon */}
      <div className="bg-gray-100 p-6 rounded-full mb-4 shadow-sm">
        <ShoppingBasket className="w-12 h-12 text-gray-500" />
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        Your cart is empty
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-sm">
        Looks like you haven’t added anything yet. Start exploring products and fill your cart.
      </p>
    </div>
  );
};

export default NoProduct;