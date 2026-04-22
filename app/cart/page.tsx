"use client";

import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useCart } from "@/lib/cart-context";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  return (
    <div className="min-h-screen pb-20 sm:pb-24 md:pb-0 bg-slate-50">
      <Header />

      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Link
            href="/"
            className="p-2 hover:bg-white rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
          </Link>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            Your <span className="text-orange-500">Cart</span>
          </h1>
        </div>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm text-center px-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300" />
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Your cart is empty
            </h2>

            <p className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8 max-w-md">
              Looks like you haven&apos;t added anything yet.
            </p>

            <Link
              href="/"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-sm sm:text-base font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm"
                  >
                    {/* Image */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg sm:rounded-xl overflow-hidden bg-slate-50 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <p className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">
                        {item.category}
                      </p>

                      <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2 truncate">
                        {item.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="text-base sm:text-lg font-bold text-slate-900">
                          ৳{item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs sm:text-sm text-slate-400 line-through">
                            ৳{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                        <div className="flex items-center bg-slate-100 rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 hover:bg-white rounded-md"
                          >
                            <Minus className="w-4 h-4" />
                          </button>

                          <span className="w-6 sm:w-8 text-center font-bold text-sm">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-white rounded-md"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg"
                        >
                          <Trash2 className="w-4 sm:w-5 h-4 sm:h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="sm:text-right text-center sm:block">
                      <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold">
                        Subtotal
                      </p>
                      <p className="text-lg sm:text-xl font-black text-slate-900">
                        ৳{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm p-5 sm:p-6 md:p-8 sticky top-20 md:top-24">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex justify-between text-sm sm:text-base text-slate-500">
                    <span>Subtotal ({totalItems})</span>
                    <span className="font-bold text-slate-900">
                      ৳{totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Shipping</span>
                    <span className="text-emerald-500 font-bold text-xs">
                      Calculated
                    </span>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t flex justify-between">
                    <p className="text-sm text-slate-400 font-bold">Total</p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
                      ৳{totalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-bold rounded-xl shadow-lg text-center"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
