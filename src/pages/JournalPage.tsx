import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { JOURNAL_ARTICLES } from '../data/journal';
import { JournalArticle } from '../types';
import { Clock, Calendar, User, ArrowRight, Share2, ArrowLeft, Bookmark } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const { selectedArticle, setSelectedArticle, setCurrentPage, showToast } = useShop();
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(selectedArticle || JOURNAL_ARTICLES[0]);
  const [isReadingMode, setIsReadingMode] = useState<boolean>(false);

  const handleReadArticle = (article: JournalArticle) => {
    setActiveArticle(article);
    setSelectedArticle(article);
    setIsReadingMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Article link copied to clipboard.');
  };

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If in Reading Mode: Show full article */}
        {isReadingMode && activeArticle ? (
          <article className="max-w-3xl mx-auto bg-white border border-[#E8DFD3] rounded p-6 sm:p-12 shadow-xs space-y-8">
            {/* Back button */}
            <button
              onClick={() => setIsReadingMode(false)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#520D19] hover:text-[#3B0811] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Journal Archive</span>
            </button>

            {/* Article Header */}
            <div className="space-y-3 border-b border-[#F0E8DC] pb-6">
              <div className="flex items-center gap-3 text-xs text-[#8A7969]">
                <span className="font-semibold text-[#520D19] uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArticle.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#140407] font-semibold leading-tight">
                {activeArticle.title}
              </h1>

              <p className="font-serif text-lg text-[#6E5D4E] italic">
                {activeArticle.subtitle}
              </p>

              <div className="flex items-center justify-between pt-3 text-xs text-[#7A6B5C]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF2E6] border border-[#D4AF37]/50 flex items-center justify-center font-bold text-[#520D19]">
                    {activeArticle.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-[#140407] block">{activeArticle.author}</span>
                    <span className="text-[11px] text-[#8A7969]">{activeArticle.authorRole}</span>
                  </div>
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 p-2 bg-[#FAF7F2] rounded hover:bg-[#F2EAE0] transition-colors cursor-pointer text-xs"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded overflow-hidden border border-[#E8DFD3]">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pull Quote if available */}
            {activeArticle.quote && (
              <blockquote className="p-6 bg-[#FAF2E6] border-l-4 border-[#520D19] font-serif text-lg italic text-[#3B0811] rounded-r leading-relaxed">
                &ldquo;{activeArticle.quote}&rdquo;
              </blockquote>
            )}

            {/* Article Prose Content */}
            <div className="space-y-5 text-base text-[#3A2E26] leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Article Footer with Related CTA */}
            <div className="pt-8 border-t border-[#F0E8DC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {activeArticle.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs bg-[#FAF7F2] text-[#520D19] border border-[#E8DFD3] px-2.5 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#26050A] text-[#FAF7F2] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#3B0811] transition-colors cursor-pointer shrink-0"
              >
                Shop Handcrafted Dresses
              </button>
            </div>
          </article>
        ) : (
          /* Journal Grid Overview */
          <div className="space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#26050A] px-3.5 py-1 text-[11px] tracking-[0.25em] font-semibold text-[#E5C158] uppercase">
                <span>EDITORIAL & ESSAYS</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#3B0811] font-semibold tracking-wide">
                The Balochi Doch Journal
              </h1>
              <p className="text-sm sm:text-base text-[#6E5D4E] leading-relaxed">
                In-depth essays on prehistoric needlework lineages, styling guides for modern celebrations, and preservation secrets of Baloch textile lore.
              </p>
            </div>

            {/* Lead Article (Featured) */}
            {JOURNAL_ARTICLES[0] && (
              <div
                onClick={() => handleReadArticle(JOURNAL_ARTICLES[0])}
                className="bg-white border border-[#E8DFD3] rounded overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
              >
                <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={JOURNAL_ARTICLES[0].image}
                    alt={JOURNAL_ARTICLES[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#8A7969]">
                      <span className="font-semibold text-[#520D19] uppercase tracking-wider">
                        {JOURNAL_ARTICLES[0].category}
                      </span>
                      <span>•</span>
                      <span>{JOURNAL_ARTICLES[0].readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#140407] group-hover:text-[#520D19] transition-colors leading-snug">
                      {JOURNAL_ARTICLES[0].title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#6E5D4E] leading-relaxed">
                      {JOURNAL_ARTICLES[0].excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0E8DC] flex items-center justify-between">
                    <span className="text-xs text-[#8A7969] font-medium">
                      By {JOURNAL_ARTICLES[0].author}
                    </span>
                    <span className="text-xs font-semibold text-[#520D19] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Essay <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {JOURNAL_ARTICLES.slice(1).map(article => (
                <div
                  key={article.id}
                  onClick={() => handleReadArticle(article)}
                  className="bg-white border border-[#E8DFD3] rounded overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#F8F5F0]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-[#8A7969]">
                        <span className="font-semibold text-[#520D19] uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-serif text-lg font-semibold text-[#140407] group-hover:text-[#520D19] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#6E5D4E] line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-xs">
                      <span className="text-[#8A7969]">By {article.author}</span>
                      <span className="font-semibold text-[#520D19] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
