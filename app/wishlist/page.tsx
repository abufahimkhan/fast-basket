"use client";

import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-black text-slate-900 mb-8">
          My <span className="text-orange-500">Wishlist</span>
        </h1>

        {wishlist.length === 0 ? (
          // ✅ Empty State
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-rose-300" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-slate-500 mb-8 text-center max-w-xs">
              Save items you love to your wishlist and they&apos;ll show up
              here.
            </p>
            <Link
              href="/"
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          // ✅ Wishlist Items
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square bg-slate-50 overflow-hidden">
                  <Link href={`/product/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Remove Button */}
                  <button
                    className="absolute top-2 right-2 p-2 bg-white/80 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    ❤️
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="font-semibold text-sm text-slate-800 line-clamp-2 mb-2 group-hover:text-orange-500 transition">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <p className="text-lg font-bold text-slate-900 mb-3">
                    ৳{item.price.toLocaleString()}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
