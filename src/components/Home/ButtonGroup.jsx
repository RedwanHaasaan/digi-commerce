"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const ButtonGroup = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Primary Button */}
      <Link href="/shop" className="group px-8 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
        <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        Shop Now
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Secondary Button */}
      <Link href="/contact" className="group px-8 py-4 rounded-xl border-2 border-indigo-600 text-indigo-600 font-bold hover:bg-transparent active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 hover:border-purple-600 hover:text-purple-600">
        Contact US
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ButtonGroup;
