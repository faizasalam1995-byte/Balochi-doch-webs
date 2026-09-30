import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Star, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Scissors, 
  Ruler, 
  Share2, 
  Heart, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  Info,
  X
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProduct,
    formatPrice,
    currency,
    toggleCurrency,
    addToCart,
    generateWhatsAppOrderUrl,
    setCurrentPage,
    openProductDetail,
    showToast
  } = useShop();

  const product = selectedProduct;

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0] || 'Unstitched Fabric');
  const [tailoringOption, setTailoringOption] = useState<'unstitched' | 'custom_tailored'>('unstitched');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'craft' | 'specs' | 'shipping' | 'reviews'>('craft');
  const [showSizeModal, setShowSizeModal] = useState<boolean>(false);
  const [customChest, setCustomChest] = useState<string>('38');
  const [customLength, setCustomLength] = useState<string>('40');
  const [customHips, setCustomHips] = useState<string>('42');

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Product link copied to clipboard.');
  };

  const handleAddToCart = () => {
    const customNotes = tailoringOption === 'custom_tailored'
      ? `Chest: ${customChest}", Length: ${customLength}", Hips: ${customHips}"`
      : undefined;

    addToCart(product, quantity, selectedSize, tailoringOption, customNotes);
  };

  const whatsappUrl = generateWhatsAppOrderUrl(product, selectedSize);

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#7A6B5C] mb-8">
          <button onClick={() => setCurrentPage('home')} className="hover:text-[#520D19] cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          <button onClick={() => setCurrentPage('shop')} className="hover:text-[#520D19] cursor-pointer">
            Shop
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          <button onClick={() => setCurrentPage('doch_collection')} className="hover:text-[#520D19] cursor-pointer">
            {product.category}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[#140407] font-semibold truncate max-w-xs">{product.title}</span>
        </nav>

        {/* Main Product Layout: Gallery (Left) + Purchase Module (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Gallery Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Main Image with Zoom frame */}
            <div className="relative aspect-[4/3] sm:aspect-square bg-white border border-[#E8DFD3] rounded overflow-hidden shadow-xs">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />

              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#26050A] text-[#E5C158] border border-[#D4AF37]/50 text-xs font-bold tracking-widest px-3 py-1 uppercase shadow-md">
                  {product.badge}
                </div>
              )}

              <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-[#140407] hover:text-[#520D19] shadow transition-colors cursor-pointer"
                title="Share creation"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Carousel */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === img ? 'border-[#520D19] scale-95' : 'border-[#E8DFD3] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Artisan Provenance Card */}
            <div className="p-4 bg-white border border-[#E8DFD3] rounded shadow-xs space-y-3">
              <h4 className="font-cinzel text-xs font-bold tracking-[0.16em] uppercase text-[#3B0811] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Artisan Provenance Certificate</span>
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#8A7969] block">Origin & Guild</span>
                  <span className="font-medium text-[#140407]">{product.artisanRegion}</span>
                </div>
                <div>
                  <span className="text-[#8A7969] block">Handcraft Duration</span>
                  <span className="font-medium text-[#140407]">{product.artisanDays} Days Hand-Stitching</span>
                </div>
                <div>
                  <span className="text-[#8A7969] block">Stitch Density</span>
                  <span className="font-medium text-[#140407]">{product.stitchCount}</span>
                </div>
                <div>
                  <span className="text-[#8A7969] block">Mirror Work (Sheesha)</span>
                  <span className="font-medium text-[#140407]">{product.mirrorWork ? 'Real Hand-Set Glass' : 'Pure Silk Thread'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Purchase Module (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#520D19] uppercase tracking-wider mb-1">
                <span>{product.styleType}</span>
                <span>•</span>
                <span>{product.category}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#140407] font-semibold leading-tight">
                {product.title}
              </h1>

              <p className="text-sm text-[#7A6B5C] font-serif italic mt-1">
                {product.subtitle}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                  <span className="ml-2 font-bold text-sm text-[#140407] font-mono">{product.rating}</span>
                </div>
                <span className="text-xs text-[#7A6B5C]">({product.reviewCount} customer reviews)</span>
                <span className="text-xs text-[#2E6B34] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  In Stock & Ready for Tailoring
                </span>
              </div>
            </div>

            {/* DUAL PRICING (USD / PKR Display as specified in prompt) */}
            <div className="p-4 bg-[#FAF2E6] border border-[#E5DACB] rounded flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A7969] block">
                  Artisan Price (Dual Currency)
                </span>
                <div className="flex items-baseline gap-3 mt-0.5">
                  <span className="font-mono text-2xl font-bold text-[#520D19] tabular-nums">
                    ${product.priceUSD} USD
                  </span>
                  <span className="text-sm text-[#8A7969] font-mono">/</span>
                  <span className="font-mono text-lg font-semibold text-[#140407] tabular-nums">
                    Rs. {product.pricePKR.toLocaleString()} PKR
                  </span>
                </div>
              </div>

              <button
                onClick={toggleCurrency}
                className="text-xs font-medium px-3 py-1.5 bg-white border border-[#D4AF37] rounded text-[#520D19] hover:bg-[#26050A] hover:text-[#FAF7F2] transition-colors cursor-pointer"
              >
                Display in {currency === 'USD' ? 'PKR' : 'USD'}
              </button>
            </div>

            {/* 3 Core Product Highlights (as specified in prompt) */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 bg-white border border-[#E8DFD3] rounded text-center">
                <Scissors className="w-4 h-4 mx-auto text-[#520D19] mb-1" />
                <span className="text-[11px] font-semibold text-[#140407] block">Hand-Embroidered</span>
                <span className="text-[10px] text-[#8A7969]">100% Baloch Needlework</span>
              </div>

              <div className="p-2.5 bg-white border border-[#E8DFD3] rounded text-center">
                <Sparkles className="w-4 h-4 mx-auto text-[#520D19] mb-1" />
                <span className="text-[11px] font-semibold text-[#140407] block">{product.fabric}</span>
                <span className="text-[10px] text-[#8A7969]">Premium Combed Cotton</span>
              </div>

              <div className="p-2.5 bg-white border border-[#E8DFD3] rounded text-center">
                <Sparkles className="w-4 h-4 mx-auto text-[#520D19] mb-1" />
                <span className="text-[11px] font-semibold text-[#140407] block">Mirror Work</span>
                <span className="text-[10px] text-[#8A7969]">Authentic Sheesha Doch</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#4A3E33] leading-relaxed">
              {product.description}
            </p>

            {/* Tailoring & Size Selection */}
            <div className="space-y-4 border-t border-[#E8DFD3] pt-5">
              
              {/* Tailoring Choice */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold uppercase tracking-wider text-[#140407]">
                    Execution Format
                  </span>
                  <button
                    onClick={() => setShowSizeModal(true)}
                    className="text-[#520D19] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>View Sizing Chart</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTailoringOption('unstitched')}
                    className={`p-3 rounded border text-left cursor-pointer transition-all ${
                      tailoringOption === 'unstitched'
                        ? 'bg-[#26050A] text-[#FAF7F2] border-[#D4AF37] shadow-sm'
                        : 'bg-white text-[#140407] border-[#E8DFD3] hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="font-semibold text-xs block">Unstitched Fabric (3-Piece)</span>
                    <span className={`text-[11px] mt-0.5 block ${tailoringOption === 'unstitched' ? 'text-[#D4AF37]' : 'text-[#8A7969]'}`}>
                      Original raw fabric cuts for your tailor
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTailoringOption('custom_tailored')}
                    className={`p-3 rounded border text-left cursor-pointer transition-all ${
                      tailoringOption === 'custom_tailored'
                        ? 'bg-[#26050A] text-[#FAF7F2] border-[#D4AF37] shadow-sm'
                        : 'bg-white text-[#140407] border-[#E8DFD3] hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="font-semibold text-xs block">Custom Stitched (+3-5 Days)</span>
                    <span className={`text-[11px] mt-0.5 block ${tailoringOption === 'custom_tailored' ? 'text-[#D4AF37]' : 'text-[#8A7969]'}`}>
                      Tailored to standard or custom measurements
                    </span>
                  </button>
                </div>
              </div>

              {/* Standard Sizes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-2">
                  Select Size / Cut
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map(sz => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-2 text-xs rounded border transition-colors cursor-pointer font-medium ${
                        selectedSize === sz
                          ? 'bg-[#520D19] text-[#FAF7F2] border-[#520D19]'
                          : 'bg-white text-[#4A3E33] border-[#E8DFD3] hover:border-[#520D19]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Measurement Fields if Custom Stitched */}
              {tailoringOption === 'custom_tailored' && (
                <div className="p-3 bg-[#FAF2E6] border border-[#E5DACB] rounded space-y-2">
                  <span className="text-xs font-semibold text-[#520D19] block">
                    Optional Custom Tailoring Inclusions (Inches):
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-[#8A7969] block">Chest</label>
                      <input
                        type="text"
                        value={customChest}
                        onChange={(e) => setCustomChest(e.target.value)}
                        className="w-full bg-white border border-[#D5C9B8] px-2 py-1 text-xs rounded"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#8A7969] block">Kurta Length</label>
                      <input
                        type="text"
                        value={customLength}
                        onChange={(e) => setCustomLength(e.target.value)}
                        className="w-full bg-white border border-[#D5C9B8] px-2 py-1 text-xs rounded"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#8A7969] block">Hips</label>
                      <input
                        type="text"
                        value={customHips}
                        onChange={(e) => setCustomHips(e.target.value)}
                        className="w-full bg-white border border-[#D5C9B8] px-2 py-1 text-xs rounded"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#140407]">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#D5C9B8] rounded bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm text-[#520D19] hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-mono font-medium">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm text-[#520D19] hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* PRIMARY ACTION BUTTONS (Add to Cart + Order on WhatsApp as requested in prompt) */}
              <div className="space-y-3 pt-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full bg-gold-gradient text-[#140407] py-3.5 px-6 rounded font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO CART — {formatPrice(product.priceUSD * quantity, product.pricePKR * quantity)}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#128C7E] text-white py-3.5 px-6 rounded font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#075E54] transition-colors cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ORDER ON WHATSAPP (+92 300 8392104)</span>
                </a>
              </div>

              {/* Trust markers */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#6E5D4E]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Pakistan COD Free • Worldwide $15</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>14-Day Exchange Guarantee</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Detailed Tabs Section */}
        <div className="mt-16 bg-white border border-[#E8DFD3] rounded p-6 sm:p-8 shadow-xs">
          <div className="flex border-b border-[#E8DFD3] gap-6 text-sm font-cinzel font-bold tracking-wider overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('craft')}
              className={`pb-3 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'craft' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
              }`}
            >
              Artisan Needlecraft
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'specs' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
              }`}
            >
              Fabric Yardage & Specifications
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'shipping' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
              }`}
            >
              Shipping & COD Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'reviews' ? 'border-[#520D19] text-[#520D19]' : 'border-transparent text-[#8A7969] hover:text-[#140407]'
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          <div className="pt-6">
            {activeTab === 'craft' && (
              <div className="space-y-4 text-sm text-[#4A3E33] leading-relaxed">
                <h3 className="font-serif text-xl font-semibold text-[#140407]">
                  The Legacy of {product.styleType}
                </h3>
                <p>
                  Every line of embroidery in this {product.title} has been hand-stitched by Baloch women artisans who carry forward patterns cultivated across generations in the valleys of Balochistan. Rather than copying pre-stamped patterns, the crafters count each thread on the warp and weft to build flawless diamond symmetries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {product.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#140407]">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-4 text-sm">
                <h3 className="font-serif text-xl font-semibold text-[#140407]">
                  Unstitched Dimensions & Fabric Cuts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded">
                    <span className="text-xs font-semibold text-[#520D19] uppercase block">Kurta / Kameez Fabric</span>
                    <span className="text-sm text-[#140407] mt-1 block">{product.fabricYardage.shirt}</span>
                  </div>
                  <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded">
                    <span className="text-xs font-semibold text-[#520D19] uppercase block">Shalwar / Trouser Fabric</span>
                    <span className="text-sm text-[#140407] mt-1 block">{product.fabricYardage.shalwar}</span>
                  </div>
                  <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD3] rounded">
                    <span className="text-xs font-semibold text-[#520D19] uppercase block">Dupatta / Chadar</span>
                    <span className="text-sm text-[#140407] mt-1 block">{product.fabricYardage.dupatta}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4 text-sm text-[#4A3E33]">
                <h3 className="font-serif text-xl font-semibold text-[#140407]">
                  Delivery Timelines & Payment Terms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border border-[#E8DFD3] rounded bg-[#FAF7F2] space-y-2">
                    <h4 className="font-bold text-[#520D19] text-xs uppercase tracking-wider">
                      Pakistan Domestic Orders (Free COD)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Cash on Delivery is available across all major cities and towns in Pakistan (Karachi, Lahore, Islamabad, Quetta, Peshawar, Multan, Faisalabad). Delivery takes 3 to 5 business days via TCS or Leopard courier. You pay when you receive the heirloom.
                    </p>
                  </div>
                  <div className="p-4 border border-[#E8DFD3] rounded bg-[#FAF7F2] space-y-2">
                    <h4 className="font-bold text-[#520D19] text-xs uppercase tracking-wider">
                      International Air Express ($15 USD)
                    </h4>
                    <p className="text-xs leading-relaxed">
                      We ship to 50+ countries worldwide via DHL Express with full tracking. Orders above $150 USD receive <strong>Free Shipping</strong>. Typical international delivery transit time is 5 to 7 business days.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-[#140407]">
                    Customer Reviews
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#D4AF37]">
                    <Star className="w-5 h-5 fill-[#D4AF37]" />
                    <span className="text-base font-bold text-[#140407]">{product.rating} out of 5</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border border-[#E8DFD3] rounded bg-[#FAF7F2] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#140407]">Faiza Salam</span>
                      <span className="text-[#8A7969]">Verified Buyer • 3 days ago</span>
                    </div>
                    <div className="flex text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#4A3E33]">
                      &ldquo;The hand-embroidery on this dress is mesmerizing. The mirror work is so sturdy and beautifully locked with gold thread. Delivered right to my door in Islamabad with COD.&rdquo;
                    </p>
                  </div>

                  <div className="p-4 border border-[#E8DFD3] rounded bg-[#FAF7F2] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#140407]">Amina Al-Mansoor</span>
                      <span className="text-[#8A7969]">Verified Buyer • Dubai, UAE</span>
                    </div>
                    <div className="flex text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#4A3E33]">
                      &ldquo;True museum-grade craftsmanship. The fabric feels luxurious and breathable. Thank you for preserving this Baloch art!&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Sizing Modal */}
      {showSizeModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white rounded max-w-xl w-full p-6 space-y-4 border border-[#D4AF37]/50 shadow-2xl">
            <div className="flex justify-between items-center border-b border-[#E8DFD3] pb-3">
              <h3 className="font-cinzel text-base font-bold text-[#3B0811]">
                Balochi Traditional Sizing Guide
              </h3>
              <button onClick={() => setShowSizeModal(false)} className="p-1 text-[#8A7969] hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#4A3E33] space-y-3">
              <p>Standard finished garment dimensions for Stitched Kurta & Suits (Inches):</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-[#E8DFD3]">
                  <thead className="bg-[#FAF2E6] text-[#520D19]">
                    <tr>
                      <th className="p-2 border border-[#E8DFD3]">Size</th>
                      <th className="p-2 border border-[#E8DFD3]">Chest</th>
                      <th className="p-2 border border-[#E8DFD3]">Waist</th>
                      <th className="p-2 border border-[#E8DFD3]">Hips</th>
                      <th className="p-2 border border-[#E8DFD3]">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-[#E8DFD3] font-semibold">Small</td>
                      <td className="p-2 border border-[#E8DFD3]">36&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">32&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">39&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">39&quot;</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#E8DFD3] font-semibold">Medium</td>
                      <td className="p-2 border border-[#E8DFD3]">39&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">35&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">42&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">40&quot;</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#E8DFD3] font-semibold">Large</td>
                      <td className="p-2 border border-[#E8DFD3]">42&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">38&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">45&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">41&quot;</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-[#E8DFD3] font-semibold">XL</td>
                      <td className="p-2 border border-[#E8DFD3]">46&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">42&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">49&quot;</td>
                      <td className="p-2 border border-[#E8DFD3]">42&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-[#8A7969] italic">
                *Unstitched fabric comes with 3.0m shirt, 2.5m shalwar, and 2.75m dupatta, giving your local master tailor ample room for any size up to 4XL.
              </p>
            </div>

            <button
              onClick={() => setShowSizeModal(false)}
              className="w-full bg-[#3B0811] text-[#FAF7F2] py-2 text-xs font-semibold uppercase tracking-wider rounded"
            >
              Close Chart
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
