"use client"
import React, { useState,createContext, useCallback, useMemo } from "react";

type Props = {
    children : React.ReactNode
}
interface CartItem {
    id : string
    name : string
    price : number
    quantity : number
    image : {
        src : string
    }[]
}

interface CartContextType {
    items : CartItem[]
    addItem : (product : any) => void
    removeItem: (productId : string) => void
    updateQuantity: (productId : string, quantity : number) => void
    clearCart: () => void
    setIsOpen: (isOpen : boolean) => void
    cartTotal: number
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({children}: Props) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback((product : any)=>{
        setItems((prevItems)=>{
            const existingItem = prevItems.find((item)=>item.id === product.id);
            if(existingItem){
                return prevItems.map((item)=>item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prevItems, {...product, quantity: 1}];
        })
        setIsOpen(true);
    },[])


    const removeItem = useCallback((productId : string)=>{
        //REMOVE ITEM FROM CART
        setItems((prevItems)=>prevItems.filter((item)=>item.id !== productId));
    },[])

    const updateQuantity = useCallback((productId : string, quantity : number   )=>{
        //UPDATE QUANTITY OF ITEM IN CART
        if(quantity <= 0){
            removeItem(productId);
            return;
        }

        setItems((prevItems)=>prevItems.map((item)=>item.id === productId ? {...item, quantity} : item));
    },[])

    const clearCart = useCallback(()=>{
        //CLEAR CART
        setItems([]);
    },[])
    const cartTotal = useMemo(()=>{
        return items.reduce((total, item)=>total + item.price * item.quantity,0);
    },[items])

    return (
        <CartContext.Provider value={{items, addItem, removeItem, updateQuantity,clearCart,setIsOpen,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;