import Image from "next/image";
import { getProducts } from "../../actions/products";
import ProductGrid from "@/components/ProductGrid";
import ProductSkeleton from "@/components/ProductSkeleton";
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <div className="block pt-[0.5vw] pl-[5.113vw] pr-[5.113vw]">
        <Suspense fallback={<ProductSkeleton />}>
          <ProductGrid products={products} />
        </Suspense>
      </div>
    </>
  );
}
