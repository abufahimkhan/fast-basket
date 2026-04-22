'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Laptop, Shirt, Home, Zap, Watch, ShoppingBag, Gift, Coffee } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Laptop, color: 'bg-blue-500', shadow: 'shadow-blue-500/20' },
  { name: 'Fashion', icon: Shirt, color: 'bg-rose-500', shadow: 'shadow-rose-500/20' },
  { name: 'Home & Living', icon: Home, color: 'bg-emerald-500', shadow: 'shadow-emerald-500/20' },
  { name: 'Gadgets', icon: Zap, color: 'bg-amber-500', shadow: 'shadow-amber-500/20' },
  { name: 'Accessories', icon: Watch, color: 'bg-indigo-500', shadow: 'shadow-indigo-500/20' },
  { name: 'Beauty', icon: ShoppingBag, color: 'bg-pink-500', shadow: 'shadow-pink-500/20' },
  { name: 'Gifts', icon: Gift, color: 'bg-purple-500', shadow: 'shadow-purple-500/20' },
  { name: 'Kitchen', icon: Coffee, color: 'bg-orange-500', shadow: 'shadow-orange-500/20' },
];

export default function CategoryList() {
  return (
    <section className="mb-12 sm:mb-16 px-2 sm:px-0">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5 sm:mb-8">
        <h2 className="text-lg sm:text-2xl font-black text-slate-900">
          Browse by <span className="text-orange-500">Category</span>
        </h2>

        <Link
          href="/shop"
          className="text-xs sm:text-sm font-bold text-slate-500 hover:text-orange-500 transition"
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-5">
        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <Link
              key={cat.name}
              href={`/shop?category=${cat.name.toLowerCase()}`}
              className="flex flex-col items-center gap-2 sm:gap-3 group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }} // mobile UX 🔥
                className={`w-12 h-12 sm:w-16 sm:h-16 ${cat.color} ${cat.shadow} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
              </motion.div>

              <span className="text-[9px] sm:text-xs font-semibold text-slate-600 group-hover:text-orange-500 text-center uppercase tracking-wide leading-tight">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}