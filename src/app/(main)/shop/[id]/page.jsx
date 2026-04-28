import ProductDetailsAction from "@/components/shop/ProductDetails/ProductDetailsAction";
import { findProduct } from "@/lib/findProduct";
import { getProductParams } from "@/lib/getProductParams";
import Image from "next/image";

export async function generateStaticParams() {
  return await getProductParams("https://dummyjson.com/products?limit=30");
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await findProduct(id);
  const reviews = product.reviews ?? [];
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Details */}
        <div>
          {/* Category */}
          <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold mt-3 mb-2">{product.title}</h1>

          {/* Brand */}
          <p className="text-sm text-gray-500 mb-3">Brand: {product.brand}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-400 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
            ))}
            <span className="text-gray-500 text-sm">
              {product.rating} ({reviews.length} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </span>
            <span className="text-sm bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
            {Math.ceil(product.discountPercentage)}% OFF
            </span>
          </div>

          {/* Stock */}
          <p className="mb-4 text-sm">
            Availability:{" "}
            <span className="text-green-600 font-semibold">
              {product.availabilityStatus}
            </span>
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <ProductDetailsAction product={product}/>
          </div>

          {/* Extra Info */}
          <div className="text-sm text-gray-500 space-y-2 border-t pt-4">
            <p>🚚 {product.shippingInformation}</p>
            <p>🛡 {product.warrantyInformation}</p>
            <p>🔄 {product.returnPolicy}</p>
          </div>
        </div>
      </div>

      {/* ===== REVIEWS SECTION ===== */}
      <div className="mt-16">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>

          <span className="text-sm text-gray-500">
            {reviews.length} Reviews
          </span>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-gray-800">
                    {review.reviewerName}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>

                {/* Rating */}
                <div className="text-yellow-400 text-sm">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
