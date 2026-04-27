"use client";

import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ShopTabs = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Beauty" },
    { id: 3, name: "Fragrances" },
    { id: 4, name: "Furniture" },
    { id: 5, name: "Groceries" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:px-8 justify-between items-center">
      
      {/* Tabs */}
      <div className="flex gap-4 flex-wrap justify-center">
        {tabs.map((tab) => {
          const category = tab.name.toLowerCase();

          const isActive =
            (category === "all" && activeCategory === "all") ||
            activeCategory === category;

          return (
            <Link
              key={tab.id}
              href={`/shop${
                category === "all" ? "" : `?category=${category}`
              }`}
              className={`hover:text-indigo-600 text-gray-500 font-medium border-b-2 border-transparent hover:border-indigo-600 transition-all duration-300 ${
                isActive ? "border-indigo-600 text-indigo-600" : ""
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* Filter Dropdown */}
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
          tabIndex={-1}
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