'use client';

import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { User, Package, MapPin, CreditCard, Settings, LogOut, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const menuItems = [
  { icon: Package, label: 'My Orders', desc: 'Track, return or buy things again' },
  { icon: MapPin, label: 'Addresses', desc: 'Edit addresses for orders' },
  { icon: CreditCard, label: 'Payments', desc: 'Manage payment methods' },
  { icon: Settings, label: 'Settings', desc: 'Privacy, password and more' },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-black text-slate-900 mb-8">
            My <span className="text-orange-500">Account</span>
          </h1>

          {/* Profile Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-8 flex items-center gap-6">
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Abu Fahim</h2>
              <p className="text-slate-500">abufahimkhan1@gmail.com</p>
              <span className="inline-block mt-2 px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                Premium Member
              </span>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group text-left w-full"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{item.label}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
                </motion.button>
              );
            })}
          </div>

          <button className="w-full flex items-center justify-center gap-2 p-4 text-rose-500 font-bold hover:bg-rose-50 rounded-2xl transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
