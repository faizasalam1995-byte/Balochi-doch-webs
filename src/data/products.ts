import { Product } from '../types';

import dankoImg from '../assets/images/product_danko_maroon_1790789040485.jpg';
import quettaImg from '../assets/images/product_quetta_black_1790789054722.jpg';
import mehrgarhImg from '../assets/images/product_mehrgarh_crimson_1790789065719.jpg';
import craftImg from '../assets/images/craft_needlework_macro_1790789076917.jpg';
import heroImg from '../assets/images/hero_balochi_doch_vogue_1790789027352.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'danko-doch-maroon',
    title: 'Danko Doch Embroidered Suit',
    subtitle: 'Deep Maroon & Gold Hand-Stitched 3-Piece Heirloom',
    category: 'Unstitched 3-Piece',
    styleType: 'Danko Doch',
    priceUSD: 128,
    pricePKR: 35000,
    image: dankoImg,
    gallery: [dankoImg, craftImg, heroImg],
    description: 'A masterpiece of traditional Balochistan craftsmanship. Featuring the venerated Danko Doch technique with high-density gold zari threading and hand-set micro mirror sheesha work. Each geometric chevron is calculated by thread count without stencils.',
    fabric: 'Premium Lawn Cotton',
    color: 'Maroon',
    colorHex: '#520D19',
    mirrorWork: true,
    artisanDays: 52,
    stitchCount: '120,000+ hand stitches',
    artisanRegion: 'Mastung & Kalat, Balochistan',
    rating: 4.9,
    reviewCount: 128,
    inStock: true,
    badge: 'BEST SELLER',
    sku: 'BD-DK-01',
    availableSizes: ['Unstitched Fabric', 'Small (Stitched)', 'Medium (Stitched)', 'Large (Stitched)', 'Custom Tailored'],
    fabricYardage: {
      shirt: '3.0 Meters (with heavy embroidered front panel, sleeves & daman)',
      shalwar: '2.5 Meters (dyed premium cotton with embroidered cuffs)',
      dupatta: '2.75 Meters (chiffon with 4-sided embroidered jalar border)'
    },
    details: [
      '100% Hand-embroidered by Baloch women artisans',
      'Authentic round sheesha (mirror work) securely set with gold thread',
      'Finest 80s count combed Pakistani long-staple lawn cotton',
      'Dual-faced geometric border along neckline, sleeves, and daman',
      'Pre-shrunk, colorfast natural dye pigments'
    ]
  },
  {
    id: 'quetta-doch-kurta',
    title: 'Quetta Doch Kurta',
    subtitle: 'Onyx Black & Metallic Gold Artisanal Tunic',
    category: 'Kurta',
    styleType: 'Quetta Doch',
    priceUSD: 145,
    pricePKR: 40000,
    image: quettaImg,
    gallery: [quettaImg, craftImg, heroImg],
    description: 'Contemporary chic meets centuries of tribal pride. The Quetta Doch Kurta features an ornate medallion collar and neckline embroidered with lustrous antique gold thread on jet black fine cotton. Perfect for evening gatherings and cultural galas.',
    fabric: 'Premium Lawn Cotton',
    color: 'Black',
    colorHex: '#141416',
    mirrorWork: true,
    artisanDays: 38,
    stitchCount: '85,000+ hand stitches',
    artisanRegion: 'Quetta Valley Atelier, Balochistan',
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    badge: 'NEW IN',
    sku: 'BD-QT-02',
    availableSizes: ['Unstitched Cut', 'Small', 'Medium', 'Large', 'Extra Large'],
    fabricYardage: {
      shirt: '2.8 Meters (heavy embroidered front, collar, and cuffs)',
      shalwar: 'Included matching unstitched fabric (2.5m)',
      dupatta: 'Optional matching silk organza stole'
    },
    details: [
      'Original Quetta Doch needlecraft with elevated collar medallion',
      'Handcrafted miniature mirror embellishments reflecting light',
      'Breathable, ultra-soft combed lawn cotton base',
      'Contemporary straight silhouette with traditional cuff accents',
      'Dry clean recommended to preserve gold zari sheen'
    ]
  },
  {
    id: 'mehrgarh-doch-dress',
    title: 'Mehrgarh Doch Dress — Maroon',
    subtitle: 'Neolithic Geometric Motifs on Crimson Royal Georgette',
    category: 'Heavy Embroidery',
    styleType: 'Mehrgarh Doch',
    priceUSD: 135,
    pricePKR: 38000,
    image: mehrgarhImg,
    gallery: [mehrgarhImg, heroImg, craftImg],
    description: 'Echoing the 9,000-year-old neolithic symbols excavated at Mehrgarh, Balochistan. This creation showcases ancient stepped diamond motifs and ancestral tribal sun symbols woven with silk and gold threads over deep ruby maroon fabric.',
    fabric: 'Pure Georgette',
    color: 'Maroon',
    colorHex: '#6D1323',
    mirrorWork: true,
    artisanDays: 60,
    stitchCount: '150,000+ hand stitches',
    artisanRegion: 'Sibi & Kacchi Plains, Balochistan',
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    badge: 'LIMITED',
    sku: 'BD-MG-03',
    availableSizes: ['Unstitched 3-Piece', 'Small (Stitched)', 'Medium (Stitched)', 'Large (Stitched)'],
    fabricYardage: {
      shirt: '3.2 Meters pure georgette with full embroidered front',
      shalwar: '2.5 Meters raw silk trousers',
      dupatta: '2.75 Meters georgette with embroidered pallu and all-over booti'
    },
    details: [
      'Authentic archaeological geometric stepped patterns',
      'Real sheesha mirror inlay framed by double-knotted gold thread',
      'Semi-sheer luxury georgette paired with unstitched lining fabric',
      'Heirloom bridal and formal wear quality',
      'Certificate of Artisan Provenance included'
    ]
  },
  {
    id: 'kalat-sheesha-doch-gold',
    title: 'Kalat Royal Sheesha Doch',
    subtitle: 'Sunlit Gold & Ochre Embroidered Formal Dress',
    category: 'Heavy Embroidery',
    styleType: 'Kalat Sheesha Doch',
    priceUSD: 165,
    pricePKR: 46000,
    image: craftImg,
    gallery: [craftImg, dankoImg, heroImg],
    description: 'The crowning jewel of Khanate court embroidery. Kalat Sheesha Doch is famed for its dense clustering of over 400 micro-mirrors on the chest panel, creating a dazzling armour-like tapestry of light and tribal geometry.',
    fabric: 'Handloom Raw Silk',
    color: 'Gold',
    colorHex: '#D4AF37',
    mirrorWork: true,
    artisanDays: 75,
    stitchCount: '190,000+ hand stitches',
    artisanRegion: 'Kalat District, Balochistan',
    rating: 5.0,
    reviewCount: 52,
    inStock: true,
    badge: 'HERITAGE MASTERPIECE',
    sku: 'BD-KL-04',
    availableSizes: ['Unstitched 3-Piece', 'Custom Tailored'],
    fabricYardage: {
      shirt: '3.5 Meters handloom raw silk with heavy chest doch (petti)',
      shalwar: '2.5 Meters pure raw silk',
      dupatta: '3.0 Meters organza with gold zari borders'
    },
    details: [
      '400+ genuine micro-mirrors hand-stitched into the bodice panel',
      'Pure silk thread work on handloom woven raw silk fabric',
      'Authentic Kalat court pattern documented in historical archives',
      'Includes handcrafted fabric buttons and matching sleeve tassels',
      'Packed in a bespoke wooden keepsake box'
    ]
  },
  {
    id: 'makrani-zari-kurta',
    title: 'Makrani Zari Doch Kurta',
    subtitle: 'Midnight Black & Deep Ochre Coastal Embroidery',
    category: 'Kurta',
    styleType: 'Makrani Zari Doch',
    priceUSD: 115,
    pricePKR: 32000,
    image: quettaImg,
    gallery: [quettaImg, dankoImg],
    description: 'Inspired by the coastal winds and maritime trade of the Makran coast. Features open geometric lattice work combined with dense running doch stitch in warm ochre, ivory, and burnished gold.',
    fabric: 'Premium Lawn Cotton',
    color: 'Black',
    colorHex: '#1B1B1F',
    mirrorWork: false,
    artisanDays: 32,
    stitchCount: '65,000+ hand stitches',
    artisanRegion: 'Gwadar & Turbat, Balochistan',
    rating: 4.7,
    reviewCount: 46,
    inStock: true,
    sku: 'BD-MK-05',
    availableSizes: ['Unstitched Fabric', 'Small', 'Medium', 'Large'],
    fabricYardage: {
      shirt: '2.75 Meters fine cotton with embroidered neckline and front panel',
      shalwar: '2.5 Meters solid black cotton',
      dupatta: '2.5 Meters light cotton voile'
    },
    details: [
      'Coastal Makrani thread count embroidery',
      'Ultra-lightweight high-twist lawn cotton perfect for all seasons',
      'Clean modern neckline with subtle slit and gold border',
      'Machine-washable on gentle cycle with cold water',
      'Versatile styling: pair with traditional trousers or modern denim'
    ]
  },
  {
    id: 'sibi-geometric-emerald',
    title: 'Sibi Geometric Doch Dress',
    subtitle: 'Emerald Green & Copper Thread Artisan Ensemble',
    category: 'Unstitched 3-Piece',
    styleType: 'Sibi Geometric',
    priceUSD: 138,
    pricePKR: 39000,
    image: mehrgarhImg,
    gallery: [mehrgarhImg, dankoImg, craftImg],
    description: 'A striking emerald green composition featuring the bold zig-zag and triangle motifs of the historical Sibi craftsmen. Accented with copper zari and delicate center mirror discs.',
    fabric: 'Pure Georgette',
    color: 'Emerald Green',
    colorHex: '#0D3B2E',
    mirrorWork: true,
    artisanDays: 48,
    stitchCount: '110,000+ hand stitches',
    artisanRegion: 'Sibi & Bolan Pass, Balochistan',
    rating: 4.8,
    reviewCount: 37,
    inStock: true,
    badge: 'NEW IN',
    sku: 'BD-SB-06',
    availableSizes: ['Unstitched 3-Piece', 'Small (Stitched)', 'Medium (Stitched)', 'Large (Stitched)'],
    fabricYardage: {
      shirt: '3.0 Meters rich emerald georgette',
      shalwar: '2.5 Meters matching silk cotton',
      dupatta: '2.75 Meters georgette with hand-finished borders'
    },
    details: [
      'Vibrant jewel-tone emerald green with antique gold needlework',
      'Traditional Bolan pass chevron and triangle needle patterns',
      'Real sheesha mirrors stitched with locking border technique',
      'Full unstitched 3-piece suit with tailoring guide included',
      'Breathable, premium georgette fabric with graceful drape'
    ]
  },
  {
    id: 'royal-bridal-doch-maroon',
    title: 'Baloch Royal Bridal Doch — Grand Heirloom',
    subtitle: 'Pure Velvet & Heavy 24k Gold Zari Handcrafted Bridal',
    category: 'Royal Bridal',
    styleType: 'Kalat Sheesha Doch',
    priceUSD: 295,
    pricePKR: 82000,
    image: heroImg,
    gallery: [heroImg, craftImg, dankoImg],
    description: 'The pinnacle of Baloch wedding couture. Woven on sumptuous micro-velvet with genuine 24-karat gold-wrapped thread and over 800 hand-set mirrors. Taking a senior guild of 3 master women artisans over 90 continuous days to complete.',
    fabric: 'Velvet',
    color: 'Maroon',
    colorHex: '#3B0811',
    mirrorWork: true,
    artisanDays: 95,
    stitchCount: '280,000+ hand stitches',
    artisanRegion: 'Master Guild Atelier, Quetta',
    rating: 5.0,
    reviewCount: 31,
    inStock: true,
    badge: 'HERITAGE MASTERPIECE',
    sku: 'BD-RB-07',
    availableSizes: ['Unstitched Bridal Cut', 'Bespoke Custom Tailored to Measurements'],
    fabricYardage: {
      shirt: '3.5 Meters heavy embroidered velvet with front pouch doch (pandool)',
      shalwar: '3.0 Meters pure silk velvet with heavy cuff borders (gwaft)',
      dupatta: '3.25 Meters pure tissue silk with 5-inch heavy embroidered border'
    },
    details: [
      'Complete traditional bridal chogha with front pandool pouch doch',
      'Over 800 hand-set sheesha mirrors reflecting wedding lights',
      'Heavy gold zari with metallic thread that does not tarnish',
      'Complimentary virtual video consultation with master tailor',
      'Delivered in an archival cedar wood bridal chest'
    ]
  },
  {
    id: 'danko-midnight-navy',
    title: 'Danko Doch Festive Suit — Midnight Navy',
    subtitle: 'Navy Blue & Burnished Gold Mirror Work Ensemble',
    category: 'Unstitched 3-Piece',
    styleType: 'Danko Doch',
    priceUSD: 128,
    pricePKR: 35000,
    image: dankoImg,
    gallery: [dankoImg, quettaImg, craftImg],
    description: 'A regal midnight navy iteration of the classic Danko Doch. Deep indigo blue contrasted against lustrous gold thread creates an arresting, timeless statement for formal dinners and festive celebrations.',
    fabric: 'Premium Lawn Cotton',
    color: 'Navy Blue',
    colorHex: '#0F1D38',
    mirrorWork: true,
    artisanDays: 50,
    stitchCount: '115,000+ hand stitches',
    artisanRegion: 'Kalat, Balochistan',
    rating: 4.9,
    reviewCount: 65,
    inStock: true,
    badge: 'BEST SELLER',
    sku: 'BD-DK-08',
    availableSizes: ['Unstitched 3-Piece', 'Small (Stitched)', 'Medium (Stitched)', 'Large (Stitched)'],
    fabricYardage: {
      shirt: '3.0 Meters fine lawn with heavy gold front',
      shalwar: '2.5 Meters coordinating dyed lawn',
      dupatta: '2.75 Meters printed & embroidered chiffon'
    },
    details: [
      'Deep midnight navy hue with double-strand gold threadwork',
      'Over 250 micro mirrors hand-stitched into geometric tiers',
      'Silky smooth 100% long-staple cotton lawn',
      'Complete 3-piece unstitched ensemble with ample tailoring fabric',
      'Includes authentic artisan signature card'
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'all',
    name: 'All Creations',
    count: 8,
    description: 'Explore our complete collection of authentic handcrafted Balochi Doch dresses.'
  },
  {
    id: 'unstitched',
    name: 'Unstitched 3-Piece',
    count: 3,
    description: 'Traditional 3-piece fabric sets (Shirt, Shalwar, Heavy Dupatta) with full doch panels ready for custom tailoring.'
  },
  {
    id: 'kurta',
    name: 'Kurta & Tunics',
    count: 2,
    description: 'Contemporary silhouettes adorned with intricate Balochi neckline, collar, and cuff embroidery.'
  },
  {
    id: 'heavy-embroidery',
    name: 'Heavy Embroidery',
    count: 2,
    description: 'Densely hand-stitched museum-grade creations with elaborate mirror work and historic motifs.'
  },
  {
    id: 'royal-bridal',
    name: 'Royal Bridal Doch',
    count: 1,
    description: 'Grand heirlooms woven on pure velvet and raw silk with gold zari, requiring up to 90 days of artisan mastery.'
  }
];
