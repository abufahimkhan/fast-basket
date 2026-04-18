"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const liked = isInWishlist(product.id);

  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg sm:hover:shadow-xl transition-all duration-300">
      {/* Badges */}
      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 flex flex-col gap-1 sm:gap-2">
        {product.isNew && (
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500 text-white text-[8px] sm:text-[10px] font-bold rounded-md uppercase">
            New
          </span>
        )}
        {product.discount && (
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-orange-500 text-white text-[8px] sm:text-[10px] font-bold rounded-md uppercase">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Wishlist */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          if (liked) {
            removeFromWishlist(product.id);
          } else {
            addToWishlist(product);
          }
        }}
        className={`absolute top-2 right-2 z-10 p-2 rounded-full cursor-pointer
    ${liked ? "bg-orange-500 text-white" : "bg-white/80 text-slate-400"}
  `}
      >
        <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
      </button>

      {/* Image */}
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-slate-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
        />

        {/* Overlay (only md+) */}
        <div className="hidden md:flex absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
          <div className="bg-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-orange-500 hover:text-white transition">
            <ShoppingCart className="w-4 h-4" />
            View
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Category */}
        <Link
          href={`/shop?category=${product.category.toLowerCase()}`}
          className="text-[8px] sm:text-[10px] font-bold text-orange-500 uppercase mb-1 block"
        >
          {product.category}
        </Link>

        {/* Title */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-xs sm:text-sm md:text-base text-slate-800 line-clamp-2 mb-1 sm:mb-2 group-hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
          <div className="flex items-center text-amber-400">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-[10px] sm:text-xs font-bold ml-1 text-slate-700">
              {product.rating}
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] text-slate-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price + Action */}
        <div className="flex items-end justify-between gap-2">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
              ৳{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[9px] sm:text-xs text-slate-400 line-through">
                ৳{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="p-1.5 sm:p-2 bg-orange-100 text-orange-600 rounded-md sm:rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
