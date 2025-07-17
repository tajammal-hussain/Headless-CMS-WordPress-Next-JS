"use client"
import { useCart } from "@/hooks/useCart";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "./AddToCart";


type Props = {
    product:any
}

const ProductCard = ({product}:Props)=>{

    const {addItem} = useCart();

    return (
        <div className="relative product-item group">
            <div className="block product-item-box">
                <div className="relative overflow-hidden flex justify-center items-center max-w-full rounded-[4.028vw]">
                    <Link href={`/product/${product.id}`} className="block">
                        <Image
                        src={product.images[0].src || '/placeholder.svg'}
                        alt={product.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover object-center"
                        />
                    </Link>
                    <div className="absolute bottom-[1.008vw] left-1/2 -translate-x-1/2 w-full px-[1.008vw]">
                       <AddToCart product={product} addItem={addItem} />
                       
                    </div>
                </div>
                <Link href={`/product/${product.id}`} className="block mt-[1.389vw]">
                    <h3 className="text-[18px] leading-[1.31vw] font-medium text-gray-900">
                        {product.name}
                    </h3>
                </Link>
                <div className="block text-[#222020] mb-0 text-[.903vw] leading-[1.95vw] mt-[-.277vw] product-description">
                   {product.attributes[0].name} : {product.attributes[0].options[0]}
                </div>
                <div className=" text-[#222020] mb-0 text-[.903vw] leading-[1.95vw] mt-[-.277vw] product-description">
                    <div dangerouslySetInnerHTML={{ __html: product.price_html }} />
                </div>
            </div>
        </div>
    )
}
export default ProductCard;