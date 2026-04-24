import Link from "next/link";
import CartButton from "./CartButton";
import Image from "next/image";

export default function CartDrawer({ children }) {
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
              <p className="text-xs text-gray-400 mt-1">2 premium items</p>
            </div>

            <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
              🛍️
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto space-y-5 pr-1">
            {/* Item Card */}
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
              <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition duration-200">
                ✕
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6">
            {/* Glass Panel */}
            <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-4 shadow-inner space-y-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="text-gray-800 font-medium">$90</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>$90</span>
              </div>
            </div>
            {/* CTA */}
              <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
}
