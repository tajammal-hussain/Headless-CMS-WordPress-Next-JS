import { getProductById } from "../../../../actions/products";
import ProductDetails from "../ProductDetails";


interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProductById(params.id);
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}