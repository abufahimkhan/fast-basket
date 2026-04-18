import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-10 sm:pt-16 pb-6">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">
                  M
                </span>
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
              items: [
                "About Us",
                "How it Works",
                "Shipping Rates",
                "Contact Us",
              ],
            },
            {
              title: "Customer Care",
              items: ["My Account", "Order Tracking", "Wishlist", "Terms"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-slate-500 hover:text-orange-500"
                    >
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
            {["visa", "mastercard", "bkash"].map((seed) => (
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
  );
};

export default Footer;
