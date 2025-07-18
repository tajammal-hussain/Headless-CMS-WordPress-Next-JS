"use client"
import React from "react";
import { useCart } from "@/hooks/useCart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MiniCart() {
    const { isOpen,setIsOpen, items:cartItems, removeItem, updateQuantity,cartTotal } = useCart();

    // Debug: Log cart items to see what's coming

    return (
        <div className="mini-cart">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <button className="text-lg font-medium flex items-center ">
                        <ShoppingBag className="h-6 w-6" />
                        {cartItems.length > 0 && (
                            <span className="bg-primary text-white rounded-full px-2 py-1 text-xs">
                                {cartItems.length > 0 && (
                                    <span className="inline-flex items-center justify-center w-5 h-5 font-medium
                                    bg-black text-white rounded-full">
                                        {cartItems.reduce((total,item)=>total + item.quantity,0)}
                                    </span>
                                )}
                            </span>
                        )}
                    </button>
                </SheetTrigger>
                <SheetContent className="w-full sm-max-w-md">
                    <SheetHeader>
                        <SheetTitle>
                            You Cart
                        </SheetTitle>
                        {cartItems.length === 0 ? 
                        <div className="flex flex-col items-center justify-center h-[50vh]">
                            <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
                            <p className="text-gray-500">Your cart is empty</p>
                        </div> : 
                        
                        <div className="flex flex-col h-full">
                            <div className="fle-1 overflow-auto py-6">
                                <ul className="space-y-6">
                                    {
                                        cartItems.map((item) => (
                                            <li key={item.id} className="flex gap-4">
                                                <div className="flex items-start border-b-1 border-gray-200 ">
                                                    <div className="flex overflow-hidden rounded items-center justify-center w-[7.611vw] h-[7.611vw]">
                                                        <Image src={item.images[0].src || '/placeholder.svg'} alt={item.name} width={96} height={96} 
                                                        className="w-full h-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="h-[7.661vw] flex mr-0 text-[13px] lg:flex-row lg:justify-between lg:self-stretch">
                                                    <div className="flex flex-col lg:justify-between lg:flex-col lg:slef-stretch">
                                                        <div className="flex flex-col">
                                                            <p className="text-[1vw] leading-[1.31vw] font-medium text-gray-900">
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                           <Link href="#" onClick={()=> removeItem(item.id)} className="text-[1vw] leading-[1.31vw] font-medium text-gray-900">
                                                                Remove
                                                           </Link>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-[30px]">
                                                        <div className="flex flex-col text-center">
                                                           <button className="rounded-md border p-1" onClick={()=> updateQuantity(item.id, item.quantity - 1)}>
                                                                <Minus className="h-4 w-4" />
                                                               
                                                           </button>
                                                           <span className="text-[1vw] leading-[1.31vw] font-medium text-gray-900">
                                                                    {item.quantity}
                                                            </span>
                                                            <button className="rounded-md border p-1" onClick={()=> updateQuantity(item.id, item.quantity + 1)}>
                                                                <Plus className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-[1vw] leading-[1.31vw] font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: item.price_html }} />    
                                                            
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="border-t border-gray-200 pt-[1.677vw] pb-[1.677vw]">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <span>Subtotal</span>
                                        <span>{cartTotal}</span>
                                    </div>
                            </div>
                        </div>
                        
                        }
                    </SheetHeader>

                </SheetContent>

            </Sheet>
        </div>
    )
}