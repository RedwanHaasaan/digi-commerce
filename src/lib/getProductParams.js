// lib/getProductParams.js
export async function getProductParams(url) {
    const res = await fetch(url);
    const data = await res.json();
  
    return data.products.map((product) => ({
      id: product.id.toString(),
    }));
  }