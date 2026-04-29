"use client";

import { CreditCard, Truck } from "lucide-react";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-4">
      
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <CreditCard className="w-5 h-5" />
        Payment Method
      </h2>

      <div className="flex flex-col gap-3">
        
        {/* COD */}
        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-primary">
          <input type="radio" name="payment" className="radio" defaultChecked />
          <Truck className="w-5 h-5" />
          <span>Cash on Delivery</span>
        </label>

        {/* Online */}
        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-primary">
          <input type="radio" name="payment" className="radio" />
          <CreditCard className="w-5 h-5" />
          <span>Online Payment</span>
        </label>

      </div>
    </div>
  );
};

export default PaymentMethod;