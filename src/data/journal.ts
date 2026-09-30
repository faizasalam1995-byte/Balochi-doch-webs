import { JournalArticle } from '../types';
import heroImg from '../assets/images/hero_balochi_doch_vogue_1790789027352.jpg';
import craftImg from '../assets/images/craft_needlework_macro_1790789076917.jpg';
import dankoImg from '../assets/images/product_danko_maroon_1790789040485.jpg';
import mehrgarhImg from '../assets/images/product_mehrgarh_crimson_1790789065719.jpg';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'history-of-balochi-embroidery',
    title: 'History of Balochi Embroidery: From Mehrgarh to Modern Runways',
    slug: 'history-of-balochi-embroidery',
    subtitle: 'Tracing the 9,000-year lineage of geometric needlecraft in the valleys of Balochistan',
    excerpt: 'Long before modern textile printing and automated looms, the women of Balochistan encoded their nomadic history, cosmic beliefs, and desert geography into intricate thread counts.',
    author: 'Zarmina Baloch',
    authorRole: 'Textile Historian & Cultural Curator',
    date: 'October 14, 2026',
    readTime: '6 min read',
    category: 'Heritage & History',
    image: heroImg,
    tags: ['History', 'Mehrgarh', 'Embroidery', 'Baloch Culture'],
    quote: 'To touch an authentic Balochi Doch dress is to touch a living map of antiquity — a continuous conversation between mothers, daughters, and their mountainous terrain.',
    content: [
      'Archaeological excavations at Mehrgarh, nestled at the foot of the Bolan Pass, reveal that cotton cultivation, spinning whorls, and geometric terracotta seals existed in Balochistan as early as 7,000 BCE. The geometric motifs that adorn contemporary Balochi Doch dresses share uncanny mathematical similarities with those ancient Neolithic pottery patterns.',
      'Unlike royal Mughal needlework which was sponsored by imperial city courts, Balochi Doch has always belonged entirely to women. It was conceived inside nomadic tents (Gidan) and mud-brick compounds under the starry desert sky. Without stencils, tracing paper, or rulers, Baloch girls learned Doch from their mothers and grandmothers purely by counting the warps and wefts of fabric threads.',
      'Historically, each Baloch tribe and district developed signature stitches. In Kalat and Mastung, heavy mirror work (Sheesha) predominated to reflect daylight. In coastal Makran, fine silken thread work and maritime geometries flourished. Today, Balochi Doch has stepped from mountain homesteads onto global fashion runways in Paris, Milan, and Dubai, revered as one of the most intricate needlecrafts on earth.'
    ]
  },
  {
    id: 'how-to-style-doch',
    title: 'How to Style Doch: 5 Ways to Wear Traditional Balochi Embroidery for Modern Events',
    slug: 'how-to-style-doch',
    subtitle: 'From black-tie galas to intimate dinners, bridging ancient craft with modern elegance',
    excerpt: 'Balochi Doch carries an commanding presence. Here is our master stylist guide on pairing traditional Doch pieces with modern silhouettes, minimalist jewelry, and contemporary footwear.',
    author: 'Faiza Al-Baloshi',
    authorRole: 'Senior Stylist & Atelier Lead',
    date: 'September 22, 2026',
    readTime: '5 min read',
    category: 'Styling Guide',
    image: dankoImg,
    tags: ['Styling', 'Contemporary Fashion', 'Luxury Wear', 'Event Dressing'],
    quote: 'The secret to styling Balochi Doch is allowing the needlework to breathe. When the dress contains 100,000 hand stitches, let everything else serve as its quiet frame.',
    content: [
      '1. The High-Contrast Evening Look: Pair an unstitched Quetta Doch Kurta in jet black with straight-leg silk trousers and structured stiletto heels. Keep jewelry minimal — a single gold cuff bracelet or geometric gold hoops that echo the neckline embroidery.',
      '2. Festive Traditional Wedding Elegance: For bridal soirees or cultural celebrations, wear the full 3-piece Danko Doch suit with its voluminous dupatta draped over one shoulder. Style your hair in a soft low bun and add traditional Baloch chandelier earrings (Dor).',
      '3. Contemporary Layering with Tailored Overcoats: In cooler autumn and winter evenings, a Balochi embroidered chadar or heavy Doch kurta worn beneath a tailored wool trench coat creates a breathtaking, cosmopolitan juxtaposition between artisanal ethnic richness and sleek modern tailoring.',
      '4. Daytime Casual Luxury: A Doch tunic worn over relaxed ivory linen trousers and leather slides makes for an effortless daytime look suitable for art gallery openings and weekend brunches.',
      '5. Statement Dupatta Over Minimalist Solid Silks: Take an artisanal Balochi Doch dupatta and drape it over a plain raw silk monochrome ivory or emerald slip dress. The contrast between plain silk and dense geometric embroidery is unforgettable.'
    ]
  },
  {
    id: 'secret-behind-balochi-mirror-work',
    title: 'The Secret Behind Balochi Mirror Work (Sheesha Doch)',
    slug: 'secret-behind-balochi-mirror-work',
    subtitle: 'How tiny reflective discs turn needlecraft into radiant armor',
    excerpt: 'Discover the ancient lock-stitch technique that embeds hundreds of micro-mirrors into fabric without a drop of glue, creating a shimmering armor of light and protection.',
    author: 'Bano Bibi',
    authorRole: 'Master Artisan, Mastung Guild',
    date: 'August 18, 2026',
    readTime: '4 min read',
    category: 'Artisan Stories',
    image: craftImg,
    tags: ['Sheesha Doch', 'Mirror Work', 'Artisan Technique', 'Craftsmanship'],
    quote: 'We do not glue the mirrors. We build a nest of gold thread around them. When the light hits, the mirror speaks to the sun.',
    content: [
      'Unlike commercial mass-produced garments that glue plastic reflective foils onto fabric, genuine Balochi Sheesha Doch utilizes real glass mirrors, hand-cut into tiny round discs with diamond pliers.',
      'The artisan positions each mirror on the cloth and forms an X or octagonal grid of foundation threads over its surface. Next, using a tight buttonhole stitch with gold zari or silk thread, she loops around the edge, gradually tightening the threads until the mirror is permanently trapped within an embroidered bezel.',
      'This ancient technique ensures the mirrors never fall out, withstand gentle hand washing, and maintain their brilliant silver refraction for generations. In Baloch tradition, the mirrors reflect away the "nazar" (evil eye) while catching festive lamplight during nocturnal tribal dances.'
    ]
  },
  {
    id: 'caring-for-hand-embroidered-doch',
    title: 'Caring for Hand-Embroidered Balochi Silk & Cotton: An Heirloom Guide',
    slug: 'caring-for-hand-embroidered-doch',
    subtitle: 'Preserving gold zari sheen, delicate mirrors, and natural dyes for the next generation',
    excerpt: 'A handmade Balochi dress is not fast fashion; it is an heirloom meant to be inherited by daughters and granddaughters. Follow these essential archival care rituals.',
    author: 'Maryam Shah',
    authorRole: 'Conservator & Textile Specialist',
    date: 'July 29, 2026',
    readTime: '4 min read',
    category: 'Garment Care',
    image: mehrgarhImg,
    tags: ['Care Guide', 'Heirloom Preservation', 'Textiles', 'Maintenance'],
    quote: 'Treated with mindfulness, a Balochi Doch garment will outlive decades, maintaining its rich color and metallic glow just as it did on day one.',
    content: [
      '1. Dry Cleaning vs. Hand Washing: For heavy bridal suits, velvet fabrics, and pieces with dense gold zari, professional dry cleaning with a gentle hydrocarbon solvent is strongly recommended.',
      '2. Storage in Muslin Cloth: Never store your Balochi Doch dresses in plastic garment bags, which can trap humidity and tarnish metallic zari threads. Wrap each suit in unbleached white muslin or cotton breathable bags.',
      '3. Ironing Etiquette: Always iron your Doch garments inside out, using a medium heat setting and a pressing cloth between the iron and the embroidery. Never press directly onto the glass mirrors or gold thread directly.',
      '4. Protecting from Sunlight & Moisture: Store in a cool, dry wardrobe away from direct sun exposure. Place natural cedar balls or dried lavender sachets in the closet rather than chemical mothballs.'
    ]
  }
];
