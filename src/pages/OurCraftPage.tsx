import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { BALOCHI_MOTIFS } from '../data/motifs';
import { BalochiMotif } from '../types';
import { Sparkles, Scissors, Eye, Compass, Heart, ArrowRight } from 'lucide-react';

import craftImg from '../assets/images/craft_needlework_macro_1790789076917.jpg';
import heroImg from '../assets/images/hero_balochi_doch_vogue_1790789027352.jpg';

export const OurCraftPage: React.FC = () => {
  const { setCurrentPage } = useShop();
  const [selectedMotif, setSelectedMotif] = useState<BalochiMotif>(BALOCHI_MOTIFS[0]);

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Narrative Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#26050A] px-3.5 py-1 text-[11px] tracking-[0.25em] font-semibold text-[#E5C158] uppercase">
            <span>THE LIVING HERITAGE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#3B0811] font-semibold tracking-wide">
            Our Craft & The Art of Doch
          </h1>
          <p className="text-sm sm:text-base text-[#6E5D4E] leading-relaxed">
            A sacred legacy woven by Baloch women artisans for centuries. Where ancient mathematics, tribal philosophy, and desert light are etched into pure cotton and silk.
          </p>
        </div>

        {/* Story 1: The Baloch Women Artisans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#8C1A30] uppercase">
              The Keepers of the Needle
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#140407]">
              The Baloch Women Artisans
            </h2>
            <div className="space-y-3 text-sm text-[#4A3E33] leading-relaxed">
              <p>
                In the mountain valleys and arid highlands of Balochistan, the art of <em>Doch</em> belongs entirely to women. Inside stone courtyards and nomadic dwellings (Gidan), mothers introduce their daughters to the needle before they even learn to read or write.
              </p>
              <p>
                What astounds textile historians worldwide is that <strong>no stencils, rulers, tracing carbon, or pre-printed outlines</strong> are ever used. The artisan sits with a piece of unadorned fabric and calculates the exact geometric coordinates purely by counting warp and weft fibers with her fingers and sharp eyesight.
              </p>
              <p>
                A single heirloom Balochi dress requires anywhere from <strong>40 to 90 days of continuous dedication</strong>, comprising over 100,000 microscopic hand stitches. It is an act of deep meditation, familial love, and cultural preservation.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-3 bg-white border border-[#E8DFD3] rounded">
                <span className="text-xl font-serif font-bold text-[#520D19] block">100%</span>
                <span className="text-xs text-[#6E5D4E]">Thread-Counted by Memory</span>
              </div>
              <div className="p-3 bg-white border border-[#E8DFD3] rounded">
                <span className="text-xl font-serif font-bold text-[#520D19] block">350+</span>
                <span className="text-xs text-[#6E5D4E]">Artisans in our Co-op</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded overflow-hidden border border-[#D4AF37]/50 shadow-xl group">
              <img
                src={craftImg}
                alt="Baloch Woman Artisan stitching Doch needlework"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs">
                <p className="font-semibold">Master Artisan Bano Bibi</p>
                <p className="text-[#E5C158] text-[11px]">Mastung Guild Atelier, Balochistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story 2: Centuries-Old Geometric Patterns (Mehrgarh Lineage) */}
        <div className="bg-[#26050A] text-[#FAF7F2] rounded-lg p-8 sm:p-12 border border-[#3B0811] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-balochi-pattern pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E5C158] uppercase">
              Centuries-Old Lineage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-semibold">
              From Mehrgarh (7000 BCE) to the Living Present
            </h2>
            <p className="text-sm text-[#D9CFC4] leading-relaxed">
              Balochi Doch does not derive from colonial or imperial courts; its roots are prehistoric. Archaeological discoveries at <strong>Mehrgarh</strong>, situated in the Kacchi plain near the Bolan Pass, reveal that cotton spun with bone needles and stamped with terracotta geometric seals existed in Balochistan over 9,000 years ago.
            </p>
            <p className="text-sm text-[#D9CFC4] leading-relaxed">
              The stepped diamond shapes, concentric squares, and solar emblems found on ancient pottery fragments correspond with precision to the stitches named <em>Kappuk</em>, <em>Kantuk</em>, and <em>Mosom</em> seen on our modern Doch creations today. It is one of the oldest unbroken textile languages surviving on our planet.
            </p>
          </div>
        </div>

        {/* Interactive Motif Decryption Explorer */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-[#8C1A30] uppercase">
              THE VISUAL VOCABULARY
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#140407]">
              Decode the Geometric Motifs of Doch
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5D4E]">
              Click on each traditional motif below to discover its tribal symbolism and origin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Motifs List (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {BALOCHI_MOTIFS.map(motif => {
                const isSelected = selectedMotif.id === motif.id;
                return (
                  <button
                    key={motif.id}
                    onClick={() => setSelectedMotif(motif)}
                    className={`w-full text-left p-4 rounded border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#3B0811] text-[#FAF7F2] border-[#D4AF37] shadow-md'
                        : 'bg-white text-[#140407] border-[#E8DFD3] hover:border-[#D4AF37]'
                    }`}
                  >
                    <div>
                      <h4 className="font-serif text-base font-semibold">
                        {motif.name}
                      </h4>
                      <p className={`text-xs mt-0.5 ${isSelected ? 'text-[#D4AF37]' : 'text-[#7A6B5C]'}`}>
                        {motif.meaning}
                      </p>
                    </div>
                    <span className="font-serif text-xl font-bold opacity-80">
                      {motif.nativeScript}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Motif Deep Dive (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#E8DFD3] rounded p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#F0E8DC] pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8C1A30]">
                    Region: {selectedMotif.region}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#140407] mt-1">
                    {selectedMotif.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-[#520D19]">
                    {selectedMotif.nativeScript}
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#4A3E33]">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#140407] mb-1">
                    Cultural Meaning & Lineage
                  </h5>
                  <p className="leading-relaxed">{selectedMotif.meaning}</p>
                </div>

                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#140407] mb-1">
                    Tribal Symbolism
                  </h5>
                  <p className="leading-relaxed">{selectedMotif.symbolism}</p>
                </div>

                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#140407] mb-1">
                    Visual & Needlework Execution
                  </h5>
                  <p className="leading-relaxed">{selectedMotif.visualFeature}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0E8DC] flex justify-between items-center">
                <span className="text-xs text-[#6E5D4E] italic">
                  Featured in our Danko Doch & Mehrgarh collections.
                </span>
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="bg-[#26050A] text-[#FAF7F2] text-xs px-4 py-2 rounded hover:bg-[#3B0811] transition-colors flex items-center gap-1.5 cursor-pointer uppercase font-semibold"
                >
                  <span>Explore Pieces</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Anatomy of Balochi Dress */}
        <div className="bg-[#FAF2E6] border border-[#E5DACB] rounded p-8 sm:p-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#140407] font-semibold">
              The Anatomy of a Traditional Balochi Chogha
            </h3>
            <p className="text-xs sm:text-sm text-[#6E5D4E]">
              Every zone of the dress holds functional and spiritual importance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white border border-[#E8DFD3] rounded space-y-2">
              <span className="font-cinzel text-xs font-bold text-[#8C1A30] uppercase block">
                01. Petti (Bodice)
              </span>
              <p className="text-xs text-[#4A3E33]">
                The breastplate panel featuring the dense cluster of mirrors and geometric chevrons that shield the wearer.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E8DFD3] rounded space-y-2">
              <span className="font-cinzel text-xs font-bold text-[#8C1A30] uppercase block">
                02. Pandool (Front Pocket)
              </span>
              <p className="text-xs text-[#4A3E33]">
                The iconic large triangular pouch extending from waist to knees, historically used to hold fragrant herbs, keys, and treats.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E8DFD3] rounded space-y-2">
              <span className="font-cinzel text-xs font-bold text-[#8C1A30] uppercase block">
                03. Astin (Sleeve Cuffs)
              </span>
              <p className="text-xs text-[#4A3E33]">
                Tight geometric border stitches running along both wrist cuffs, highlighting graceful hand gestures and jewelry.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E8DFD3] rounded space-y-2">
              <span className="font-cinzel text-xs font-bold text-[#8C1A30] uppercase block">
                04. Gwaft (Hemline)
              </span>
              <p className="text-xs text-[#4A3E33]">
                Continuous undulating river and mountain patterns that anchor the skirt hemline with heavy gold zari threads.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
