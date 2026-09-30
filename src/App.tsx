/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { DochCollectionPage } from './pages/DochCollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { OurCraftPage } from './pages/OurCraftPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CustomerCarePage } from './pages/CustomerCarePage';
import { CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentPage, toastMessage } = useShop();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'doch_collection':
        return <DochCollectionPage />;
      case 'product_detail':
        return <ProductDetailPage />;
      case 'our_craft':
        return <OurCraftPage />;
      case 'about':
        return <AboutPage />;
      case 'journal':
        return <JournalPage />;
      case 'contact':
        return <ContactPage />;
      case 'cart_checkout':
        return <CheckoutPage />;
      case 'customer_care':
      case 'order_tracking':
        return <CustomerCarePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#140407]">
      {/* Top Header */}
      <Header />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Global Search Modal */}
      <SearchModal />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#26050A] text-[#FAF7F2] border border-[#D4AF37] px-4 py-3 rounded shadow-2xl flex items-center gap-3 text-xs animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
