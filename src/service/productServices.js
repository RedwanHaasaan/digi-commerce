import { fetchProducts } from "@/lib/fetch";
import { findProduct } from "@/lib/findProduct";

export async function getProducts() {
    const data = await fetchProducts("https://dummyjson.com/products");
    return data.products;
  }
