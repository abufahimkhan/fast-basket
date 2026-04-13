'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 md:mb-12">
      
      <Image
        src="https://picsum.photos/seed/shopping/1920/1080"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
        <div className="container mx-auto px-4 sm:px-8 md:px-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-sm sm:max-w-md md:max-w-lg"
          >

            {/* Badge */}
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-orange-500 text-white text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider sm:tracking-widest mb-3 sm:mb-4 md:mb-6">
              Exclusive Summer Collection 2024
            </span>

            {/* Title */}
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 sm:mb-4 md:mb-6">
              Elevate Your <br />
              <span className="text-orange-500">Lifestyle</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Discover a curated selection of premium electronics, fashion, and home essentials.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              
              <Link
                href="/shop"
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2 group"
              >
                Shop
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl border border-white/30 transition-all">
                New
              </button>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 md:top-20 right-[10%] hidden md:block w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 bg-orange-500/20 backdrop-blur-3xl rounded-full border border-white/10"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 md:bottom-20 right-[20%] hidden md:block w-28 md:w-40 lg:w-48 h-28 md:h-40 lg:h-48 bg-white/10 backdrop-blur-2xl rounded-full border border-white/10"
      />
    </section>
  );
}