'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { useCart } from '@/lib/cart-context';
import { ShieldCheck, Truck, CreditCard, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function CheckoutPage() {
  const { totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-orange-500/10 border border-slate-100 text-center max-w-md w-full"
        >
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h1 className="font-display text-3xl font-black text-slate-900 mb-4">Order Placed!</h1>
          <p className="text-slate-500 mb-8">
            Your order has been successfully placed and is being processed. You will receive a confirmation email shortly.
          </p>
          <Link href="/" className="block w-full py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/cart" className="p-2 hover:bg-white rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-slate-600" />
            </Link>
            <h1 className="font-display text-3xl font-black text-slate-900">
              Secure <span className="text-orange-500">Checkout</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Shipping Address</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                    <input type="text" placeholder="+880 1234 567890" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 outline-none" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Address</label>
                    <textarea placeholder="House, Road, Area, City" rows={3} className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 outline-none resize-none" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Payment Method</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['bKash', 'Nagad', 'Card'].map((method) => (
                    <button key={method} className="p-4 rounded-2xl border-2 border-slate-100 hover:border-orange-500 hover:bg-orange-50 transition-all font-bold text-slate-600 hover:text-orange-600">
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Final Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-900">৳{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Shipping</span>
                    <span className="font-bold text-slate-900">৳150</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Total to Pay</p>
                      <p className="text-3xl font-black text-slate-900">৳{(totalPrice + 150).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleOrder}
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 mb-6 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Place Order
                </button>
                
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <p className="text-[10px] text-slate-500 font-medium leading-tight">
                    Your data is protected by industry standard encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
