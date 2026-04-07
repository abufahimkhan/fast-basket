'use client';

import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function WishlistPage() {
  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-black text-slate-900 mb-8">
          My <span className="text-orange-500">Wishlist</span>
        </h1>

        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-rose-300" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Your wishlist is empty</h2>
          <p className="text-slate-500 mb-8 text-center max-w-xs">Save items you love to your wishlist and they&apos;ll show up here.</p>
          <Link href="/" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
