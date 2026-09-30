import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Star, MessageCircle, ShoppingBag, Eye, Sparkles, Layers, Scissors } from 'lucide-react';

export const DochCollectionPage: React.FC = () => {
  const {
    formatPrice,
    openProductDetail,
    addToCart,
    generateWhatsAppOrderUrl
  } = useShop();

  const [activeCategory, setActiveCategory] = useState<'All' | 'Unstitched 3-Piece' | 'Kurta' | 'Heavy Embroidery'>('All');

  const categories = [
    {
      id: 'All',
      title: 'Complete Doch Archive',
      subtitle: 'All Categories',
      description: 'Explore the full spectrum of Balochi needlework, spanning unstitched 3-piece suites, contemporary kurtas, and heavy museum-grade bridal embroidery.',
      count: PRODUCTS.length
    },
    {
      id: 'Unstitched 3-Piece',
      title: 'Unstitched 3-Piece Suites',
      subtitle: 'Traditional Chogha & Dupatta Sets',
      description: 'Generously cut 3-piece sets featuring heavily embroidered front panels, sleeve borders, daman gwaft, and a 2.75m embroidered chadar/dupatta ready for your master tailor.',
      count: PRODUCTS.filter(p => p.category === 'Unstitched 3-Piece').length
    },
    {
      id: 'Kurta',
      title: 'Kurta & Tunics',
      subtitle: 'Refined Modern Silhouettes',
      description: 'Statement kurtas celebrating intricate neckline medallions, collar motifs, and sleeve cuffs embroidered on fine breathable cotton for effortless elegance.',
      count: PRODUCTS.filter(p => p.category === 'Kurta').length
    },
    {
      id: 'Heavy Embroidery',
      title: 'Heavy Embroidery & Bridal',
      subtitle: 'High-Density Sheesha & Zari Heirloom Pieces',
      description: 'Intricately dense needlecraft requiring 60 to 90 days of artisan concentration, loaded with hundreds of real glass mirrors and metallic gold zari.',
      count: PRODUCTS.filter(p => p.category === 'Heavy Embroidery' || p.category === 'Royal Bridal').length
    }
  ];

  const currentCategoryInfo = categories.find(c => c.id === activeCategory) || categories[0];

  const displayProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => {
        if (activeCategory === 'Heavy Embroidery') {
          return p.category === 'Heavy Embroidery' || p.category === 'Royal Bridal';
        }
        return p.category === activeCategory;
      });

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#26050A] px-3.5 py-1 text-[11px] tracking-[0.25em] font-semibold text-[#E5C158] uppercase">
            <span>COLLECTION SHOWCASE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#3B0811] font-semibold tracking-wide">
            The Doch Collection
          </h1>
          <p className="text-sm sm:text-base text-[#6E5D4E] leading-relaxed">
            Curated by silhouette and craft density. From daily wearable elegance to regal bridal heirlooms passed through generations.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`p-4 rounded text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-[#26050A] text-[#FAF7F2] border-[#D4AF37] shadow-md'
                    : 'bg-white text-[#4A3E33] border-[#E8DFD3] hover:border-[#D4AF37]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className={`font-mono uppercase tracking-wider ${isActive ? 'text-[#E5C158]' : 'text-[#8A7969]'}`}>
                    {cat.subtitle}
                  </span>
                  <span className={`font-bold font-mono px-2 py-0.5 rounded text-[10px] ${isActive ? 'bg-[#3B0811] text-[#E5C158]' : 'bg-[#FAF7F2] text-[#520D19]'}`}>
                    {cat.count}
                  </span>
                </div>
                <h3 className={`font-serif text-base font-semibold truncate ${isActive ? 'text-[#FAF7F2]' : 'text-[#140407]'}`}>
                  {cat.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="bg-[#FAF2E6] border border-[#E5DACB] rounded p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#520D19]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{currentCategoryInfo.subtitle}</span>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-[#140407]">
              {currentCategoryInfo.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5D4E] leading-relaxed">
              {currentCategoryInfo.description}
            </p>
          </div>

          <div className="bg-white border border-[#E5DACB] p-4 rounded text-center shrink-0 w-full md:w-auto">
            <span className="block text-[10px] font-mono tracking-widest text-[#8A7969] uppercase">
              Curated Pieces
            </span>
            <span className="font-serif text-2xl font-bold text-[#520D19]">
              {displayProducts.length} Creations
            </span>
            <span className="block text-[11px] text-[#2E6B34] font-medium mt-0.5">
              100% Hand-Embroidered
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map(product => (
            <div
              key={product.id}
              className="bg-white border border-[#E8DFD3] rounded-sm overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Product Thumbnail */}
              <div
                onClick={() => openProductDetail(product)}
                className="relative aspect-[4/3] bg-[#F8F5F0] overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#26050A] text-[#E5C158] border border-[#D4AF37]/50 text-[10px] font-bold tracking-widest px-2.5 py-0.5 uppercase shadow-sm">
                    {product.badge}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductDetail(product);
                    }}
                    className="p-3 bg-white text-[#140407] rounded-full hover:bg-[#FAF7F2] shadow-lg cursor-pointer"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, 1);
                    }}
                    className="p-3 bg-[#3B0811] text-[#FAF7F2] rounded-full hover:bg-[#520D19] shadow-lg cursor-pointer"
                    title="Add to Bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7A6B5C]">
                    <span className="font-medium text-[#520D19] uppercase tracking-wider text-[11px]">
                      {product.styleType}
                    </span>
                    <span className="flex items-center gap-1 text-[#D4AF37]">
                      <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      <span className="text-[#140407] font-semibold">{product.rating}</span>
                    </span>
                  </div>

                  <h3
                    onClick={() => openProductDetail(product)}
                    className="font-serif text-lg font-semibold text-[#140407] hover:text-[#520D19] mt-1 cursor-pointer truncate"
                  >
                    {product.title}
                  </h3>

                  <p className="text-xs text-[#7A6B5C] line-clamp-2 mt-1">
                    {product.description}
                  </p>

                  {/* Highlights tag row */}
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="text-[10px] bg-[#FAF7F2] border border-[#E8DFD3] text-[#520D19] px-2 py-0.5 rounded font-medium">
                      {product.fabric}
                    </span>
                    {product.mirrorWork && (
                      <span className="text-[10px] bg-[#FAF7F2] border border-[#E8DFD3] text-[#520D19] px-2 py-0.5 rounded font-medium">
                        Real Sheesha Mirrors
                      </span>
                    )}
                    <span className="text-[10px] bg-[#FAF7F2] border border-[#E8DFD3] text-[#520D19] px-2 py-0.5 rounded font-medium">
                      {product.artisanDays} Days Handcraft
                    </span>
                  </div>

                  <div className="mt-3 text-base font-semibold text-[#520D19] font-mono tabular-nums">
                    {formatPrice(product.priceUSD, product.pricePKR)}
                  </div>
                </div>

                {/* Actions */}
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

      </div>
    </div>
  );
};
