"use client";

import WishlistItem from "@/components/Wishlist/WishListItem";
import useWishlistDetails from "@/hooks/useWishlistDetails";

const Page = () => {
  const { wishList, wishListWithDetails } = useWishlistDetails();
  console.log(wishList.length)
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        ❤️ My Wishlist
      </h1>

      {/* Grid */}
      {wishList.length > 0 ? (
        <div className="flex flex-col gap-5">
          {wishListWithDetails.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <p>No items in wishlist</p>
        </div>
      )}
    </div>
  );
};
export default Page;
