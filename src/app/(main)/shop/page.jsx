import ProductCard from "@/components/shop/ProductCard";
import ShopTabs from "@/components/shop/ShopTabs";
import { getProducts } from "@/service/productServices";

const page = async ({searchParams}) => {
  const params = await searchParams;
  const category = params.category;
  const products = await getProducts(category);
  return (
    <div className="flex flex-col gap-5 py-20">
      <div className="container mx-auto">
        <ShopTabs />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            Products are temporarily unavailable. Please refresh and try again.
          </p>
        )}
        </div>
    </div>
  );
};

export default page;
