import CartButton from "./CartButton";

const OrderSummery =()=>{
    return(
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
          <span className="text-gray-800 font-medium">$00.00</span>
        </div>

        <div className="h-px bg-gray-200"></div>

        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>$00.00</span>
        </div>
      </div>
    );
}

export default OrderSummery;