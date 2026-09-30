import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PageType } from '../types';
import { Mail, CheckCircle2, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setIsSubscribed(true);
    showToast('Welcome! Your 10% privilege code is: HERITAGE10');
    setNewsletterEmail('');
  };

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140407] text-[#E0D7CD] border-t border-[#3B0811] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#3B0811]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#26050A]">
                <div className="w-4 h-4 bg-[#D4AF37]" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.16em] text-[#FAF7F2]">
                BALOCHI DOCH
              </span>
            </div>
            
            <p className="text-sm text-[#C4B7A6] leading-relaxed max-w-sm">
              Stitched with heritage. Inspired by Baloch traditions, crafted for modern elegance. Meticulously hand-embroidered by generational women artisans across Balochistan.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#A89886]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Ateliers in Quetta & Karachi • Global Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>WhatsApp Atelier Stylist: +92 300 8392104</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Authentic Hand-Stitched Guarantee</span>
              </div>
            </div>
          </div>

          {/* Column 2: SHOP */}
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#FAF7F2] uppercase mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B7A6]">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  All Products
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('doch_collection')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Unstitched 3-Piece
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('doch_collection')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Kurta & Tunics
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('doch_collection')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Heavy Embroidery & Bridal
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Danko & Mehrgarh Doch
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CUSTOMER CARE */}
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#FAF7F2] uppercase mb-4">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B7A6]">
              <li>
                <button onClick={() => navigateTo('customer_care')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('customer_care')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Traditional Sizing Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('customer_care')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Care & Fabric FAQs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('order_tracking')} className="text-[#E5C158] hover:underline font-medium cursor-pointer">
                  Track Your Order
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#E5C158] transition-colors cursor-pointer">
                  Contact & WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: NEWSLETTER */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#FAF7F2] uppercase mb-2">
              NEWSLETTER
            </h4>
            <p className="text-xs text-[#C4B7A6]">
              Join for updates & 10% off your first order
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#26050A] border border-[#D4AF37]/40 rounded text-xs text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Code <strong>HERITAGE10</strong> applied. Welcome to our collector circle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#26050A] border border-[#3B0811] text-xs text-[#FAF7F2] placeholder-[#8A7969] px-3 py-2 rounded focus:outline-none focus:border-[#D4AF37] pr-8"
                  />
                  <Mail className="w-3.5 h-3.5 text-[#8A7969] absolute right-2.5 top-2.5" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-[#140407] font-semibold text-xs tracking-wider uppercase py-2 px-4 rounded hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[10px] text-[#8A7969]">
              Ethical trade pledge. We respect your privacy and never spam.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A7969] gap-4 text-center md:text-left">
          <div>
            © 2026 BALOCHI DOCH. All rights reserved. Crafted with care in Balochistan.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('customer_care')} className="hover:text-[#E0D7CD] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('customer_care')} className="hover:text-[#E0D7CD] transition-colors cursor-pointer">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('our_craft')} className="hover:text-[#E0D7CD] transition-colors cursor-pointer">
              Heritage Archive
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
