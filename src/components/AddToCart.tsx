"use client"
import React from "react";
import { ShoppingBag } from "lucide-react";

type Props = {
    product:any,
    addItem: (product: any) => void
}

const AddToCart = ({product , addItem} : Props) => {

    return (
        <button className=" bg-[#222020]
        w-full
        text-white font-regular text-[1.2vw]
         px-[1.008vw] py-[2.419vw] rounded-[4.028vw] flex items-center gap-3 text-center
         justify-center
         transition-all duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100
         "
         onClick={()=> addItem(product)}
         >
            <ShoppingBag className="w-6 h-6" />
            Add to Cart
        </button>
    )
}

export default AddToCart;