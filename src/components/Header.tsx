import React from "react";
import { getLogo } from "../../actions/header";
import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/shared/constants";
import MiniCart from "./MiniCart";

export default async function Header()
{
    const logo = await getLogo();
    return (
        <header className="bg-white w-full flex justify-between items-center p-4 z-10">
           <div className="header-box flex justify-between items-center w-full max-w-full pl-30 pr-30">
            <div className="header-left flex-1 items-center h-[6.99vw] flex w-1/2">
                <Link href="/">
                    <Image src={logo.url} alt={logo.alt} className="w-[8.41vw] h-[2.49vw] object-contain" width={100} height={100} />
                </Link>
            </div> 
            <div className="header-right flex justify-between items-center w-1/2">
                <nav role="navigation" className="flex items-center justify-start">
                    {nav_links.map((link, index) => (
                        <Link key={index} href={link.href} className="
                                text-[0.95vw] leading-[0.95vw] px-[0.5vw] py-[3vw] mr-[3.4vw] font-medium text-gray-700 hover:text-gray-900">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center">
                    <MiniCart />
                </div>
            </div>
           </div>
        </header>
    )
}