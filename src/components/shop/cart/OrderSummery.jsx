import useCart from "@/hooks/useCart";

const OrderSummery =()=>{
    const {cart}=useCart();

    const subTotal=cart.reduce((acc,item)=>{
        return acc+item.price;
    }, 0)

    const discount= subTotal*0.1;
    const tax = subTotal * 0.05;
    const delivery = subTotal > 0 && subTotal < 500 ? 5 : 0;
    const total = subTotal-discount+tax+delivery;
    return(
        <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Discount</span>
          <span className="text-gray-800 font-medium">${discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Delivery</span>
          <span className="text-gray-800 font-medium">${delivery.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Tax</span>
          <span className="text-gray-800 font-medium">${tax.toFixed(2)}</span>
        </div>

        <div className="h-px bg-gray-200"></div>

        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    );
}

export default OrderSummery;