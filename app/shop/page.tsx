'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Product } from '@/types/product';
import { getProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import { Filter, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(selectedCategory || undefined),
          getCategories()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to fetch shop data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-black text-slate-900">
              {selectedCategory ? (
                <>Category: <span className="text-orange-500 capitalize">{selectedCategory}</span></>
              ) : (
                <>All <span className="text-orange-500">Products</span></>
              )}
            </h1>
            <p className="text-slate-500 text-sm mt-1">{products.length} products found</p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 font-bold text-sm text-slate-700 hover:border-orange-500 transition-all"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 font-bold text-sm text-slate-700 hover:border-orange-500 transition-all">
                Sort by: Newest
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block space-y-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Categories</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${!selectedCategory ? 'bg-orange-500 text-white' : 'hover:bg-white text-slate-600'}`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory?.toLowerCase() === cat.toLowerCase() ? 'bg-orange-500 text-white' : 'hover:bg-white text-slate-600'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Price Range</h3>
              <div className="space-y-4">
                <input type="range" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>৳0</span>
                  <span>৳50,000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 animate-pulse">
                    <div className="aspect-square bg-slate-100 rounded-xl mb-4" />
                    <div className="h-4 bg-slate-100 rounded w-1/2 mb-2" />
                    <div className="h-4 bg-slate-100 rounded w-full mb-4" />
                    <div className="h-6 bg-slate-100 rounded w-1/3" />
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100">
                <X className="w-12 h-12 text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-900">No products found</h3>
                <p className="text-slate-500">Try adjusting your filters or search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-80 bg-white p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${!selectedCategory ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${selectedCategory?.toLowerCase() === cat.toLowerCase() ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ShopContent />
    </Suspense>
  );
}
