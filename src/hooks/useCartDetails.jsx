"use client";

import { getProducts } from "@/service/productServices";
import { useEffect, useMemo, useState } from "react";
import useCart from "./useCart";

const useCartDetails = () => {
  const { cart } = useCart();
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
        console.error("Failed to load cart products", error);
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

  const cartWithDetails = useMemo(
    () =>
      cart.map(({ productId, quantity }) => {
          const product = productMap[productId];

          if (!product) {
            return null;
          }

          return {
            ...product,
            quantity,
          };
        }).filter(Boolean),
    [cart, productMap]
  );

  return {
    cart,
    productMap,
    cartWithDetails,
  };
};

export default useCartDetails;
