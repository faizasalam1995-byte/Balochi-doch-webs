import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Banknote, 
  MessageCircle, 
  ArrowRight, 
  Trash2, 
  CheckCircle2, 
  Sparkles,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    formatPrice,
    createOrder,
    setCurrentPage,
    setActiveOrder,
    currency,
    showToast
  } = useShop();

  const [customer, setCustomer] = useState({
    name: 'Faiza Salam',
    email: 'faizasalam1995@gmail.com',
    phone: '+92 300 8392104',
    address: 'House 42, Street 8, Sector F-7/2',
    city: 'Islamabad',
    stateProvince: 'Federal Capital',
    country: 'Pakistan',
    postalCode: '44000'
  });

  const [shippingMethod, setShippingMethod] = useState<'pakistan_cod' | 'intl_express'>('pakistan_cod');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'bank_transfer' | 'whatsapp'>('cod');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState<any | null>(null);

  const subtotalUSD = cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
  const subtotalPKR = cart.reduce((sum, item) => sum + item.product.pricePKR * item.quantity, 0);

  const discountUSD = Math.round(subtotalUSD * (discountPercent / 100));
  const discountPKR = Math.round(subtotalPKR * (discountPercent / 100));

  const isPakistan = customer.country === 'Pakistan';

  // Shipping calculation: Pakistan COD is Free. International is $15 USD (or Rs. 4,200 PKR), Free over $150 USD.
  const shippingCostUSD = isPakistan ? 0 : (subtotalUSD >= 150 ? 0 : 15);
  const shippingCostPKR = isPakistan ? 0 : (subtotalPKR >= 42000 ? 0 : 4200);

  const totalUSD = subtotalUSD - discountUSD + shippingCostUSD;
  const totalPKR = subtotalPKR - discountPKR + shippingCostPKR;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'HERITAGE10' || code === 'BALOCHI10') {
      setDiscountPercent(10);
      showToast('10% discount applied to your order.');
    } else {
      showToast('Invalid promo code. Try "HERITAGE10".');
    }
  };

  const handleCountryChange = (country: string) => {
    setCustomer(prev => ({ ...prev, country }));
    if (country === 'Pakistan') {
      setShippingMethod('pakistan_cod');
      setPaymentMethod('cod');
    } else {
      setShippingMethod('intl_express');
      setPaymentMethod('card');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.email || !customer.address || !customer.phone) {
      showToast('Please complete all required shipping fields.');
      return;
    }

    if (cart.length === 0) {
      showToast('Your shopping bag is empty.');
      return;
    }

    const order = createOrder({
      customer,
      items: cart,
      shippingMethod,
      shippingCostUSD,
      shippingCostPKR,
      subtotalUSD,
      subtotalPKR,
      discountUSD,
      discountPKR,
      totalUSD,
      totalPKR,
      currency,
      paymentMethod
    });

    setOrderConfirmed(order);
    showToast(`Order #${order.id} placed successfully!`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If order was confirmed, show Order Receipt Screen
  if (orderConfirmed) {
    return (
      <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#D4AF37]/50 rounded-lg p-8 sm:p-12 shadow-xl space-y-6">
            
            <div className="text-center space-y-3 border-b border-[#F0E8DC] pb-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF2E6] border border-[#D4AF37] flex items-center justify-center mx-auto text-[#2E6B34]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#8C1A30] uppercase">
                ORDER CONFIRMED
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#140407]">
                Thank You, {orderConfirmed.customer.name}!
              </h1>
              <p className="text-xs sm:text-sm text-[#6E5D4E]">
                Your commission has been scheduled with our master artisans in Quetta. An acknowledgment has been transmitted to <strong>{orderConfirmed.customer.email}</strong>.
              </p>
              <div className="inline-block bg-[#FAF2E6] border border-[#E5DACB] px-4 py-2 rounded text-xs font-mono font-bold text-[#520D19]">
                ORDER REFERENCE: #{orderConfirmed.id}
              </div>
            </div>

            {/* Tracking Summary Card */}
            <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#8A7969]">Courier & Tracking:</span>
                <span className="font-semibold text-[#140407]">{orderConfirmed.courier} ({orderConfirmed.trackingNumber})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8A7969]">Estimated Delivery:</span>
                <span className="font-semibold text-[#2E6B34]">{orderConfirmed.estimatedDelivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8A7969]">Payment Mode:</span>
                <span className="font-semibold text-[#520D19] uppercase">
                  {orderConfirmed.paymentMethod === 'cod' ? 'Cash on Delivery (Pakistan COD)' : orderConfirmed.paymentMethod}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8A7969]">Delivery Destination:</span>
                <span className="font-semibold text-[#140407]">
                  {orderConfirmed.customer.address}, {orderConfirmed.customer.city}, {orderConfirmed.customer.country}
                </span>
              </div>
            </div>

            {/* Items summary */}
            <div className="space-y-3">
              <h3 className="font-serif text-base font-semibold text-[#140407]">
                Handcrafted Items Ordered:
              </h3>
              {orderConfirmed.items.map((item: any) => (
                <div key={item.id} className="flex gap-4 p-3 border border-[#E8DFD3] rounded bg-white items-center">
                  <img src={item.product.image} alt={item.product.title} className="w-14 h-16 object-cover rounded bg-[#F8F5F0]" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-semibold text-[#140407] truncate">{item.product.title}</h4>
                    <p className="text-[11px] text-[#7A6B5C]">Size: {item.selectedSize} • Qty: {item.quantity}</p>
                    <p className="text-xs font-semibold text-[#520D19] mt-0.5">
                      {formatPrice(item.product.priceUSD * item.quantity, item.product.pricePKR * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F0E8DC]">
              <button
                onClick={() => {
                  setActiveOrder(orderConfirmed);
                  setCurrentPage('order_tracking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-[#3B0811] text-[#FAF7F2] py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#520D19] transition-colors cursor-pointer text-center"
              >
                Track Live Order Status
              </button>

              <button
                onClick={() => {
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-white border border-[#520D19] text-[#520D19] py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors cursor-pointer text-center"
              >
                Continue Exploring Collection
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // If cart is empty
  if (cart.length === 0) {
    return (
      <div className="bg-[#FAF7F2] text-[#140407] min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#F2EAE0] flex items-center justify-center text-[#8A7969]">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-[#3B0811]">
            Your Shopping Bag Is Empty
          </h2>
          <p className="text-xs text-[#6E5D4E]">
            Select an authentic handcrafted Balochi Doch piece before proceeding to checkout.
          </p>
          <button
            onClick={() => setCurrentPage('shop')}
            className="bg-[#3B0811] text-[#FAF7F2] px-6 py-3 rounded text-xs font-semibold tracking-wider uppercase hover:bg-[#520D19] transition-colors cursor-pointer"
          >
            Explore The Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#8C1A30] uppercase">
            SECURE CHECKOUT
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#3B0811] font-semibold">
            Order Your Balochi Doch Heirloom
          </h1>
          <p className="text-xs sm:text-sm text-[#6E5D4E]">
            Pakistan Cash on Delivery (Free COD) & International Air Express ($15 USD, Free over $150).
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Customer & Shipping & Payment Details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Customer Information */}
            <div className="bg-white border border-[#E8DFD3] rounded p-6 shadow-xs space-y-4">
              <h2 className="font-cinzel text-xs font-bold tracking-[0.16em] uppercase text-[#3B0811] border-b border-[#F0E8DC] pb-3">
                01. Customer & Delivery Destination
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                    Country / Region *
                  </label>
                  <select
                    value={customer.country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  >
                    <option value="Pakistan">Pakistan (Domestic COD Free)</option>
                    <option value="United Arab Emirates">United Arab Emirates (DHL Express $15)</option>
                    <option value="United Kingdom">United Kingdom (DHL Express $15)</option>
                    <option value="United States">United States (DHL Express $15)</option>
                    <option value="Canada">Canada (DHL Express $15)</option>
                    <option value="Saudi Arabia">Saudi Arabia (DHL Express $15)</option>
                    <option value="Oman">Oman (DHL Express $15)</option>
                    <option value="Australia">Australia (DHL Express $15)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                    Full Recipient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                    Email Address (for Receipt & Tracking) *
                  </label>
                  <input
                    type="email"
                    required
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                    Phone / WhatsApp (for Delivery Courier) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                  Street Address & House / Apartment *
                </label>
                <input
                  type="text"
                  required
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="e.g. House 42, Street 8, Sector F-7/2"
                  className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                    Province / State *
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.stateProvince}
                    onChange={(e) => setCustomer({ ...customer, stateProvince: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={customer.postalCode}
                    onChange={(e) => setCustomer({ ...customer, postalCode: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Shipping Method (Pakistan COD vs International Shipping $15 as requested in prompt) */}
            <div className="bg-white border border-[#E8DFD3] rounded p-6 shadow-xs space-y-4">
              <h2 className="font-cinzel text-xs font-bold tracking-[0.16em] uppercase text-[#3B0811] border-b border-[#F0E8DC] pb-3">
                02. Shipping Method
              </h2>

              {isPakistan ? (
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3.5 border rounded cursor-pointer transition-colors bg-[#FAF2E6] border-[#D4AF37]">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === 'pakistan_cod'}
                        onChange={() => setShippingMethod('pakistan_cod')}
                        className="accent-[#520D19]"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#140407] block">
                          Pakistan Domestic Delivery & Cash on Delivery (COD)
                        </span>
                        <span className="text-[11px] text-[#6E5D4E]">
                          Dispatched via TCS / Leopard Courier (3-5 business days across Pakistan)
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-xs text-[#2E6B34]">FREE</span>
                  </label>
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3.5 border rounded cursor-pointer transition-colors bg-[#FAF2E6] border-[#D4AF37]">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === 'intl_express'}
                        onChange={() => setShippingMethod('intl_express')}
                        className="accent-[#520D19]"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#140407] block">
                          DHL Worldwide Air Express (5-7 Days)
                        </span>
                        <span className="text-[11px] text-[#6E5D4E]">
                          Global tracked door-to-door courier dispatch
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-xs text-[#520D19]">
                      {subtotalUSD >= 150 ? 'FREE (Over $150)' : '$15 USD'}
                    </span>
                  </label>
                </div>
              )}
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white border border-[#E8DFD3] rounded p-6 shadow-xs space-y-4">
              <h2 className="font-cinzel text-xs font-bold tracking-[0.16em] uppercase text-[#3B0811] border-b border-[#F0E8DC] pb-3">
                03. Payment Mode
              </h2>

              <div className="space-y-2.5">
                {isPakistan && (
                  <label className={`flex items-start gap-3 p-3.5 border rounded cursor-pointer transition-colors ${
                    paymentMethod === 'cod' ? 'bg-[#FAF2E6] border-[#520D19]' : 'border-[#E8DFD3]'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-[#520D19] mt-0.5"
                    />
                    <div>
                      <span className="font-bold text-xs text-[#140407] flex items-center gap-2">
                        <Banknote className="w-4 h-4 text-[#520D19]" />
                        <span>Cash on Delivery (Pakistan COD)</span>
                      </span>
                      <span className="text-[11px] text-[#6E5D4E] mt-0.5 block">
                        Pay cash directly to the TCS delivery rider when your handcrafted parcel arrives at your address.
                      </span>
                    </div>
                  </label>
                )}

                <label className={`flex items-start gap-3 p-3.5 border rounded cursor-pointer transition-colors ${
                  paymentMethod === 'card' ? 'bg-[#FAF2E6] border-[#520D19]' : 'border-[#E8DFD3]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="accent-[#520D19] mt-0.5"
                  />
                  <div>
                    <span className="font-bold text-xs text-[#140407] flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#520D19]" />
                      <span>Credit or Debit Card (Visa, MasterCard, Amex)</span>
                    </span>
                    <span className="text-[11px] text-[#6E5D4E] mt-0.5 block">
                      Encrypted 256-bit international transaction processing.
                    </span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-3.5 border rounded cursor-pointer transition-colors ${
                  paymentMethod === 'whatsapp' ? 'bg-[#FAF2E6] border-[#520D19]' : 'border-[#E8DFD3]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'whatsapp'}
                    onChange={() => setPaymentMethod('whatsapp')}
                    className="accent-[#520D19] mt-0.5"
                  />
                  <div>
                    <span className="font-bold text-xs text-[#140407] flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#128C7E]" />
                      <span>Order on WhatsApp (Assisted Checkout)</span>
                    </span>
                    <span className="text-[11px] text-[#6E5D4E] mt-0.5 block">
                      Finalize payment via Bank Transfer / Raast with our Quetta stylist.
                    </span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E8DFD3] rounded p-6 shadow-xs space-y-5 sticky top-28">
              <h2 className="font-cinzel text-xs font-bold tracking-[0.16em] uppercase text-[#3B0811] border-b border-[#F0E8DC] pb-3">
                Order Review ({cart.reduce((t, i) => t + i.quantity, 0)})
              </h2>

              {/* Items List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3 p-2.5 bg-[#FAF7F2] border border-[#E8DFD3] rounded">
                    <img src={item.product.image} alt={item.product.title} className="w-16 h-18 object-cover rounded bg-[#F8F5F0]" />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-xs font-semibold text-[#140407] truncate">
                          {item.product.title}
                        </h4>
                        <p className="text-[10px] text-[#8A7969]">
                          {item.selectedSize} • {item.tailoringOption === 'custom_tailored' ? 'Custom Tailored' : 'Unstitched Fabric'}
                        </p>
                        <p className="text-xs font-semibold text-[#520D19] mt-1 tabular-nums">
                          {formatPrice(item.product.priceUSD * item.quantity, item.product.pricePKR * item.quantity)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <div className="flex items-center border border-[#D5C9B8] rounded bg-white">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-0.5 text-xs text-[#520D19]"
                          >
                            -
                          </button>
                          <span className="px-1.5 font-mono text-[11px]">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-0.5 text-xs text-[#520D19]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#9E8E7D] hover:text-[#A82338]"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo code */}
              <div className="pt-2 border-t border-[#F0E8DC]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. HERITAGE10)"
                    className="flex-1 bg-[#FAF7F2] border border-[#D5C9B8] text-xs px-3 py-1.5 rounded uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="bg-[#26050A] text-[#FAF7F2] text-xs px-3 py-1.5 rounded font-medium"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Totals Breakdown */}
              <div className="space-y-2 text-xs text-[#5A4F44] border-t border-[#F0E8DC] pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums font-semibold text-[#140407]">
                    {formatPrice(subtotalUSD, subtotalPKR)}
                  </span>
                </div>

                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#2E6B34]">
                    <span>Privilege Discount ({discountPercent}%)</span>
                    <span className="font-mono tabular-nums">
                      -{formatPrice(discountUSD, discountPKR)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>
                    Shipping ({isPakistan ? 'Pakistan COD' : 'DHL International $15'})
                  </span>
                  <span className="font-mono tabular-nums">
                    {shippingCostUSD === 0 ? 'FREE' : formatPrice(shippingCostUSD, shippingCostPKR)}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#140407] border-t border-[#F0E8DC] pt-3">
                  <span>Grand Total</span>
                  <span className="font-mono tabular-nums text-[#520D19]">
                    {formatPrice(totalUSD, totalPKR)}
                  </span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                className="w-full bg-gold-gradient text-[#140407] py-3.5 rounded font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-md"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>CONFIRM ORDER ({paymentMethod === 'cod' ? 'CASH ON DELIVERY' : 'SECURE CHECKOUT'})</span>
              </button>

              <p className="text-[10px] text-[#8A7969] text-center">
                By confirming, you agree to our 14-day heirloom exchange policy and ethical artisan trade manifesto.
              </p>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
