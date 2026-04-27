"use client";
import CartButton from "@/components/shop/cart/CartButton";
import CartItem from "@/components/shop/cart/CartItem";
import NoProduct from "@/components/shop/cart/NoProduct";
import useCart from "@/hooks/useCart";

const Page = () => {
  const { cart } = useCart();
  return (
    <div className="bg-base-200 min-h-105">
      <div className="container mx-auto py-10 px-2 flex flex-col lg:flex-row gap-10">
        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col gap-4 flex-1">
          <h1 className="text-2xl font-semibold border-b pb-4 border-b-gray-300">
            Your Cart
          </h1>
          {/* CartItem */}
          <div className="flex flex-col gap-4">
            {cart.length > 0 ? (
              cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <NoProduct />
            )}
          </div>
        </div>
        <div className="flex lg:flex-col w-full lg:w-xs gap-5">
          {/* Coupon code */}
          <div className="flex flex-col bg-white rounded-lg p-4 w-full gap-5">
            <h1 className="text-2xl font-semibold border-b pb-4 border-b-gray-300">
              Coupon Code
            </h1>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter Your Coupne Code"
                className="input"
              />
              <button className="btn btn-outline btn-primary max-w-xs">
                Apply Your Coupon
              </button>
            </div>
          </div>
          {/* Order Summery */}
          <div className="flex flex-col bg-white rounded-lg p-4 w-full gap-5">
            <h1 className="text-2xl font-semibold border-b pb-4 border-b-gray-300">
              Order Summery
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Discount</span>
                <span className="text-gray-800 font-medium">$00.00</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span className="text-gray-800 font-medium">$00.00</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Tax</span>
                <span className="text-gray-800 font-medium">$5.00</span>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>$5.00</span>
              </div>
              <CartButton/>
            </div>
          </div>
          {/* Go to checkout */}
          
        </div>
      </div>
    </div>
  );
};

export default Page;
