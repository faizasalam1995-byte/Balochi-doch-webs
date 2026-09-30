import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    formatPrice,
    setCurrentPage,
    currency,
    openProductDetail
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isCartOpen) return null;

  const subtotalUSD = cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
  const subtotalPKR = cart.reduce((sum, item) => sum + item.product.pricePKR * item.quantity, 0);

  const discountUSD = Math.round(subtotalUSD * (discountPercent / 100));
  const discountPKR = Math.round(subtotalPKR * (discountPercent / 100));

  const shippingUSD = subtotalUSD >= 150 || subtotalUSD === 0 ? 0 : 15;
  const shippingPKR = subtotalPKR >= 42000 || subtotalPKR === 0 ? 0 : 4200;

  const totalUSD = subtotalUSD - discountUSD + shippingUSD;
  const totalPKR = subtotalPKR - discountPKR + shippingPKR;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();

    if (code === 'HERITAGE10' || code === 'BALOCHI10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Heritage discount applied!');
    } else if (code === 'ARTISAN15') {
      setDiscountPercent(15);
      setPromoSuccess('15% Artisan appreciation discount applied!');
    } else {
      setPromoError('Invalid promo code. Try "HERITAGE10".');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('cart_checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppCheckout = () => {
    const itemsList = cart.map(item => `• ${item.product.title} (${item.selectedSize}) x${item.quantity} - $${item.product.priceUSD * item.quantity} USD`).join('\n');
    const msg = `Salam! I would like to place an order for the following Balochi Doch creations:\n\n${itemsList}\n\n*Total:* ${currency === 'USD' ? `$${totalUSD} USD` : `Rs. ${totalPKR.toLocaleString()} PKR`}\n\nPlease confirm availability and payment details.`;
    window.open(`https://wa.me/923008392104?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#140407] shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-5 bg-[#26050A] text-[#FAF7F2] border-b border-[#3B0811] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-cinzel text-base font-bold tracking-[0.14em] text-[#FAF7F2]">
                YOUR SELECTION ({cart.reduce((t, i) => t + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#E0D7CD] hover:text-[#E5C158] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress bar */}
          <div className="bg-[#FAF2E6] px-5 py-2.5 border-b border-[#E8DFD3] text-xs text-[#520D19]">
            {subtotalUSD >= 150 ? (
              <div className="flex items-center gap-1.5 font-medium text-[#2E6B34]">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Congratulations! You have unlocked <strong>Free Worldwide Shipping</strong>.</span>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span>Add <strong>${150 - subtotalUSD} USD</strong> more for Free Worldwide Shipping</span>
                  <span className="font-mono">{Math.round((subtotalUSD / 150) * 100)}%</span>
                </div>
                <div className="w-full bg-[#E5D7C5] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotalUSD / 150) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F2EAE0] flex items-center justify-center text-[#8A7969]">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <p className="font-serif text-lg text-[#3B0811]">
                  Your shopping bag is empty.
                </p>
                <p className="text-xs text-[#7A6B5C] max-w-xs mx-auto">
                  Explore our handcrafted Balochi Doch dresses meticulously embroidered by women artisans.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCurrentPage('shop');
                  }}
                  className="bg-[#3B0811] text-[#FAF7F2] px-6 py-2.5 rounded text-xs font-semibold tracking-wider hover:bg-[#520D19] transition-colors cursor-pointer uppercase"
                >
                  Discover Collections
                </button>
              </div>
            ) : (
              cart.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-white border border-[#E8DFD3] rounded shadow-xs relative"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-20 h-24 object-cover rounded bg-[#F8F5F0] cursor-pointer"
                    onClick={() => {
                      setIsCartOpen(false);
                      openProductDetail(item.product);
                    }}
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4
                        onClick={() => {
                          setIsCartOpen(false);
                          openProductDetail(item.product);
                        }}
                        className="font-serif text-sm font-semibold text-[#140407] hover:text-[#520D19] cursor-pointer truncate"
                      >
                        {item.product.title}
                      </h4>
                      <p className="text-[11px] text-[#7A6B5C] mt-0.5">
                        {item.selectedSize} • {item.tailoringOption === 'custom_tailored' ? 'Tailored' : 'Unstitched'}
                      </p>
                      <p className="text-xs font-semibold text-[#520D19] mt-1 tabular-nums">
                        {formatPrice(item.product.priceUSD * item.quantity, item.product.pricePKR * item.quantity)}
                      </p>
                    </div>

                    {/* Quantity Stepper & Remove */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#D5C9B8] rounded bg-[#FAF7F2]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2.5 py-0.5 text-xs text-[#520D19] hover:bg-[#EAE1D2] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2.5 py-0.5 text-xs text-[#520D19] hover:bg-[#EAE1D2] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#9E8E7D] hover:text-[#A82338] transition-colors p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Totals and Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E8DFD3] space-y-4">
              
              {/* Promo code accordion / box */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (e.g. HERITAGE10)"
                  className="flex-1 bg-[#FAF7F2] border border-[#D5C9B8] text-xs px-3 py-1.5 rounded focus:outline-none focus:border-[#520D19] uppercase placeholder:normal-case"
                />
                <button
                  type="submit"
                  className="bg-[#26050A] text-[#FAF7F2] text-xs px-3 py-1.5 rounded font-medium hover:bg-[#3B0811] transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {promoSuccess && <p className="text-[11px] text-[#2E6B34]">{promoSuccess}</p>}
              {promoError && <p className="text-[11px] text-[#A82338]">{promoError}</p>}

              {/* Pricing breakdown */}
              <div className="space-y-1.5 text-xs text-[#5A4F44] border-t border-[#E8DFD3] pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums font-medium text-[#140407]">
                    {formatPrice(subtotalUSD, subtotalPKR)}
                  </span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#2E6B34]">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="font-mono tabular-nums">
                      -{formatPrice(discountUSD, discountPKR)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Worldwide Shipping</span>
                  <span className="font-mono tabular-nums">
                    {shippingUSD === 0 ? 'FREE' : formatPrice(shippingUSD, shippingPKR)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#140407] border-t border-[#E8DFD3] pt-2">
                  <span>Estimated Total</span>
                  <span className="font-mono tabular-nums text-[#520D19]">
                    {formatPrice(totalUSD, totalPKR)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-gold-gradient text-[#140407] py-3 px-4 rounded font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-sm"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#128C7E] text-white py-2.5 px-4 rounded font-medium text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-[#075E54] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8A7969] text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Pakistan Cash on Delivery (COD) & DHL International Air Express</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
