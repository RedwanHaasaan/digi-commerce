"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumb/Breadcrumb";
import useCartDetails from "@/hooks/useCartDetails";

import CheckoutForm from "@/components/shop/checkout/CheckoutForm";
import CouponCode from "@/components/shop/cart/CouponCode";
import OrderSummery from "@/components/shop/cart/OrderSummery";

const Page = () => {
  const { cart, cartWithDetails } = useCartDetails();

  // Centralized checkout state
  const [checkoutData, setCheckoutData] = useState({
    shipping: {},
    payment: "cod",
  });

  const [loading, setLoading] = useState(false);

  // Handle order placement
  const handlePlaceOrder = async () => {
    if (!cart.length) return;

    try {
      setLoading(true);

      const payload = {
        items: cartWithDetails,
        ...checkoutData,
      };

      console.log("ORDER PAYLOAD:", payload);

      alert("Order placed successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen py-10">
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-2">
        <Breadcrumbs />
      </div>

      {/* Main Layout */}
      <div className="container mx-auto px-2 flex flex-col lg:flex-row gap-10 mt-6">
        
        {/* LEFT: Checkout Form */}
        <div className="flex-1">
          <CheckoutForm
            checkoutData={checkoutData}
            setCheckoutData={setCheckoutData}
          />
        </div>

        {/* RIGHT: Summary */}
        <div className="flex flex-col w-full lg:w-xs gap-5">
          
          {/* Coupon */}
          <CouponCode />

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col gap-5 sticky top-20">
            
            <h1 className="text-2xl font-semibold border-b pb-4 border-gray-300">
              Order Summary
            </h1>

            <OrderSummery items={cartWithDetails} />

            {/* CTA */}
            <button
              onClick={handlePlaceOrder}
              disabled={!cart.length || loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;