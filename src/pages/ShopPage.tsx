import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  Star, 
  Eye, 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  X,
  RotateCcw
} from 'lucide-react';

export const ShopPage: React.FC = () => {
  const {
    formatPrice,
    openProductDetail,
    addToCart,
    generateWhatsAppOrderUrl
  } = useShop();

  // Filters state
  const [selectedColor, setSelectedColor] = useState<string>('All');
  const [selectedFabric, setSelectedFabric] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [maxPriceUSD, setMaxPriceUSD] = useState<number>(300);
  const [onlyMirrorWork, setOnlyMirrorWork] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [localSearch, setLocalSearch] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Filter options
  const colorOptions = ['All', 'Maroon', 'Black', 'Gold', 'Emerald Green', 'Navy Blue'];
  const fabricOptions = ['All', 'Premium Lawn Cotton', 'Pure Georgette', 'Handloom Raw Silk', 'Velvet'];
  const categoryOptions = ['All', 'Unstitched 3-Piece', 'Kurta', 'Heavy Embroidery', 'Royal Bridal'];

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Color filter
      if (selectedColor !== 'All' && p.color !== selectedColor) return false;
      // Fabric filter
      if (selectedFabric !== 'All' && p.fabric !== selectedFabric) return false;
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      // Max price
      if (p.priceUSD > maxPriceUSD) return false;
      // Mirror work
      if (onlyMirrorWork && !p.mirrorWork) return false;
      // Search
      if (localSearch.trim()) {
        const query = localSearch.toLowerCase();
        const matches = 
          p.title.toLowerCase().includes(query) ||
          p.styleType.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.artisanRegion.toLowerCase().includes(query);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-high') return b.priceUSD - a.priceUSD;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.badge === 'NEW IN' ? 1 : 0) - (a.badge === 'NEW IN' ? 1 : 0);
      return 0; // default featured
    });
  }, [selectedColor, selectedFabric, selectedCategory, maxPriceUSD, onlyMirrorWork, sortBy, localSearch]);

  const resetFilters = () => {
    setSelectedColor('All');
    setSelectedFabric('All');
    setSelectedCategory('All');
    setMaxPriceUSD(300);
    setOnlyMirrorWork(false);
    setLocalSearch('');
    setSortBy('featured');
  };

  const hasActiveFilters = 
    selectedColor !== 'All' || 
    selectedFabric !== 'All' || 
    selectedCategory !== 'All' || 
    maxPriceUSD < 300 || 
    onlyMirrorWork || 
    localSearch !== '';

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#8C1A30] uppercase">
            ATELIER CATALOG
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#3B0811] font-semibold">
            Shop Balochi Doch Dresses
          </h1>
          <p className="text-sm text-[#6E5D4E] leading-relaxed">
            Every piece is an individual commission of heritage needlework. Filter by your preferred palette of royal maroon, onyx black, and gold threadwork.
          </p>
        </div>

        {/* Filter bar summary and controls */}
        <div className="bg-white border border-[#E8DFD3] rounded p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          
          {/* Search box inside shop */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search by Danko, Quetta, Mehrgarh..."
              className="w-full bg-[#FAF7F2] border border-[#D5C9B8] text-xs py-2 pl-9 pr-3 rounded focus:outline-none focus:border-[#520D19]"
            />
            <Search className="w-4 h-4 text-[#8A7969] absolute left-3 top-2.5" />
            {localSearch && (
              <button
                onClick={() => setLocalSearch('')}
                className="absolute right-2.5 top-2.5 text-xs text-[#8A7969] hover:text-[#140407]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center gap-2 px-3 py-2 bg-[#FAF7F2] border border-[#D5C9B8] rounded text-xs font-semibold text-[#520D19]"
            >
              <Filter className="w-4 h-4" />
              <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
            </button>

            {/* Results Counter */}
            <span className="text-xs text-[#6E5D4E] font-mono tabular-nums">
              Showing <strong>{filteredProducts.length}</strong> creations
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#8A7969] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FAF7F2] border border-[#D5C9B8] text-xs py-1.5 px-3 rounded focus:outline-none focus:border-[#520D19]"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>

        </div>

        {/* Main Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop & Mobile Filters Sidebar */}
          <aside className={`lg:col-span-3 bg-white border border-[#E8DFD3] rounded p-6 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            
            <div className="flex items-center justify-between border-b border-[#F0E8DC] pb-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#520D19]" />
                <h3 className="font-cinzel text-xs font-bold tracking-[0.14em] uppercase text-[#140407]">
                  Filter Creations
                </h3>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-[#A82338] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Color Filter (Maroon, Black, Gold as requested in prompt) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3B0811] mb-2.5">
                Color Palette
              </label>
              <div className="space-y-1.5">
                {colorOptions.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-full text-left text-xs py-1.5 px-2.5 rounded transition-colors flex items-center justify-between cursor-pointer ${
                      selectedColor === color
                        ? 'bg-[#3B0811] text-[#FAF7F2] font-semibold'
                        : 'text-[#4A3E33] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span>{color}</span>
                    {color !== 'All' && (
                      <span
                        className="w-3 h-3 rounded-full border border-black/20"
                        style={{
                          backgroundColor:
                            color === 'Maroon' ? '#520D19' :
                            color === 'Black' ? '#141416' :
                            color === 'Gold' ? '#D4AF37' :
                            color === 'Emerald Green' ? '#0D3B2E' : '#0F1D38'
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Filter */}
            <div className="border-t border-[#F0E8DC] pt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3B0811] mb-2.5">
                Fabric Selection
              </label>
              <div className="space-y-1.5">
                {fabricOptions.map(fabric => (
                  <button
                    key={fabric}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`w-full text-left text-xs py-1.5 px-2.5 rounded transition-colors cursor-pointer ${
                      selectedFabric === fabric
                        ? 'bg-[#3B0811] text-[#FAF7F2] font-semibold'
                        : 'text-[#4A3E33] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {fabric}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="border-t border-[#F0E8DC] pt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3B0811] mb-2.5">
                Silhouette / Category
              </label>
              <div className="space-y-1.5">
                {categoryOptions.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left text-xs py-1.5 px-2.5 rounded transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#3B0811] text-[#FAF7F2] font-semibold'
                        : 'text-[#4A3E33] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="border-t border-[#F0E8DC] pt-4 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#3B0811]">Max Price</span>
                <span className="font-mono font-medium text-[#520D19]">${maxPriceUSD} USD</span>
              </div>
              <input
                type="range"
                min="100"
                max="300"
                step="10"
                value={maxPriceUSD}
                onChange={(e) => setMaxPriceUSD(Number(e.target.value))}
                className="w-full accent-[#520D19] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8A7969]">
                <span>$100</span>
                <span>$200</span>
                <span>$300</span>
              </div>
            </div>

            {/* Mirror Work Checkbox */}
            <div className="border-t border-[#F0E8DC] pt-4">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#3B0811] font-medium">
                <input
                  type="checkbox"
                  checked={onlyMirrorWork}
                  onChange={(e) => setOnlyMirrorWork(e.target.checked)}
                  className="rounded text-[#520D19] focus:ring-[#520D19] accent-[#520D19] w-4 h-4 cursor-pointer"
                />
                <span>Authentic Sheesha (Mirror Work) Only</span>
              </label>
            </div>

          </aside>

          {/* Product Grid Area (9 cols) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-[#E8DFD3] rounded p-12 text-center space-y-4">
                <p className="font-serif text-lg text-[#3B0811]">
                  No handcrafted creations found with the selected filters.
                </p>
                <p className="text-xs text-[#7A6B5C]">
                  Try clearing some filter criteria to explore the rest of the collection.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#3B0811] text-[#FAF7F2] px-6 py-2.5 text-xs font-semibold tracking-wider rounded uppercase hover:bg-[#520D19] cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white border border-[#E8DFD3] rounded-sm overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                  >
                    {/* Image Box */}
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
                        <div className="absolute top-2.5 left-2.5 bg-[#26050A] text-[#E5C158] border border-[#D4AF37]/50 text-[9px] font-bold tracking-widest px-2 py-0.5 uppercase shadow-sm">
                          {product.badge}
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openProductDetail(product);
                          }}
                          className="p-2.5 bg-white text-[#140407] rounded-full hover:bg-[#FAF7F2] shadow cursor-pointer"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product, 1);
                          }}
                          className="p-2.5 bg-[#3B0811] text-[#FAF7F2] rounded-full hover:bg-[#520D19] shadow cursor-pointer"
                          title="Add to Cart"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-[#7A6B5C]">
                          <span className="font-medium uppercase tracking-wider">{product.styleType}</span>
                          <span className="flex items-center gap-1 text-[#D4AF37]">
                            <Star className="w-3 h-3 fill-[#D4AF37]" />
                            <span className="text-[#140407] font-semibold">{product.rating}</span>
                          </span>
                        </div>

                        <h3
                          onClick={() => openProductDetail(product)}
                          className="font-serif text-base font-semibold text-[#140407] hover:text-[#520D19] mt-1 cursor-pointer truncate"
                        >
                          {product.title}
                        </h3>

                        <p className="text-[11px] text-[#8A7969] line-clamp-2 mt-1">
                          {product.subtitle}
                        </p>

                        <div className="mt-2 text-sm font-semibold text-[#520D19] font-mono tabular-nums">
                          {formatPrice(product.priceUSD, product.pricePKR)}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F0E8DC]">
                        <button
                          onClick={() => addToCart(product, 1)}
                          className="w-full bg-[#26050A] text-[#FAF7F2] py-1.5 text-xs font-semibold tracking-wider hover:bg-[#3B0811] transition-colors rounded-xs cursor-pointer uppercase"
                        >
                          Add to Bag
                        </button>

                        <a
                          href={generateWhatsAppOrderUrl(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#128C7E] text-white py-1.5 text-xs font-semibold tracking-wider hover:bg-[#075E54] transition-colors rounded-xs flex items-center justify-center gap-1 cursor-pointer uppercase"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
