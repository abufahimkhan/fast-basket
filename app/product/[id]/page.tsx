'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Product } from '@/types/product';
import { getProductById, getProducts } from '@/lib/api';
import { useCart } from '@/lib/cart-context';
import { Star, ShoppingCart, Heart, ArrowLeft, ShieldCheck, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getProductById(id as string);
        if (data) {
          setProduct(data);
          const related = await getProducts(data.category);
          setRelatedProducts(related.filter(p => p.id !== data.id).slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to fetch product', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="container mx-auto px-4 py-8 animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-white rounded-3xl" />
            <div className="space-y-6">
              <div className="h-8 bg-white rounded w-3/4" />
              <div className="h-4 bg-white rounded w-1/4" />
              <div className="h-12 bg-white rounded w-1/2" />
              <div className="h-32 bg-white rounded w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
          <button onClick={() => router.back()} className="mt-4 text-orange-500 font-bold">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          <button onClick={() => router.push('/')} className="hover:text-orange-500">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => router.push(`/shop?category=${product.category.toLowerCase()}`)} className="hover:text-orange-500">{product.category}</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 truncate max-w-[150px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-square bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              {product.discount && (
                <span className="absolute top-6 left-6 px-4 py-2 bg-orange-500 text-white text-xs font-black rounded-xl uppercase tracking-widest shadow-lg">
                  -{product.discount}% OFF
                </span>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-black rounded-full uppercase tracking-widest mb-4">
                {product.category}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                  ))}
                  <span className="ml-2 text-sm font-bold text-slate-700">{product.rating}</span>
                </div>
                <span className="text-sm text-slate-400 font-medium">({product.reviews} Customer Reviews)</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-end gap-4 mb-2">
                <span className="text-4xl font-black text-slate-900">৳{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-400 line-through mb-1">৳{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <p className="text-emerald-500 text-sm font-bold">In Stock - Ready to Ship</p>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8">
              Experience premium quality with our {product.name}. Designed for those who appreciate the finer details, this product combines functionality with elegant design. Perfect for your daily needs and built to last.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center bg-white rounded-2xl p-2 border border-slate-100 shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-black">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 min-w-[200px] h-14 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-14 h-14 bg-white hover:bg-rose-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all shadow-sm">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-5 h-5 text-orange-500" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-x border-slate-100">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-5 h-5 text-orange-500" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-black text-slate-900 mb-8">
              You Might Also <span className="text-orange-500">Like</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
