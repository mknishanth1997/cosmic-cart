"use client";
import { useData } from "@/context/dataContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  HiMenu,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiSearch,
} from "react-icons/hi";

export function Header({ onToggle }: { onToggle: () => void }) {
  const router = useRouter();
  const { cosmicShop } = useData();
  return (
    <header className="bg-gray-200 dark:bg-gray-800 shadow-md">
      {/* Desktop layout (one row) */}
      <div className="hidden sm:flex items-center justify-between px-4 py-3">
        {/* Left: Hamburger + Logo + Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggle}
            className="p-2 rounded-md bg-gray-300 dark:bg-gray-700"
          >
            <HiMenu className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-2">
            <Image
              src="/cosmiclogo-removebg-preview.webp"
              alt="Cosmic Cart Logo"
              width={42}
              height={42}
              className="w-11 h-11"
            />
            <span className="font-bold text-xl md:text-2xl tracking-wide">
              Cosmic Cart
            </span>
          </div>
        </div>

        {/* Middle: Search */}
        <div className="flex flex-1 mx-6 max-w-md lg:max-w-lg">
          <div className="relative w-full">
            <HiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none 
                         focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Right: Wishlist + Cart */}
        <div className="flex items-center gap-4">
          <button
            className="relative p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => router.push("/wishListPage?id=wishListItems")}
          >
            <HiOutlineHeart className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {cosmicShop.wishListItems.length}
            </span>
          </button>

          <button
            className="relative p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => router.push("/wishListPage?id=cartItems")}
          >
            <HiOutlineShoppingCart className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full px-1">
              {cosmicShop.cartItems.length}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile layout (two rows) */}
      <div className="sm:hidden px-4 py-2">
        {/* Row 1: Logo + Title (left), Wishlist + Cart (right) */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Image
              src="/cosmiclogo-removebg-preview.webp"
              alt="Cosmic Cart Logo"
              width={38}
              height={38}
              className="w-10 h-10"
            />
            <span className="font-bold text-lg tracking-wide">Cosmic Cart</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700">
              <HiOutlineHeart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {cosmicShop.wishListItems.length}
              </span>
            </button>

            <button className="relative p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700">
              <HiOutlineShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full px-1">
                {cosmicShop.cartItems.length}
              </span>
            </button>
          </div>
        </div>

        {/* Row 2: Hamburger + Search */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            className="p-2 rounded-md bg-gray-300 dark:bg-gray-700"
          >
            <HiMenu className="h-6 w-6" />
          </button>

          <div className="flex-1 relative">
            <HiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none 
                         focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
