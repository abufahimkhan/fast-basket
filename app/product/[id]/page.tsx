"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Product } from "@/types/product";
import { getProductById, getProducts } from "@/lib/api";
import { useCart } from "@/lib/cart-context";
import { Star, ShoppingCart, Heart, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import ProductCard from "@/components/ProductCard";

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
          setRelatedProducts(
            related.filter((p) => p.id !== data.id).slice(0, 4),
          );
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return null;

  return (
    <div className="min-h-screen pb-20 sm:pb-24 md:pb-0 bg-slate-50">
      <Header />

      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-bold text-slate-400 uppercase mb-4 sm:mb-6 md:mb-8">
          <button
            onClick={() => router.push("/")}
            className="hover:text-orange-500"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="truncate max-w-[120px] sm:max-w-[200px]">
            {product.name}
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-14 md:mb-16">
          {/* Image */}
          <motion.div className="space-y-3 sm:space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl sm:rounded-3xl overflow-hidden border shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div className="flex flex-col">
            {/* Title */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <span className="inline-block px-2 sm:px-3 py-1 bg-orange-100 text-orange-600 text-[9px] sm:text-[10px] font-black rounded-full mb-2 sm:mb-4">
                {product.category}
              </span>

              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-slate-500">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                ৳{product.price.toLocaleString()}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8">
              Premium quality {product.name} designed for modern lifestyle.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Quantity */}
              <div className="flex items-center justify-center sm:justify-start bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 border shadow-sm w-full sm:w-auto">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md hover:bg-slate-100 transition"
                >
                  -
                </button>

                <span className="w-8 sm:w-10 text-center font-bold text-sm sm:text-base">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md hover:bg-slate-100 transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product)}
                className="w-full sm:flex-1 h-11 sm:h-12 md:h-14 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                Add to Cart
              </button>

              {/* Wishlist */}
              <button className="w-full sm:w-11 md:w-12 h-11 sm:h-12 md:h-14 bg-white hover:bg-rose-50 border rounded-lg sm:rounded-xl flex items-center justify-center transition">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center bg-white p-4 sm:p-6 rounded-2xl shadow-sm">
              <p className="text-[9px] sm:text-xs font-bold">Fast Delivery</p>
              <p className="text-[9px] sm:text-xs font-bold">Secure Payment</p>
              <p className="text-[9px] sm:text-xs font-bold">Easy Returns</p>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section className="mt-10 sm:mt-14 md:mt-20">
            <h2 className="text-lg sm:text-2xl font-black mb-4 sm:mb-8">
              You Might Also <span className="text-orange-500">Like</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {relatedProducts.map((p) => (
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
