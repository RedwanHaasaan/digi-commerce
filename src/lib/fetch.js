export const fetchProducts = async (url, fallback = []) => {
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`Product fetch failed with status: ${response.status}`);
      return fallback;
    }

    return await response.json();
  } catch (error) {
    console.error("Product fetch failed:", error);
    return fallback;
  }
};