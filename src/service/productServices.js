import { fetchProducts } from "@/lib/fetch";

export async function getProducts(category) {
  const url = category
  ? `https://dummyjson.com/products/category/${category}`
  : "https://dummyjson.com/products";
    const data = await fetchProducts(url);
    return data.products || data;
  }
