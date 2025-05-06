"use client";
import { useState } from "react";
import { MagnifyingGlassIcon, ShoppingBagIcon, GiftIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-white" >
            <nav aria-label="Global" className="flex flex-col w-full p-3 items-center justify-between gap-y-5 lg:px-8 shadow-md space-x-4">
                <div className="flex flex-col md:flex-row items-center w-full gap-y-4 md:gap-x-10 gap-x-10 w-full max-w-8xl">
                    <div className="flex md:flex-1 items-center justify-start">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company Logo</span>
                            <h1 className="text-blue-900 italic font-bold md:text-lg">E-commerce Logo</h1>
                        </a>
                    </div>
                    <div className="w-full md:flex-[4] min-w-0">
                        <div className="relative w-full max-w-4xl">
                            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                                <MagnifyingGlassIcon className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="md:w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="w-full md:flex-1 flex items-center justify-end gap-x-5">
                        {[{ icon: HeartIcon, label: "Favorite" },
                        { icon: GiftIcon, label: "Gifts" },
                        { icon: ShoppingBagIcon, label: "Bag" },
                        { icon: UserIcon, label: "SignIn" }].map(({ icon: Icon, label }, i) => (
                            <div key={i} className="relative group">
                                <Link href="#"><Icon className="w-6 h-6" /></Link>
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-black bg-slate-300 text-sm p-2 rounded-lg shadow-lg">
                                    {label}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-black border-l-transparent border-r-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex Items-center justify-center gap-4 text-sm font-medium">
                    {["Dress", "Jacket", "T-shirt", "Jeans", "Shoes", "Accessories"].map((item, i) => (
                        <Link key={i} href="#" className="text-gray-500 font-bold transition-all duration-300 ease-in-out hover:underline hover:scale-110">
                            {item}
                        </Link>))}
                </div>
            </nav>
        </header>
    );
}
export default NavBar;
