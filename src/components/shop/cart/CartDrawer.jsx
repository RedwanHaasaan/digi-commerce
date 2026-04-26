import CartButton from "./CartButton";
import CartItem from "./CartItem";

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
          <div className="flex-1 max-h-132 overflow-y-auto space-y-5 pr-1">
            <CartItem/>
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
