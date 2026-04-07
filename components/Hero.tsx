'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden mb-12">
      <Image
        src="https://picsum.photos/seed/shopping/1920/1080"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center">
        <div className="container mx-auto px-8 sm:px-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-lg"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-6">
              Exclusive Summer Collection 2024
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Elevate Your <br />
              <span className="text-orange-500">Lifestyle</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Discover a curated selection of premium electronics, fashion, and home essentials. Quality products delivered with care to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2 group">
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/30 transition-all">
                New Arrivals
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Elements for visual flair */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] hidden lg:block w-32 h-32 bg-orange-500/20 backdrop-blur-3xl rounded-full border border-white/10"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[25%] hidden lg:block w-48 h-48 bg-white/10 backdrop-blur-2xl rounded-full border border-white/10"
      />
    </section>
  );
}
