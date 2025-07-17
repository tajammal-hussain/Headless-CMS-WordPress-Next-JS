import Image from "next/image";
import { getProducts } from "../../actions/products";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Header />
      <ProductGrid products={products} />
    </>
  );
}
