import { fetchProducts } from "@/lib/fetch";

export async function getProducts(){
    return fetchProducts("https://fakestoreapi.com/products");
}