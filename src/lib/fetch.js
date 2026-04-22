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