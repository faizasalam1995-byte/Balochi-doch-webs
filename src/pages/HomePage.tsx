import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { 
  ArrowRight, 
  Sparkles, 
  Scissors, 
  Layers, 
  Globe2, 
  HeartHandshake, 
  Star, 
  MessageCircle, 
  ShoppingBag,
  Eye,
  CheckCircle2
} from 'lucide-react';

import heroImg from '../assets/images/hero_balochi_doch_vogue_1790789027352.jpg';
import craftImg from '../assets/images/craft_needlework_macro_1790789076917.jpg';

export const HomePage: React.FC = () => {
  const {
    setCurrentPage,
    formatPrice,
    openProductDetail,
    addToCart,
    generateWhatsAppOrderUrl
  } = useShop();

  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen">
      
      {/* 1. HERO SECTION (Faithfully matching user uploaded reference) */}
      <section className="relative bg-[#1A0408] text-[#FAF7F2] overflow-hidden border-b border-[#3B0811]">
        
        {/* Subtle Balochi geometric backdrop */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-balochi-pattern" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[580px] items-center py-10 lg:py-0">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 z-10 space-y-6 lg:pr-10">
              
              {/* Top Pill / Kicker (as shown in reference) */}
              <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#26050A]/80 px-3.5 py-1 text-[11px] tracking-[0.25em] font-semibold text-[#E5C158] uppercase">
                <span>HERITAGE</span>
                <span className="text-[#D4AF37]">•</span>
                <span>CULTURE</span>
                <span className="text-[#D4AF37]">•</span>
                <span>CRAFT</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#FAF7F2] leading-[1.15]">
                  BALOCHI DOCH EMBROIDERY
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-[#E5C158] italic font-normal">
                  Handcrafted Traditional Balochi Dresses
                </p>
              </div>

              {/* Subheading Narrative */}
              <p className="text-sm sm:text-base text-[#D9CFC4] leading-relaxed max-w-xl">
                Discover authentic Doch embroidery — centuries-old art, meticulously hand-stitched on premium fabrics. Each piece celebrates Baloch heritage, woven with gold thread on deep maroon & black, telling stories through timeless geometric patterns.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-gold-gradient text-[#140407] font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded hover:opacity-95 transition-opacity flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>SHOP THE COLLECTION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('our_craft');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border border-[#D4AF37] text-[#FAF7F2] hover:bg-[#D4AF37]/15 font-medium text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded transition-colors cursor-pointer"
                >
                  EXPLORE OUR CRAFT
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A89886]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Handmade in Balochistan
                </span>
                <span className="text-[#D4AF37]/40">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  100% Authentic
                </span>
                <span className="text-[#D4AF37]/40">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Ethically Crafted by Artisans
                </span>
              </div>

            </div>

            {/* Right Image Column (5 cols) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Gold geometric framed corner accents */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37] z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37] z-20 pointer-events-none" />

                <div className="relative rounded overflow-hidden shadow-2xl border border-[#D4AF37]/40 aspect-[4/3] lg:aspect-[4/4.5] group">
                  <img
                    src={heroImg}
                    alt="Authentic Balochi Doch Embroidered Dress Model in Balochistan Landscape"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/80 via-transparent to-transparent" />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#26050A]/90 backdrop-blur-xs border border-[#D4AF37]/40 p-3 rounded text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C158] font-semibold">
                      Heritage Masterpiece
                    </p>
                    <p className="font-serif text-sm text-[#FAF7F2] font-medium">
                      Baloch Royal Doch with 24k Gold Thread & Sheesha Mirror Work
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST PILLARS BAR (Matching screenshot 4 icons & labels) */}
      <section className="bg-[#140407] text-[#FAF7F2] py-8 border-b border-[#3B0811]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#26050A] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                <Scissors className="w-5 h-5 text-[#E5C158]" />
              </div>
              <div>
                <h4 className="font-cinzel text-xs font-bold tracking-[0.14em] text-[#FAF7F2] uppercase">
                  HAND-EMBROIDERED
                </h4>
                <p className="text-[11px] text-[#B8A896] mt-0.5">
                  Crafted by skilled artisans
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#26050A] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-[#E5C158]" />
              </div>
              <div>
                <h4 className="font-cinzel text-xs font-bold tracking-[0.14em] text-[#FAF7F2] uppercase">
                  PREMIUM FABRICS
                </h4>
                <p className="text-[11px] text-[#B8A896] mt-0.5">
                  Cotton, Georgette & Silk
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#26050A] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-[#E5C158]" />
              </div>
              <div>
                <h4 className="font-cinzel text-xs font-bold tracking-[0.14em] text-[#FAF7F2] uppercase">
                  GLOBAL SHIPPING
                </h4>
                <p className="text-[11px] text-[#B8A896] mt-0.5">
                  Delivery worldwide, 5-7 days
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#26050A] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-[#E5C158]" />
              </div>
              <div>
                <h4 className="font-cinzel text-xs font-bold tracking-[0.14em] text-[#FAF7F2] uppercase">
                  ETHICAL & FAIR TRADE
                </h4>
                <p className="text-[11px] text-[#B8A896] mt-0.5">
                  Supporting Baloch women artisans
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS (Matching screenshot cards & typography) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B0811] font-semibold tracking-wide">
            FEATURED COLLECTIONS
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D4E] font-serif italic">
            Our most loved Balochi Doch creations
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white border border-[#E8DFD3] rounded-sm overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/3] bg-[#F8F5F0] overflow-hidden cursor-pointer" onClick={() => openProductDetail(product)}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge if available */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#26050A] text-[#E5C158] border border-[#D4AF37]/50 text-[10px] font-bold tracking-widest px-2.5 py-0.5 uppercase shadow-sm">
                    {product.badge}
                  </div>
                )}

                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductDetail(product);
                    }}
                    className="p-3 bg-white text-[#140407] rounded-full hover:bg-[#FAF7F2] transition-colors shadow-lg cursor-pointer"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, 1);
                    }}
                    className="p-3 bg-[#3B0811] text-[#FAF7F2] rounded-full hover:bg-[#520D19] transition-colors shadow-lg cursor-pointer"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between text-center space-y-3">
                <div>
                  <h3
                    onClick={() => openProductDetail(product)}
                    className="font-serif text-lg font-semibold text-[#140407] hover:text-[#520D19] transition-colors cursor-pointer"
                  >
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1.5 mt-1 text-xs text-[#7A6B5C]">
                    <div className="flex items-center text-[#D4AF37]">
                      <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      <span className="ml-1 font-semibold text-[#140407]">{product.rating}</span>
                    </div>
                    <span>({product.reviewCount} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="mt-2 text-base font-semibold text-[#520D19] font-mono tabular-nums">
                    {formatPrice(product.priceUSD, product.pricePKR)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F0E8DC]">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-full bg-[#26050A] text-[#FAF7F2] py-2 text-xs font-semibold tracking-wider hover:bg-[#3B0811] transition-colors rounded-xs cursor-pointer uppercase"
                  >
                    Add to Cart
                  </button>

                  <a
                    href={generateWhatsAppOrderUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#128C7E] text-white py-2 text-xs font-semibold tracking-wider hover:bg-[#075E54] transition-colors rounded-xs flex items-center justify-center gap-1.5 cursor-pointer uppercase"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setCurrentPage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="border-b-2 border-[#520D19] text-[#520D19] pb-1 font-serif text-base font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>VIEW COMPLETE CATALOG (8 EXCLUSIVE PIECES)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* 4. "THE ART OF DOCH - A Living Heritage" (Matching bottom banner in screenshot) */}
      <section className="bg-[#26050A] text-[#FAF7F2] border-y border-[#3B0811] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#E5C158] font-semibold tracking-wide">
                THE ART OF DOCH
              </h2>
              <p className="font-serif text-lg text-[#FAF7F2] italic">
                A Living Heritage
              </p>
              <p className="text-sm text-[#D9CFC4] leading-relaxed max-w-xl">
                For centuries, Balochi Doch is the traditional embroidery of Balochistan. Each piece is handcrafted by Baloch women artisans, weaving geometric patterns passed down for generations — mountains, stars, and tribal motifs embroidered in gold, black, and maroon thread. Every stitch tells a story of culture, tribe, and land.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('our_craft');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm tracking-[0.16em] uppercase text-[#E5C158] hover:text-white transition-colors underline underline-offset-4 cursor-pointer font-semibold inline-flex items-center gap-2"
                >
                  <span>LEARN ABOUT OUR CRAFT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Needlework Imagery (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden border border-[#D4AF37]/50 shadow-2xl group">
                <img
                  src={craftImg}
                  alt="Intricate Balochi Doch Needlework with Mirrors and Gold Thread"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-xs text-[#FAF7F2] font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>Master artisan hand-stitching in Mastung Atelier</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CULTURAL SPOTLIGHT: THE FOUR PILLARS OF AUTHENTIC DOCH */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <h2 className="font-serif text-3xl text-[#3B0811] font-semibold">
            Why Balochi Doch Is Revered Worldwide
          </h2>
          <p className="text-sm text-[#6E5D4E]">
            A sacred legacy where mathematics, heritage, and pure textile devotion converge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-[#E8DFD3] rounded text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF2E6] text-[#520D19] flex items-center justify-center font-cinzel font-bold text-lg border border-[#D4AF37]/30">
              01
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#140407]">
              Thread-Counted Geometry
            </h3>
            <p className="text-xs text-[#6E5D4E] leading-relaxed">
              No tracing paper or pre-printed stencils are ever used. Artisans calculate complex symmetrical diamond grids purely by counting warp and weft fibers.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E8DFD3] rounded text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF2E6] text-[#520D19] flex items-center justify-center font-cinzel font-bold text-lg border border-[#D4AF37]/30">
              02
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#140407]">
              Genuine Sheesha Mirrors
            </h3>
            <p className="text-xs text-[#6E5D4E] leading-relaxed">
              Real glass mirrors hand-cut and locked into the fabric with reinforced gold thread bezels. Designed to refract desert sunshine and deflect negativity.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E8DFD3] rounded text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF2E6] text-[#520D19] flex items-center justify-center font-cinzel font-bold text-lg border border-[#D4AF37]/30">
              03
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#140407]">
              Direct Artisan Economic Power
            </h3>
            <p className="text-xs text-[#6E5D4E] leading-relaxed">
              100% fair living wages paid directly to women crafters in remote Baloch villages, ensuring economic independence and generational craft preservation.
            </p>
          </div>
        </div>
      </section>

      {/* 6. COLLECTOR PRAISE / TESTIMONIALS */}
      <section className="bg-[#FAF2E6] py-14 border-t border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C1A30] uppercase">
              COLLECTOR VOICES
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[#140407] mt-1">
              Cherished in London, Dubai, Karachi & Beyond
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white border border-[#E5DACB] rounded shadow-xs space-y-3">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-xs text-[#4A3E33] italic leading-relaxed">
                &ldquo;The Danko Doch 3-piece exceeded every expectation. The mirror work is impeccably tight and the weight of the gold zari feels royal. Delivered to London in just 5 days via DHL.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#F0E8DC] text-xs">
                <p className="font-semibold text-[#140407]">Dr. Samira K. Mengal</p>
                <p className="text-[11px] text-[#8A7969]">London, United Kingdom</p>
              </div>
            </div>

            <div className="p-5 bg-white border border-[#E5DACB] rounded shadow-xs space-y-3">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-xs text-[#4A3E33] italic leading-relaxed">
                &ldquo;Ordered Cash on Delivery to Islamabad for my daughter&apos;s wedding festivities. The Quetta Kurta was the centerpiece of the evening. Truly an heirloom garment.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#F0E8DC] text-xs">
                <p className="font-semibold text-[#140407]">Begum Tahira Durrani</p>
                <p className="text-[11px] text-[#8A7969]">Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="p-5 bg-white border border-[#E5DACB] rounded shadow-xs space-y-3">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-xs text-[#4A3E33] italic leading-relaxed">
                &ldquo;As someone passionate about historic textiles, seeing Mehrgarh motifs revived on pure georgette was breathtaking. The WhatsApp consultation was prompt and personal.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#F0E8DC] text-xs">
                <p className="font-semibold text-[#140407]">Mariam Al-Sabah</p>
                <p className="text-[11px] text-[#8A7969]">Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
