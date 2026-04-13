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
    <div className="min-h-screen pb-28 md:pb-0">
      <Header />

      <main className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">

        {/* Hero */}
        <Hero />

        {/* Features Bar */}
        <section className="mb-10 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Truck, title: 'Global Shipping', desc: 'Fast & Reliable' },
              { icon: ShieldCheck, title: 'Secure Payment', desc: '100% Protected' },
              { icon: RotateCcw, title: 'Easy Returns', desc: '7 Days Policy' },
              { icon: Headphones, title: '24/7 Support', desc: 'Expert Assistance' },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {feature.title}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <CategoryList />

        {/* Featured Products */}
        <section className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-black text-slate-900">
              Trending <span className="text-orange-500">Products</span>
            </h2>

            <Link
              href="/shop"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold text-orange-500 hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>

          <ProductGrid />
        </section>

        {/* Newsletter / CTA */}
        <section className="relative bg-slate-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-16 overflow-hidden mb-10 sm:mb-12 lg:mb-16">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 blur-[80px] sm:blur-[120px]" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Get the latest deals <br />
              <span className="text-orange-500">directly in your inbox</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
              Join 50,000+ shoppers and stay updated with exclusive offers, new arrivals, and global shopping tips.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <button className="h-12 sm:h-14 px-6 sm:px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-10 sm:pt-16 pb-28 md:pb-16">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">M</span>
                </div>
                <span className="font-bold text-base sm:text-xl">
                  Moveon<span className="text-orange-500">Global</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Your trusted partner for global shopping.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Quick Links",
                items: ["About Us", "How it Works", "Shipping Rates", "Contact Us"]
              },
              {
                title: "Customer Care",
                items: ["My Account", "Order Tracking", "Wishlist", "Terms"]
              }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  {col.items.map(item => (
                    <li key={item}>
                      <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-orange-500">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-500">
                <li>Dhaka, Bangladesh</li>
                <li>+880 1234 567890</li>
                <li>support@moveonglobal.com</li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="pt-6 sm:pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-[10px] sm:text-xs text-slate-400 text-center md:text-left">
              © 2024 Moveon Global
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              {["visa", "mastercard", "bkash"].map(seed => (
                <div
                  key={seed}
                  className="relative h-4 w-8 sm:w-10 opacity-50 grayscale hover:grayscale-0"
                >
                  <Image
                    src={`https://picsum.photos/seed/${seed}/40/20`}
                    alt={seed}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}