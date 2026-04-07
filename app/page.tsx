import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import ProductGrid from '@/components/ProductGrid';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Hero />

        {/* Features Bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Truck, title: 'Global Shipping', desc: 'Fast & Reliable' },
            { icon: ShieldCheck, title: 'Secure Payment', desc: '100% Protected' },
            { icon: RotateCcw, title: 'Easy Returns', desc: '7 Days Policy' },
            { icon: Headphones, title: '24/7 Support', desc: 'Expert Assistance' },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                <feature.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{feature.title}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">{feature.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Categories */}
        <CategoryList />

        {/* Featured Products */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-black text-slate-900 tracking-tight">
              Trending <span className="text-orange-500">Products</span>
            </h2>
            <Link href="/shop" className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:gap-3 transition-all">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <ProductGrid />
        </section>

        {/* Newsletter / CTA */}
        <section className="relative bg-slate-900 rounded-[2rem] p-8 sm:p-16 overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 blur-[100px] -z-0" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Get the latest deals <br />
              <span className="text-orange-500">directly in your inbox</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Join 50,000+ shoppers and stay updated with exclusive offers, new arrivals, and global shopping tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
              <button className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20">
                Subscribe Now
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 pt-16 pb-32 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="font-display text-xl font-bold tracking-tight">
                  Moveon<span className="text-orange-500">Global</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Your trusted partner for global shopping. We bridge the gap between you and the world&apos;s largest marketplaces.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'How it Works', 'Shipping Rates', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Customer Care</h4>
              <ul className="space-y-4">
                {['My Account', 'Order Tracking', 'Wishlist', 'Terms & Conditions'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>House 12, Road 5, Block C, Banani, Dhaka</li>
                <li>+880 1234 567890</li>
                <li>support@moveonglobal.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              © 2024 Moveon Global. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="relative h-4 w-10 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image src="https://picsum.photos/seed/visa/40/20" alt="Visa" fill className="object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-4 w-10 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image src="https://picsum.photos/seed/mastercard/40/20" alt="Mastercard" fill className="object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-4 w-10 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image src="https://picsum.photos/seed/bkash/40/20" alt="bKash" fill className="object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}
