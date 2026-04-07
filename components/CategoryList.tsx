'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Laptop, Shirt, Home, Zap, Watch, ShoppingBag, Gift, Coffee } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Laptop, color: 'bg-blue-500' },
  { name: 'Fashion', icon: Shirt, color: 'bg-rose-500' },
  { name: 'Home & Living', icon: Home, color: 'bg-emerald-500' },
  { name: 'Gadgets', icon: Zap, color: 'bg-amber-500' },
  { name: 'Accessories', icon: Watch, color: 'bg-indigo-500' },
  { name: 'Beauty', icon: ShoppingBag, color: 'bg-pink-500' },
  { name: 'Gifts', icon: Gift, color: 'bg-purple-500' },
  { name: 'Kitchen', icon: Coffee, color: 'bg-orange-500' },
];

export default function CategoryList() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl font-black text-slate-900 tracking-tight">
          Browse by <span className="text-orange-500">Category</span>
        </h2>
        <Link href="/shop" className="text-sm font-bold text-slate-500 hover:text-orange-500 transition-colors">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.name}
              href={`/shop?category=${cat.name.toLowerCase()}`}
              className="flex flex-col items-center gap-3 group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 ${cat.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-${cat.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 group-hover:text-orange-500 transition-colors text-center uppercase tracking-wider">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
