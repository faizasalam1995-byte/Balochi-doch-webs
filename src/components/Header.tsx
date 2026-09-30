import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PageType } from '../types';
import { Search, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    cart,
    setIsCartOpen,
    setIsSearchOpen,
    currency,
    toggleCurrency,
    user
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop' },
    { label: 'DOCH COLLECTION', page: 'doch_collection' },
    { label: 'OUR CRAFT', page: 'our_craft' },
    { label: 'ABOUT', page: 'about' },
    { label: 'JOURNAL', page: 'journal' },
    { label: 'CONTACT', page: 'contact' }
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#140407] text-[#FAF7F2] border-b border-[#3B0811] shadow-lg">
      {/* Top Announcement Bar */}
      <div className="bg-[#26050A] text-[#E5C158] text-[11px] sm:text-xs py-1.5 px-4 text-center tracking-[0.2em] font-medium border-b border-[#3B0811]/60 flex items-center justify-center gap-3">
        <span className="hidden sm:inline">FREE WORLDWIDE SHIPPING ON ORDERS OVER $150</span>
        <span className="sm:hidden">FREE SHIPPING OVER $150</span>
        <span className="text-[#D4AF37]/50">•</span>
        <span>HANDCRAFTED BY BALOCH ARTISANS</span>
      </div>

      {/* Main Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Left Zone: Brand Logo Wordmark with Balochi Emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Balochi Doch Home"
          >
            {/* Balochi Geometric Emblem */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#26050A] group-hover:border-[#E5C158] transition-colors shadow-sm">
              <div className="w-5 h-5 bg-[#D4AF37] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#26050A]" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] text-[#FAF7F2] group-hover:text-[#E5C158] transition-colors">
                BALOCHI DOCH
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#D4AF37]/80 uppercase -mt-0.5">
                Authentic Needlecraft
              </span>
            </div>
          </button>

          {/* Center Zone: 4-6 Clean Text Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(link => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-[12px] xl:text-[13px] tracking-[0.14em] font-medium transition-all cursor-pointer relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#E5C158] font-semibold'
                      : 'text-[#E0D7CD] hover:text-[#E5C158]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Zone: Primary Actions (Currency Switcher, Search, Account/Portal, Cart) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Currency Switcher */}
            <button
              onClick={toggleCurrency}
              className="text-[11px] font-semibold tracking-wider px-2.5 py-1 border border-[#D4AF37]/40 rounded hover:border-[#D4AF37] bg-[#26050A]/70 text-[#E5C158] transition-colors cursor-pointer"
              title="Toggle between USD and PKR currency"
            >
              {currency === 'USD' ? 'USD $' : 'PKR Rs.'}
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#E0D7CD] hover:text-[#E5C158] transition-colors cursor-pointer"
              aria-label="Search Collection"
              title="Search collection"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account / Order Tracking Portal */}
            <button
              onClick={() => handleNavClick('order_tracking')}
              className={`p-2 transition-colors cursor-pointer relative ${
                currentPage === 'order_tracking' || currentPage === 'customer_care'
                  ? 'text-[#E5C158]'
                  : 'text-[#E0D7CD] hover:text-[#E5C158]'
              }`}
              aria-label="Order Tracking & Collector Portal"
              title={user?.isLoggedIn ? `Account (${user.name})` : 'Order Tracking & Portal'}
            >
              <User className="w-5 h-5" />
              {user?.isLoggedIn && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D4AF37] rounded-full ring-2 ring-[#140407]" />
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#E0D7CD] hover:text-[#E5C158] transition-colors cursor-pointer relative"
              aria-label={`Shopping Bag with ${cartTotalItems} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartTotalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#D4AF37] text-[#140407] font-bold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-mono">
                  {cartTotalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E0D7CD] hover:text-[#E5C158] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1F060B] border-t border-[#3B0811] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`text-left text-sm tracking-[0.15em] font-medium py-2 border-b border-[#3B0811]/40 flex items-center justify-between cursor-pointer ${
                  currentPage === link.page ? 'text-[#E5C158] font-bold' : 'text-[#FAF7F2]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]/50" />
              </button>
            ))}
            
            {/* Direct Links to Customer Care & Tracking in Mobile */}
            <button
              onClick={() => handleNavClick('customer_care')}
              className="text-left text-sm tracking-[0.15em] font-medium py-2 text-[#FAF7F2] hover:text-[#E5C158] border-b border-[#3B0811]/40 flex items-center justify-between"
            >
              <span>CUSTOMER CARE & SIZING</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]/50" />
            </button>

            <button
              onClick={() => handleNavClick('order_tracking')}
              className="text-left text-sm tracking-[0.15em] font-medium py-2 text-[#E5C158] flex items-center justify-between"
            >
              <span>TRACK YOUR ORDER</span>
              <ArrowRight className="w-4 h-4 text-[#E5C158]" />
            </button>
          </div>

          <div className="pt-4 border-t border-[#3B0811] flex items-center justify-between">
            <span className="text-xs text-[#E0D7CD]">Preferred Currency</span>
            <button
              onClick={toggleCurrency}
              className="text-xs font-semibold px-3 py-1.5 bg-[#26050A] text-[#E5C158] border border-[#D4AF37]/50 rounded"
            >
              {currency === 'USD' ? 'USD ($)' : 'PKR (Rs.)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
