"use client";

import { getProducts } from "@/service/productServices";
import { useEffect, useMemo, useState } from "react";
import useCart from "./useCart";

const useWishlistDetails = () => {
  const { wishList } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const data = await getProducts();
        if (isMounted) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to load wishlist products", error);
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const productMap = useMemo(
    () => Object.fromEntries(products.map((product) => [product.id, product])),
    [products]
  );

  const wishListWithDetails = useMemo(
    () =>
      wishList
        .map(({ productId }) => productMap[productId])
        .filter(Boolean),
    [wishList, productMap]
  );

  return {
    wishList,
    productMap,
    wishListWithDetails,
  };
};

export default useWishlistDetails;
