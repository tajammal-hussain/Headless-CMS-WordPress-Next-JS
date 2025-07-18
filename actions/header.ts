"use server";

export async function getLogo(){
    console.log(process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL);
    try {
        const logo = await fetch(process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL + "wp-json/custom/v2/logo");
        const logoData = await logo.json();
        return logoData;
    } catch (error) {
        console.log(error);
        return [];
    }
}
export async function getMenu(){
    try {
        
        const menu = await fetch(process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL + "wp-json/custom/v2/menu/primary");
        const menuData = await menu.json();
        if(menuData.length > 0){
            return menuData;
        }
        return [];
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch menu");
        return [];
    }
}