const CouponCode = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 w-full gap-5">
      <h1 className="text-2xl font-semibold border-b pb-4 border-b-gray-300">
        Coupon Code
      </h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter Your Coupon Code"
          className="input"
        />
        <button className="btn btn-outline btn-primary max-w-xs">
          Apply Your Coupon
        </button>
      </div>
    </div>
  );
};

export default CouponCode;
