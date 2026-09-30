import React from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ShieldCheck, Users, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_balochi_doch_vogue_1790789027352.jpg';
import craftImg from '../assets/images/craft_needlework_macro_1790789076917.jpg';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useShop();

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#26050A] px-3.5 py-1 text-[11px] tracking-[0.25em] font-semibold text-[#E5C158] uppercase">
            <span>OUR HERITAGE & PURPOSE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#3B0811] font-semibold tracking-wide">
            About Balochi Doch
          </h1>
          <p className="text-sm sm:text-base text-[#6E5D4E] leading-relaxed">
            Founded with a singular devotion: to honor the ancestral needlework of Balochistan and ensure that the women who carry this genius receive the global honor and dignity they deserve.
          </p>
        </div>

        {/* Section 1: The Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#8C1A30] uppercase">
              Ancestral Roots
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#140407]">
              Preserving a 9,000-Year Textile Sanctuary
            </h2>
            <div className="space-y-3 text-sm text-[#4A3E33] leading-relaxed">
              <p>
                Balochi Doch is not an industrial trade; it is an inheritance. For centuries, across the rugged mountain expanses of Kalat, Mastung, Makran, and Sibi, Baloch women have transformed cotton cloth into canvases of cosmic balance and tribal poetry.
              </p>
              <p>
                In an era dominated by synthetic fast fashion and machine-printed replicas, the painstaking craft of thread-counted Doch was at risk of being degraded by exploitative middlemen who paid pennies while selling suits at luxury premiums.
              </p>
              <p>
                <strong>BALOCHI DOCH</strong> was established to dismantle this unfair dynamic. We bridged the gap directly between mountain artisan hearths and discerning international patrons who revere authentic cultural couture.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded overflow-hidden border border-[#D4AF37]/50 shadow-xl group">
              <img
                src={heroImg}
                alt="Balochi Doch Heritage Collection Model"
                className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs">
                <p className="font-serif text-base font-semibold">The Spirit of Balochistan</p>
                <p className="text-[#E5C158] text-[11px]">Rugged landscapes, timeless elegance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission to Support Baloch Artisans */}
        <div className="bg-[#26050A] text-[#FAF7F2] rounded-lg p-8 sm:p-12 border border-[#3B0811] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-balochi-pattern pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#160306] px-3 py-1 text-[10px] tracking-[0.2em] font-semibold text-[#E5C158] uppercase">
              ETHICAL MANIFESTO
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-semibold">
              Our Mission: Empowering Baloch Women Directly
            </h2>

            <p className="text-sm sm:text-base text-[#D9CFC4] leading-relaxed max-w-2xl mx-auto">
              We operate on a radical fair-trade ethos. By eliminating broker networks, up to <strong>65% of the dress commission is directly disbursed to the artisan guild</strong> before and upon completion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              <div className="p-5 bg-[#1F060B] border border-[#3B0811] rounded">
                <Heart className="w-5 h-5 text-[#E5C158] mb-2" />
                <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">Dignified Living Wage</h4>
                <p className="text-xs text-[#C4B7A6] mt-1 leading-relaxed">
                  Every artisan is compensated at 3x the regional minimum wage, providing financial autonomy and household security.
                </p>
              </div>

              <div className="p-5 bg-[#1F060B] border border-[#3B0811] rounded">
                <Users className="w-5 h-5 text-[#E5C158] mb-2" />
                <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">Education for Daughters</h4>
                <p className="text-xs text-[#C4B7A6] mt-1 leading-relaxed">
                  A portion of every purchase funds literacy and school supplies for the daughters of Baloch village crafters.
                </p>
              </div>

              <div className="p-5 bg-[#1F060B] border border-[#3B0811] rounded">
                <ShieldCheck className="w-5 h-5 text-[#E5C158] mb-2" />
                <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">Archival Preservation</h4>
                <p className="text-xs text-[#C4B7A6] mt-1 leading-relaxed">
                  We document and catalogue endangered stitches before they are lost to time, recording oral histories with elder masters.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Impact Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white border border-[#E8DFD3] rounded shadow-xs">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#520D19] block">
              350+
            </span>
            <span className="text-xs text-[#6E5D4E] mt-1 block">Active Women Artisans</span>
          </div>

          <div className="p-6 bg-white border border-[#E8DFD3] rounded shadow-xs">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#520D19] block">
              42
            </span>
            <span className="text-xs text-[#6E5D4E] mt-1 block">Supported Village Collectives</span>
          </div>

          <div className="p-6 bg-white border border-[#E8DFD3] rounded shadow-xs">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#520D19] block">
              18,000+
            </span>
            <span className="text-xs text-[#6E5D4E] mt-1 block">Hours of Needlecraft Sustained</span>
          </div>

          <div className="p-6 bg-white border border-[#E8DFD3] rounded shadow-xs">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#520D19] block">
              0%
            </span>
            <span className="text-xs text-[#6E5D4E] mt-1 block">Middlemen Markups</span>
          </div>
        </div>

        {/* Section 4: Visit our Ateliers Callout */}
        <div className="p-8 bg-[#FAF2E6] border border-[#E5DACB] rounded flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-semibold text-[#140407]">
              Experience the Ateliers in Quetta & Karachi
            </h3>
            <p className="text-xs sm:text-sm text-[#6E5D4E]">
              We welcome patrons, researchers, and bespoke bridal clients to meet our master tailors and examine archival textile swatches in person.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-[#26050A] text-[#FAF7F2] px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#3B0811] transition-colors cursor-pointer shrink-0"
          >
            Schedule Atelier Visit
          </button>
        </div>

      </div>
    </div>
  );
};
