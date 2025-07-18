import CartProvider from "@/providers/cart-context";
import React from "react";

export default async function ProductPage({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <CartProvider>
            <div className="px-[5.04vw] flex flex-row gap-[2.52vw]">
                {children}
            </div>
        </CartProvider>
    )
}
