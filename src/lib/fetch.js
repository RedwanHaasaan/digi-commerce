// export const fetchProducts = async (url, fallback = []) => {
//   try {
//     const response = await fetch(url, {
//       cache:"no-store",
//     });

//     if (!response.ok) {
//       console.error(`Product fetch failed with status: ${response.status}`);
//       return fallback;
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Product fetch failed:", error);
//     return fallback;
//   }
// };

export const fetchProducts = async (url) => {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Fetch failed:", {
      status: response.status,
      body: text,
    });

    throw new Error(`Fetch failed: ${response.status}`);
  }

  return response.json();
};