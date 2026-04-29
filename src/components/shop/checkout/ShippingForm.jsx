"use client";

import { MapPin } from "lucide-react";

const ShippingForm = () => {
  return (
    <div className="flex flex-col gap-5">
      
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Shipping Information
      </h2>

      {/* Name */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full"
        />
      </div>

      {/* Contact */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />
      </div>

      {/* Address */}
      <input
        type="text"
        placeholder="Street Address"
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Apartment, suite, etc. (optional)"
        className="input input-bordered w-full"
      />

      {/* Location */}
      <div className="grid md:grid-cols-3 gap-4">
        
        {/* Country */}
        <select className="select select-bordered w-full">
          <option>Country</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Bangladesh</option>
          <option>India</option>
        </select>

        {/* State / Region */}
        <input
          type="text"
          placeholder="State / Region"
          className="input input-bordered w-full"
        />

        {/* ZIP */}
        <input
          type="text"
          placeholder="ZIP / Postal Code"
          className="input input-bordered w-full"
        />
      </div>

      {/* City */}
      <input
        type="text"
        placeholder="City"
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default ShippingForm;