import { fetchProducts } from "@/lib/fetch";

export async function getProducts() {
    const data = await fetchProducts("https://dummyjson.com/products");
    return data.products;
  }
