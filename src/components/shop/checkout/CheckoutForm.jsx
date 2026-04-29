"use client";

import ShippingForm from "./ShippingForm";
import PaymentMethod from "./PaymentMethod";

const CheckoutForm = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md flex flex-col gap-6">
      
      <h1 className="text-2xl font-semibold border-b pb-4">
        Checkout
      </h1>

      <ShippingForm />
      <PaymentMethod />
      
    </div>
  );
};

export default CheckoutForm;