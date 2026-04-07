'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight hidden sm:block">
            Moveon<span className="text-orange-500">Global</span>
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Search products, brands, and categories..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-slate-100 border-none focus:ring-2 focus:ring-orange-500 transition-all outline-none text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Search className="w-5 h-5 text-slate-600" />
          </button>
          
          <Link href="/login" className="hidden sm:flex items-center gap-2 p-2 hover:bg-slate-100 rounded-full transition-colors">
            <User className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Account</span>
          </Link>

          <Link href="/cart" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5 text-slate-600" />
            {mounted && totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white"
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 overflow-hidden">
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                autoFocus
                placeholder="Search products..."
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-orange-500 transition-all outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
