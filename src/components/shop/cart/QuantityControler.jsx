import { Minus, Plus } from "lucide-react";

const QuantityControl = ({ quantity=0, onIncrease, onDecrease, min = 1 }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Decrease */}
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className={`p-1 rounded-md transition cursor-pointer
          ${quantity <= min 
            ? "bg-gray-100 text-gray-300 cursor-not-allowed" 
            : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
      >
        <Minus size={14} />
      </button>

      {/* Value */}
      <span className="text-sm font-medium w-6 text-center">
        {quantity}
      </span>

      {/* Increase */}
      <button
        onClick={onIncrease}
        className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QuantityControl;