'use client'

import React from "react";
import { useCart } from "@/hooks/useCart";

export function CartSection() {
    const { cartTotal } = useCart();
    
    return (
        <div className="flex items-center">
            {/* Add your cart display logic here */}
            <span className="text-sm font-medium">Cart: {cartTotal}</span>
        </div>
    );
} 