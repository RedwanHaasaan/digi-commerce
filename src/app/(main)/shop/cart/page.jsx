"use client";
import CartButton from "@/components/shop/cart/CartButton";
import CartItem from "@/components/shop/cart/CartItem";
import CouponCode from "@/components/shop/cart/CouponCode";
import NoProduct from "@/components/shop/cart/NoProduct";
import OrderSummery from "@/components/shop/cart/OrderSummery";
import useCartDetails from "@/hooks/useCartDetails";

const Page = () => {
  const { cart, cartWithDetails } = useCartDetails();
  return (
    <div className="bg-base-200 min-h-105">
      <div className="container mx-auto py-10 px-2 flex flex-col lg:flex-row gap-10">
        <div className="bg-base-100 rounded-lg p-4 shadow-md flex flex-col gap-4 flex-1">
          <h1 className="text-2xl font-semibold border-b pb-4 border-b-gray-300">
            Your Cart
          </h1>
          {/* CartItem */}
          <div className="flex flex-col gap-4 max-h-105 overflow-y-auto no-scrollbar">
            {cart.length > 0 ? (
              cartWithDetails.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <NoProduct />
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col w-full lg:w-xs gap-5">
          {/* Coupon code */}
            <CouponCode/>
          {/* Order Summery */}
          <div className="flex flex-col bg-white rounded-lg p-4 w-full gap-5">
            <h1 className="text-2xl font-semibold border-b pb-4 border-b-gray-300">
              Order Summery
            </h1>
            <OrderSummery items={cartWithDetails} />
            {/* Go to checkout */}
            <CartButton text="Checkout" path="/checkout"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
