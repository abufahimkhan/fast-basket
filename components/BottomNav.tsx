'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, ShoppingBag, Heart, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '@/lib/cart-context';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Grid, label: 'Categories', href: '/categories' },
  { icon: ShoppingBag, label: 'Cart', href: '/cart', badge: true },
  { icon: Heart, label: 'Wishlist', href: '/wishlist' },
  { icon: User, label: 'Account', href: '/login' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200 pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center justify-center flex-1 h-full gap-1 group"
            >
              <div className="relative">
                <Icon
                  className={`w-6 h-6 transition-colors duration-200 ${isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                />
                {item.badge && mounted && totalItems > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border border-white"
                  >
                    {totalItems}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium transition-colors duration-200 ${isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
              >
                {item.label}
              </span>
              {isActive && (
                <div
                  className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 bg-orange-500 rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
