"use server"

import WooCommerceRestApi from "woocommerce-rest-ts-api";

const WooCommerce  = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL as string,
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY as string,
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET as string,
    version: "wc/v3",
})

export async function getProducts()
{
    const products = await WooCommerce.get("products");
    return products.data;
}

export async function getProductById(slug: string) {
    try {
        const product = await WooCommerce.get("products",{
            slug, 
            per_page: 1,
        });
        return product.data[0];
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}