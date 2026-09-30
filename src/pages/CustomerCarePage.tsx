import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Truck, 
  RotateCcw, 
  HelpCircle, 
  Ruler, 
  Lock, 
  Search, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Package, 
  UserCheck, 
  ChevronDown, 
  ChevronUp,
  LogIn,
  ExternalLink,
  MapPin
} from 'lucide-react';

export const CustomerCarePage: React.FC = () => {
  const {
    activeOrder,
    setActiveOrder,
    findOrderById,
    user,
    loginUser,
    logoutUser,
    orders,
    showToast,
    formatPrice
  } = useShop();

  const [activeTab, setActiveTab] = useState<'shipping' | 'sizing' | 'faqs' | 'tracking'>('tracking');
  const [trackingInput, setTrackingInput] = useState('BD-1042');
  const [searchedOrder, setSearchedOrder] = useState<any | null>(activeOrder || orders[0]);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginName, setLoginName] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput.trim()) {
      showToast('Please enter an Order ID or Tracking Number.');
      return;
    }
    const found = findOrderById(trackingInput);
    if (found) {
      setSearchedOrder(found);
      setActiveOrder(found);
      showToast(`Found Order #${found.id}!`);
    } else {
      showToast(`No order found with reference "${trackingInput}". Try "BD-1042".`);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginEmail.includes('@')) {
      showToast('Please provide a valid email.');
      return;
    }
    loginUser(loginEmail, loginName || 'Collector');
  };

  const faqs = [
    {
      q: 'How do I know the Balochi Doch embroidery is 100% authentic and hand-stitched?',
      a: 'Every single garment comes with our numbered Certificate of Artisan Provenance, identifying the Baloch artisan guild (Mastung, Kalat, Quetta, or Makran) and the specific thread-count technique used. You can inspect the back of the fabric to see the organic variations and knotted thread tails characteristic only of human hands — impossible to replicate by computerized multi-head machines.'
    },
    {
      q: 'Will the micro glass mirrors (Sheesha) fall off during wear or cleaning?',
      a: 'No. Unlike cheap factory garments that stick mirrors with toxic adhesives, authentic Balochi Sheesha Doch anchors each glass disc using a reinforced buttonhole cage stitch woven from dual-ply gold thread or silk. Even under festive dancing and dry cleaning, our mirrors remain locked in place for decades.'
    },
    {
      q: 'How does Cash on Delivery (COD) work for orders in Pakistan?',
      a: 'We offer Free Cash on Delivery across Pakistan. Once you place your order online, our atelier team will call or WhatsApp you to confirm your dress specifications. When the TCS courier arrives at your doorstep in 3 to 5 business days, you inspect the outer parcel and hand the exact cash amount to the courier rider.'
    },
    {
      q: 'Do you ship internationally and who handles customs?',
      a: 'Yes, we ship to over 50 countries worldwide (including USA, UK, UAE, Canada, Saudi Arabia, Europe, Australia) via DHL Express Air. International shipping is a flat $15 USD, and completely FREE on orders over $150 USD. Orders are packaged in archival boxes with customs textile declarations.'
    },
    {
      q: 'Can I request bespoke custom sizing or bridal commissions?',
      a: 'Absolutely. We specialize in bespoke bridal Doch commissions (taking 60 to 90 days of artisan embroidery) as well as custom-tailored sizes from XS to 4XL. You can connect with our master stylist directly via WhatsApp (+92 300 8392104) or select "Custom Tailored" at checkout.'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#26050A] px-3.5 py-1 text-[11px] tracking-[0.25em] font-semibold text-[#E5C158] uppercase">
            <span>CLIENT SERVICES & PORTAL</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#3B0811] font-semibold tracking-wide">
            Customer Care & Order Tracking
          </h1>
          <p className="text-sm sm:text-base text-[#6E5D4E] leading-relaxed">
            Track your handcrafted commission in real-time, review our sizing metrics, explore heirloom care, or access your secure collector account.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E8DFD3] gap-2 sm:gap-6 justify-center overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('tracking')}
            className={`px-4 py-3 text-xs sm:text-sm font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'tracking' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
            }`}
          >
            <Lock className="w-4 h-4 text-[#D4AF37]" />
            <span>Secure Tracking & Portal</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`px-4 py-3 text-xs sm:text-sm font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'shipping' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
            }`}
          >
            <Truck className="w-4 h-4 text-[#D4AF37]" />
            <span>Shipping & Returns</span>
          </button>

          <button
            onClick={() => setActiveTab('sizing')}
            className={`px-4 py-3 text-xs sm:text-sm font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'sizing' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
            }`}
          >
            <Ruler className="w-4 h-4 text-[#D4AF37]" />
            <span>Sizing Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-4 py-3 text-xs sm:text-sm font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'faqs' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>FAQs & Care</span>
          </button>
        </div>

        {/* Tab 1: SECURE LOGIN PORTAL & ORDER TRACKING */}
        {activeTab === 'tracking' && (
          <div className="space-y-12">
            
            {/* Order Lookup Search Box */}
            <div className="bg-white border border-[#E8DFD3] rounded p-6 sm:p-8 shadow-xs max-w-3xl mx-auto">
              <div className="text-center space-y-2 mb-6">
                <h2 className="font-serif text-2xl font-semibold text-[#140407]">
                  Instant Order Tracking
                </h2>
                <p className="text-xs text-[#6E5D4E]">
                  Enter your Balochi Doch Order ID (e.g. <strong>BD-1042</strong> or <strong>BD-84920</strong>) to review live atelier progress and courier tracking.
                </p>
              </div>

              <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder="Enter Order ID (e.g. BD-1042)..."
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-4 py-3 text-xs sm:text-sm rounded focus:outline-none focus:border-[#520D19] font-mono uppercase"
                  />
                  <Search className="w-4 h-4 text-[#8A7969] absolute right-3.5 top-3.5" />
                </div>
                <button
                  type="submit"
                  className="bg-gold-gradient text-[#140407] font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded hover:opacity-95 transition-opacity cursor-pointer shadow-sm shrink-0"
                >
                  Track Order
                </button>
              </form>

              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-[#8A7969]">
                <span>Sample demo orders to test:</span>
                <button
                  type="button"
                  onClick={() => {
                    setTrackingInput('BD-1042');
                    const o = findOrderById('BD-1042');
                    if (o) { setSearchedOrder(o); setActiveOrder(o); }
                  }}
                  className="text-[#520D19] font-mono underline hover:text-[#D4AF37]"
                >
                  #BD-1042 (Pakistan COD)
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => {
                    setTrackingInput('BD-84920');
                    const o = findOrderById('BD-84920');
                    if (o) { setSearchedOrder(o); setActiveOrder(o); }
                  }}
                  className="text-[#520D19] font-mono underline hover:text-[#D4AF37]"
                >
                  #BD-84920 (DHL International)
                </button>
              </div>
            </div>

            {/* Live Order Timeline Display */}
            {searchedOrder && (
              <div className="bg-white border border-[#D4AF37]/50 rounded-lg p-6 sm:p-10 shadow-lg max-w-4xl mx-auto space-y-8">
                
                {/* Order Top Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#F0E8DC] pb-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#8C1A30] uppercase font-bold">
                      AUTHENTIC COMMMISSION
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#140407]">
                      Order #{searchedOrder.id}
                    </h3>
                    <p className="text-xs text-[#7A6B5C]">
                      Placed on {searchedOrder.date} • Recipient: {searchedOrder.customer.name}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="inline-block bg-[#FAF2E6] border border-[#D4AF37]/60 text-[#520D19] text-xs font-semibold px-3 py-1 rounded">
                      Status: {searchedOrder.status}
                    </span>
                    <p className="text-xs text-[#2E6B34] font-medium mt-1">
                      Estimated Delivery: {searchedOrder.estimatedDelivery}
                    </p>
                  </div>
                </div>

                {/* Progress Steps Timeline */}
                <div className="space-y-6">
                  <h4 className="font-cinzel text-xs font-bold tracking-[0.16em] uppercase text-[#3B0811]">
                    Atelier Handcraft & Courier Journey
                  </h4>

                  <div className="relative pl-6 sm:pl-8 space-y-8 border-l-2 border-[#D5C9B8]">
                    {searchedOrder.timeline.map((step: any, index: number) => (
                      <div key={index} className="relative">
                        {/* Dot indicator */}
                        <div className={`absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-[#520D19] text-white ring-4 ring-[#FAF2E6]'
                            : 'bg-[#E5DACB] text-[#8A7969]'
                        }`}>
                          {step.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                          ) : (
                            <span className="text-[10px] font-bold font-mono">{index + 1}</span>
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h5 className={`font-serif text-base font-semibold ${step.completed ? 'text-[#140407]' : 'text-[#8A7969]'}`}>
                              {step.step}
                            </h5>
                            <span className="text-xs font-mono text-[#8A7969]">{step.date}</span>
                          </div>
                          <p className="text-xs text-[#6E5D4E] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Details & Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#F0E8DC] text-xs">
                  <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded space-y-2">
                    <span className="font-bold text-[#520D19] uppercase tracking-wider block">
                      Delivery Address
                    </span>
                    <p className="text-[#140407] font-medium">{searchedOrder.customer.name}</p>
                    <p className="text-[#6E5D4E]">{searchedOrder.customer.address}</p>
                    <p className="text-[#6E5D4E]">
                      {searchedOrder.customer.city}, {searchedOrder.customer.country}
                    </p>
                    <p className="text-[#6E5D4E]">Contact: {searchedOrder.customer.phone}</p>
                  </div>

                  <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded space-y-2">
                    <span className="font-bold text-[#520D19] uppercase tracking-wider block">
                      Courier Dispatch Details
                    </span>
                    <div className="flex justify-between">
                      <span className="text-[#8A7969]">Carrier:</span>
                      <span className="font-semibold text-[#140407]">{searchedOrder.courier}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A7969]">Tracking Code:</span>
                      <span className="font-mono font-semibold text-[#520D19]">{searchedOrder.trackingNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A7969]">Payment Mode:</span>
                      <span className="font-semibold text-[#140407] uppercase">
                        {searchedOrder.paymentMethod === 'cod' ? 'Cash on Delivery (Pakistan COD)' : searchedOrder.paymentMethod}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A7969]">Total Amount:</span>
                      <span className="font-bold text-sm text-[#520D19] font-mono">
                        {formatPrice(searchedOrder.totalUSD, searchedOrder.totalPKR)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Items in this order */}
                <div className="space-y-3 pt-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-[#140407] block">
                    Commissioned Pieces in this Order:
                  </span>
                  {searchedOrder.items.map((item: any) => (
                    <div key={item.id} className="flex gap-4 p-3 border border-[#E8DFD3] rounded bg-white items-center">
                      <img src={item.product.image} alt={item.product.title} className="w-14 h-16 object-cover rounded bg-[#F8F5F0]" />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif text-sm font-semibold text-[#140407] truncate">{item.product.title}</h5>
                        <p className="text-[11px] text-[#7A6B5C]">Size: {item.selectedSize} • Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right font-mono text-xs font-semibold text-[#520D19]">
                        {formatPrice(item.product.priceUSD * item.quantity, item.product.pricePKR * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* Customer Login / Register Account Card */}
            <div className="bg-white border border-[#E8DFD3] rounded p-6 sm:p-10 shadow-xs max-w-xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#FAF2E6] border border-[#D4AF37] flex items-center justify-center mx-auto text-[#520D19]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#140407]">
                  Collector Portal Access
                </h3>
                <p className="text-xs text-[#6E5D4E]">
                  Sign in to view your complete archival order history, saved sizing profiles, and exclusive bridal trunk shows.
                </p>
              </div>

              {user?.isLoggedIn ? (
                <div className="p-4 bg-[#FAF2E6] border border-[#E5DACB] rounded text-center space-y-3">
                  <p className="text-xs text-[#2E6B34] font-semibold flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    Logged in as <strong>{user.name}</strong> ({user.email})
                  </p>
                  <p className="text-xs text-[#6E5D4E]">
                    You have <strong>{orders.length} orders</strong> registered under this profile.
                  </p>
                  <button
                    onClick={logoutUser}
                    className="text-xs font-semibold text-[#A82338] underline hover:text-[#520D19] cursor-pointer"
                  >
                    Sign Out of Collector Portal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="e.g. collector@example.com"
                      className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={loginName}
                      onChange={(e) => setLoginName(e.target.value)}
                      placeholder="e.g. Faiza Salam"
                      className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3 py-2 text-xs rounded focus:outline-none focus:border-[#520D19]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#26050A] text-[#FAF7F2] py-2.5 rounded font-semibold text-xs uppercase tracking-wider hover:bg-[#3B0811] transition-colors cursor-pointer shadow-xs"
                  >
                    Enter Collector Portal
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

        {/* Tab 2: SHIPPING & RETURNS */}
        {activeTab === 'shipping' && (
          <div className="max-w-4xl mx-auto bg-white border border-[#E8DFD3] rounded p-6 sm:p-12 shadow-xs space-y-8">
            <div className="space-y-2 border-b border-[#F0E8DC] pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#140407]">
                Shipping & Returns Policy
              </h2>
              <p className="text-xs text-[#7A6B5C]">
                Crafted with love in Balochistan, delivered to patrons worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#520D19]">
                  Domestic Delivery (Pakistan)
                </h3>
                <ul className="space-y-2 text-xs text-[#4A3E33] leading-relaxed list-disc pl-4">
                  <li><strong>Free Cash on Delivery (COD)</strong> across all cities, towns, and cantts in Pakistan.</li>
                  <li>Dispatched via premier express couriers (TCS Express & Leopard Courier).</li>
                  <li>Delivery transit time: <strong>3 to 5 business days</strong> from order dispatch.</li>
                  <li>Riders carry mobile POS and cash collection verification slips.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#520D19]">
                  International Shipping
                </h3>
                <ul className="space-y-2 text-xs text-[#4A3E33] leading-relaxed list-disc pl-4">
                  <li>Flat rate <strong>$15 USD</strong> worldwide delivery.</li>
                  <li><strong>FREE International Shipping</strong> on all orders exceeding $150 USD.</li>
                  <li>Dispatched via <strong>DHL Express Air</strong> with live end-to-end tracking.</li>
                  <li>Transit timeline: <strong>5 to 7 business days</strong> to North America, UK, Europe, UAE, and GCC.</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#F0E8DC] pt-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#520D19]">
                14-Day Heirloom Exchange Guarantee
              </h3>
              <p className="text-xs text-[#4A3E33] leading-relaxed">
                If your handcrafted creation does not match your expectations or sizing requirements, you may initiate an exchange within 14 calendar days of receipt. Unstitched fabrics must remain uncut in original folds. Due to the months of handcraft required, bespoke custom tailored bridals are eligible for complimentary alterations rather than full refunds.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: SIZING GUIDE */}
        {activeTab === 'sizing' && (
          <div className="max-w-4xl mx-auto bg-white border border-[#E8DFD3] rounded p-6 sm:p-12 shadow-xs space-y-8">
            <div className="space-y-2 border-b border-[#F0E8DC] pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#140407]">
                Traditional Balochi Sizing & Yardage Guide
              </h2>
              <p className="text-xs text-[#7A6B5C]">
                Measurement tables for stitched kurtas & generous unstitched fabric allowances.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-[#E8DFD3]">
                <thead className="bg-[#FAF2E6] text-[#520D19] font-cinzel font-bold">
                  <tr>
                    <th className="p-3 border border-[#E8DFD3]">Standard Size</th>
                    <th className="p-3 border border-[#E8DFD3]">Chest (Inches)</th>
                    <th className="p-3 border border-[#E8DFD3]">Waist (Inches)</th>
                    <th className="p-3 border border-[#E8DFD3]">Hips (Inches)</th>
                    <th className="p-3 border border-[#E8DFD3]">Kurta Length</th>
                    <th className="p-3 border border-[#E8DFD3]">Sleeve Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DFD3]">
                  <tr>
                    <td className="p-3 font-semibold text-[#140407]">Small</td>
                    <td className="p-3">36&quot;</td>
                    <td className="p-3">32&quot;</td>
                    <td className="p-3">39&quot;</td>
                    <td className="p-3">39&quot;</td>
                    <td className="p-3">21.5&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#140407]">Medium</td>
                    <td className="p-3">39&quot;</td>
                    <td className="p-3">35&quot;</td>
                    <td className="p-3">42&quot;</td>
                    <td className="p-3">40&quot;</td>
                    <td className="p-3">22&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#140407]">Large</td>
                    <td className="p-3">42&quot;</td>
                    <td className="p-3">38&quot;</td>
                    <td className="p-3">45&quot;</td>
                    <td className="p-3">41&quot;</td>
                    <td className="p-3">22.5&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#140407]">XL (Extra Large)</td>
                    <td className="p-3">46&quot;</td>
                    <td className="p-3">42&quot;</td>
                    <td className="p-3">49&quot;</td>
                    <td className="p-3">42&quot;</td>
                    <td className="p-3">23&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded">
                <span className="font-bold text-[#520D19] block mb-1">Unstitched Shirt Piece</span>
                <p className="text-[#6E5D4E]">3.0 to 3.25 meters of premium fabric with fully embroidered neckline, front panel, and sleeve border motifs.</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded">
                <span className="font-bold text-[#520D19] block mb-1">Unstitched Shalwar Piece</span>
                <p className="text-[#6E5D4E]">2.5 meters of solid dyed fabric with complimentary cuff border (gwaft) lace for trouser hem.</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded">
                <span className="font-bold text-[#520D19] block mb-1">Dupatta / Chadar</span>
                <p className="text-[#6E5D4E]">2.75 meters of lightweight chiffon or pure georgette with 4-sided embroidered borders.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: FAQS */}
        {activeTab === 'faqs' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#140407]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-[#7A6B5C]">
                Common inquiries regarding authenticity, mirror work, and garment care.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isExpanded = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#E8DFD3] rounded overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
                    >
                      <h4 className="font-serif text-base font-semibold text-[#140407]">
                        {faq.q}
                      </h4>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#520D19] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#8A7969] shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-[#4A3E33] leading-relaxed border-t border-[#F0E8DC]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
