"use client";
import React from 'react';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  {
    id: '1',
    name: "ZHORA 'ULTRA' Football Kit",
    category: "Football",
    price: 195000,
    image: "https://images.unsplash.com/photo-1551854838-212c20b7c8a1?q=80&w=800",
  },
  {
    id: '2',
    name: "Aero-Tech Cycling Jersey",
    category: "Cycling",
    price: 245000,
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800",
  },
  {
    id: '3',
    name: "Cyber-Vortex Esports Jersey",
    category: "Esports",
    price: 175000,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800",
  },
  {
    id: '4',
    name: "Titan Strength Training Jacket",
    category: "Apparel",
    price: 299000,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Featured <span className="text-primary">Products</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary mt-2"></div>
          </div>
          <Link href="/shop" className="text-sm font-bold uppercase border-b-2 border-black hover:text-primary hover:border-primary transition pb-1">
            View All Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 font-bold uppercase text-xs flex items-center justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">{product.category}</p>
              <h3 className="font-bold text-lg uppercase mb-1 leading-tight group-hover:text-primary transition">{product.name}</h3>
              <p className="font-black text-secondary">{formatPrice(product.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}