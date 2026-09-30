import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { JOURNAL_ARTICLES } from '../data/journal';
import { BALOCHI_MOTIFS } from '../data/motifs';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    openProductDetail,
    openArticleDetail,
    formatPrice
  } = useShop();

  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'articles' | 'motifs'>('all');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return PRODUCTS.slice(0, 4);
    const q = searchQuery.toLowerCase();
    return PRODUCTS.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return JOURNAL_ARTICLES.slice(0, 2);
    const q = searchQuery.toLowerCase();
    return JOURNAL_ARTICLES.filter(
      a =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredMotifs = useMemo(() => {
    if (!searchQuery.trim()) return BALOCHI_MOTIFS.slice(0, 3);
    const q = searchQuery.toLowerCase();
    return BALOCHI_MOTIFS.filter(
      m =>
        m.name.toLowerCase().includes(q) ||
        m.meaning.toLowerCase().includes(q) ||
        m.symbolism.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 pb-10">
      <div className="bg-[#FAF7F2] w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden border border-[#D4AF37]/30">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-[#26050A] border-b border-[#3B0811] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Balochi Doch (e.g. Danko, Mehrgarh, Kurta, Maroon, Mirror)..."
            autoFocus
            className="flex-1 bg-transparent text-[#FAF7F2] placeholder-[#A89886] text-sm focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#C4B7A6] hover:text-[#FAF7F2] px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-[#C4B7A6] hover:text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="bg-[#F3ECE0] px-5 py-2.5 border-b border-[#E5DACB] flex items-center gap-2 overflow-x-auto text-xs text-[#520D19]">
          <span className="text-[#8A7969] shrink-0 font-medium">Quick:</span>
          {['Danko Doch', 'Quetta Kurta', 'Mehrgarh', 'Mirror Work', 'Unstitched 3-Piece'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-2.5 py-1 bg-white border border-[#D5C9B8] rounded hover:border-[#520D19] transition-colors shrink-0 text-xs cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Products Results */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-cinzel text-xs font-bold tracking-[0.16em] text-[#3B0811] uppercase">
                Handcrafted Dresses & Kurtas ({filteredProducts.length})
              </h3>
            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-xs text-[#8A7969] italic">No dresses found matching &ldquo;{searchQuery}&rdquo;</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map(p => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      openProductDetail(p);
                    }}
                    className="flex gap-3 p-2.5 bg-white border border-[#E8DFD3] rounded hover:border-[#D4AF37] transition-colors cursor-pointer group"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-16 h-18 object-cover rounded bg-[#F8F5F0]"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <span className="text-[10px] tracking-wider uppercase text-[#8A7969] font-medium truncate">
                        {p.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-[#140407] group-hover:text-[#520D19] truncate">
                        {p.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#520D19] mt-0.5 tabular-nums">
                        {formatPrice(p.priceUSD, p.pricePKR)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Heritage Articles Results */}
          {filteredArticles.length > 0 && (
            <div className="border-t border-[#E8DFD3] pt-4">
              <h3 className="font-cinzel text-xs font-bold tracking-[0.16em] text-[#3B0811] uppercase mb-3">
                Heritage Journal ({filteredArticles.length})
              </h3>
              <div className="space-y-2">
                {filteredArticles.map(a => (
                  <div
                    key={a.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      openArticleDetail(a);
                    }}
                    className="p-3 bg-white border border-[#E8DFD3] rounded hover:border-[#D4AF37] cursor-pointer flex items-center justify-between group"
                  >
                    <div className="min-w-0 pr-4">
                      <h4 className="font-serif text-sm font-semibold text-[#140407] group-hover:text-[#520D19] truncate">
                        {a.title}
                      </h4>
                      <p className="text-xs text-[#7A6B5C] truncate">{a.excerpt}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Motifs Results */}
          {filteredMotifs.length > 0 && (
            <div className="border-t border-[#E8DFD3] pt-4">
              <h3 className="font-cinzel text-xs font-bold tracking-[0.16em] text-[#3B0811] uppercase mb-3">
                Cultural Motifs & Geometry
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {filteredMotifs.map(m => (
                  <div key={m.id} className="p-2.5 bg-white border border-[#E8DFD3] rounded text-xs">
                    <p className="font-semibold text-[#520D19]">{m.name}</p>
                    <p className="text-[11px] text-[#7A6B5C] mt-1">{m.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
