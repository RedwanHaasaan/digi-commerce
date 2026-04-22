"use client";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const ShopTabs = () => {
  const [activeTab, setActiveTab] = useState("All Products");
  const tabs = [
    {
      id: 1,
      name: "All Products",
    },
    {
      id: 2,
      name: "Beauty",
    },
    {
      id: 3,
      name: "Fragrances",
    },
    {
      id: 4,
      name: "Furniture",
    },
    {
      id: 5,
      name: "Groceries",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:px-8 justify-between items-center">
      <div className="flex gap-4 flex-wrap">
        {tabs.map((tab) => (
          <Link
            href={`/shop?tab=${tab.name}`}
            onClick={() => setActiveTab(tab.name)}
            key={tab.id}
            className={`hover:text-indigo-600 text-gray-500 font-medium border-b-2 border-transparent hover:border-indigo-600 transition-all duration-300 ${activeTab === tab.name ? "border-indigo-600 text-indigo-600" : ""}`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost border-2 rounded-full border-indigo-500 text-indigo-500 flex items-center gap-2 hover:bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
        >
          <SlidersHorizontal size={20} />
          <span className="text-sm font-medium">Filter</span>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Price: Low to High</a>
          </li>
          <li>
            <a>Price: High to Low</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopTabs;
