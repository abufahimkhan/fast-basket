'use client';

import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Laptop, Shirt, Home, Zap, Watch, ShoppingBag, Gift, Coffee, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const categories = [
  { name: 'Electronics', icon: Laptop, color: 'bg-blue-500', count: 1240 },
  { name: 'Fashion', icon: Shirt, color: 'bg-rose-500', count: 3500 },
  { name: 'Home & Living', icon: Home, color: 'bg-emerald-500', count: 890 },
  { name: 'Gadgets', icon: Zap, color: 'bg-amber-500', count: 560 },
  { name: 'Accessories', icon: Watch, color: 'bg-indigo-500', count: 1100 },
  { name: 'Beauty', icon: ShoppingBag, color: 'bg-pink-500', count: 2300 },
  { name: 'Gifts', icon: Gift, color: 'bg-purple-500', count: 450 },
  { name: 'Kitchen', icon: Coffee, color: 'bg-orange-500', count: 780 },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-black text-slate-900 mb-8">
          Browse <span className="text-orange-500">Categories</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={`/shop?category=${cat.name.toLowerCase()}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer h-full"
                >
                  <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${cat.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{cat.count.toLocaleString()} Products Available</p>
                  <div className="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                    Explore Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
