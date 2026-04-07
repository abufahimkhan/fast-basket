'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/lib/cart-context';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
            New
          </span>
        )}
        {product.discount && (
          <span className="px-2 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-500 hover:bg-white transition-all shadow-sm">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image */}
      <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-orange-500 hover:text-white">
            <ShoppingCart className="w-4 h-4" />
            View Details
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/shop?category=${product.category.toLowerCase()}`} className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1 hover:underline">
          {product.category}
        </Link>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-display font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center text-amber-400">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold ml-1 text-slate-700">{product.rating}</span>
          </div>
          <span className="text-[10px] text-slate-400">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-slate-900">
                ৳{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ৳{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="sm:hidden p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
