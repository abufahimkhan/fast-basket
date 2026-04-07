'use client';

import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { useCart } from '@/lib/cart-context';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 hover:bg-white rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-display text-3xl font-black text-slate-900">
            Your <span className="text-orange-500">Cart</span>
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-10 h-10 text-slate-300" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
            <p className="text-slate-500 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
            <Link href="/" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm group"
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-slate-50 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-bold text-slate-900 mb-2 truncate">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
                        <span className="text-lg font-bold text-slate-900">
                          ৳{item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-slate-400 line-through">
                            ৳{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-center sm:justify-start gap-4">
                        <div className="flex items-center bg-slate-100 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-md transition-colors text-slate-600"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-md transition-colors text-slate-600"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="hidden sm:block text-right">
                      <p className="text-sm text-slate-400 mb-1 uppercase tracking-wider font-bold">Subtotal</p>
                      <p className="text-xl font-black text-slate-900">
                        ৳{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-bold text-slate-900">৳{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Shipping Fee</span>
                    <span className="text-emerald-500 font-bold uppercase text-xs">Calculated at checkout</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Total Amount</p>
                      <p className="text-3xl font-black text-slate-900">৳{totalPrice.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <Link href="/checkout" className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 mb-4 text-center">
                  Proceed to Checkout
                </Link>
                
                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
                  Secure Checkout Powered by Moveon
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
