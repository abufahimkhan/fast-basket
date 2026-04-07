'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              Moveon<span className="text-orange-500">Global</span>
            </span>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-500">Sign in to continue your shopping journey</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <form className="space-y-6 mb-8">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-xs font-bold text-orange-500 hover:underline">Forgot Password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
              </div>
            </div>

            <button className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group">
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-14 flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all font-bold text-slate-700">
              <Chrome className="w-5 h-5" />
              Google
            </button>
            <button className="h-14 flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all font-bold text-slate-700">
              <Github className="w-5 h-5" />
              Github
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-slate-500 font-medium">
          Don&apos;t have an account? <Link href="/signup" className="text-orange-500 font-black hover:underline">Create Account</Link>
        </p>
      </motion.div>
    </div>
  );
}
