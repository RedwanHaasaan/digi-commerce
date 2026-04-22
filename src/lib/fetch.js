export const fetchProducts = async (url) => {
  const response = await fetch(url, {
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Fetch failed:", {
      url,
      status: response.status,
      body: text,
    });

    throw new Error(`Fetch failed: ${response.status}`);
  }

  return await response.json();
};