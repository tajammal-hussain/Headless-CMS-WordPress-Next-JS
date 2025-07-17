import React from "react";
import ProductCard from "./ProductCard";
type Props = {
    products : any[]
}

export default function ProductGrid({products}: Props)
{
    return (
        <div className="block pt-[0.5vw] pl-[5.113vw] pr-[5.113vw]">
            <div className="grid w-full mt-[5.861vw] gap-x-[0.907vw] gap-y-[4.861vw] grid-rows-[auto_auto] grid-cols-[repeat(auto-fit,_minmax(32%,_32%))] auto-cols-fr">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}