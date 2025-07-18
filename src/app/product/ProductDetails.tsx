
import Image from "next/image"
import React from "react"

type Props = {
    product: any
}

const ProductDetails = ({product}: Props) => {
    return (
        <>
            <div className="flex-1 flex flex-col gap-[2.52vw]">
                <Image src={product.images[0].src} alt={product.name} width={500} height={500} className="w-full h-full object-cover rounded-lg" />
                <div className="block w-full">
                    <h2 className="font-bold uppercase mt-[10px] text-[1.11vw] leading-[1.95vw]">About Product</h2>
                    <p className="text-[1vw] " dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
            </div>
            <div className="flex justify-between flex-col flex-1">
                <div className="flex justify-between">
                    <h1 className="text-[2.5vw] font-bold">{product.name}</h1>
                </div>
                <p className="text-[1vw] " dangerouslySetInnerHTML={{ __html: product.short_description }} />
            </div>
        </>
    )
}
export default ProductDetails;