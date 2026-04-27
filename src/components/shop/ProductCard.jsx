import Image from "next/image";
import { AddToCartButton, WishlistButton } from "./ProductCardActions";
import Link from "next/link";

export default function ProductCard({ product, badge = "New" }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden w-[290px]">
      {/* Image Section */}
      <div className="relative h-[220px] flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
        {/* Glow */}
        <div className="absolute w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full"></div>

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-semibold px-2 py-1 rounded-full z-10">
            ✦ {badge}
          </span>
        )}

        {/* Wishlist */}
        <WishlistButton />

        {/* Image */}
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 290px, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-6 z-10 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Body */}
      <div className="p-4">
        {/* Category */}
        <span className="inline-block text-[10px] font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full mb-2">
          ✦ {product.category}
        </span>

        {/* Title */}
        <Link href={`/shop/${product.id}`}>
          <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-1 cursor-pointer hover:text-indigo-600">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center text-yellow-400 text-xs mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i < Math.round(product?.rating?.rate || 4) ? "★" : "☆"}
            </span>
          ))}
          <span className="text-gray-400 ml-1 text-[11px]">
            {product?.rating?.rate || 4.5}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-3"></div>

        {/* Price */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <span className="text-lg font-bold text-indigo-600">
              ${product.price}
            </span>
          </div>
          <span className="text-[10px] font-bold bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
            {Math.ceil(product.discountPercentage)}% OFF
          </span>
        </div>

        {/* Button */}
        <AddToCartButton product={product}/>
      </div>
    </div>
  );
}
