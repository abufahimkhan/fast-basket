'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { getProducts } from '@/lib/api';
import ProductCard from './ProductCard';
import { motion } from 'motion/react';

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 animate-pulse">
            <div className="aspect-square bg-slate-100 rounded-xl mb-4" />
            <div className="h-4 bg-slate-100 rounded w-1/2 mb-2" />
            <div className="h-4 bg-slate-100 rounded w-full mb-4" />
            <div className="h-6 bg-slate-100 rounded w-1/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
