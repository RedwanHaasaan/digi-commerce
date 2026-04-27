"use client";
import useCart from "@/hooks/useCart";
import CartButton from "./CartButton";
import CartItem from "./CartItem";
import NoProduct from "./NoProduct";
import OrderSummery from "./OrderSummery";

export default function CartDrawer({ children }) {
  const { cart } = useCart();
  return (
    <div className="drawer drawer-end">
      {/* Toggle */}
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {children}
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>

        <div className="w-[380px] min-h-full bg-linear-to-b from-white to-gray-50 p-6 flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Your Cart
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                {cart.length} premium items
              </p>
            </div>

            <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
              🛍️
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 max-h-132 overflow-y-auto space-y-5 pr-1">
            {cart.length > 0 ? (
              cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <NoProduct />
            )}
          </div>
          <div>
          </div>
          {/* Footer */}
          <div className="mt-6 border-t border-gray-200 pt-2">
              <OrderSummery/>
              {/* Go to cart */}
              <CartButton text="Go to Cart" path="/shop/cart"/>
          </div>
        </div>
      </div>
    </div>
  );
}
