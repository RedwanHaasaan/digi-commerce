"use client";
import Breadcrumbs from "@/components/Breadcrumb/Breadcrumb";
import CartButton from "@/components/shop/cart/CartButton";
import CartItem from "@/components/shop/cart/CartItem";
import NoProduct from "@/components/shop/cart/NoProduct";
import useCartDetails from "@/hooks/useCartDetails";

const Page = () => {
  const { cart, cartWithDetails } = useCartDetails();
  return (
    <div className="bg-base-200 min-h-105 py-10">
      <div className="container mx-auto px-2">
        <Breadcrumbs/>
      </div>
      <div className="container mx-auto px-2">
        <div className="bg-base-100 rounded-lg p-4 shadow-md">
          <h1 className="text-2xl font-semibold pb-4 border-b-gray-300">
            Your Cart
          </h1>
          {/* CartItem */}
          <div className="flex flex-col gap-4 xl:max-h-105 overflow-y-auto mt-4">
            {cart.length > 0 ? (
              cartWithDetails.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <NoProduct />
            )}
          </div>
          <div className="border-t border-gray-200 mt-6">
            <CartButton classname="flex-row-reverse justify-between items-center" btnCls="group px-8 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 active:scale-95 transition-all duration-300" text="Checkout" path="/shop/cart/checkout"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
