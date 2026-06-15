"use client";
import Link from 'next/link';
import { ShoppingCart, Menu, User, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-secondary text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-black tracking-tighter text-primary">
            ZHORA <span className="text-white">APPAREL</span>
          </Link>

          <div className="hidden md:flex space-x-8 font-medium uppercase text-sm tracking-widest">
            <Link href="/shop" className="hover:text-primary transition">Shop</Link>
            <Link href="/custom" className="hover:text-primary transition">Custom Jersey</Link>
            <Link href="/about" className="hover:text-primary transition">About</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          </div>

          <div className="flex items-center space-x-5">
            <Search className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Link href="/account"><User className="w-5 h-5" /></Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}