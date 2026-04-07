'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-4 border-slate-100 border-t-orange-500 rounded-full"
        />
        
        {/* Inner Pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30"
        >
          <span className="text-white font-black text-xl">M</span>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="font-display text-xl font-black text-slate-900 tracking-tight">
          Moveon<span className="text-orange-500">Global</span>
        </h2>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Loading Experience...</p>
      </motion.div>
    </div>
  );
}
