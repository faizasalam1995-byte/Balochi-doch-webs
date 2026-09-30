export type PageType = 
  | 'home' 
  | 'shop' 
  | 'doch_collection' 
  | 'product_detail' 
  | 'our_craft' 
  | 'about' 
  | 'journal' 
  | 'contact' 
  | 'cart_checkout' 
  | 'customer_care'
  | 'order_tracking';

export type Currency = 'USD' | 'PKR';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: 'Unstitched 3-Piece' | 'Kurta' | 'Heavy Embroidery' | 'Royal Bridal';
  styleType: 'Danko Doch' | 'Quetta Doch' | 'Mehrgarh Doch' | 'Kalat Sheesha Doch' | 'Makrani Zari Doch' | 'Sibi Geometric';
  priceUSD: number;
  pricePKR: number;
  image: string;
  gallery: string[];
  description: string;
  fabric: 'Premium Lawn Cotton' | 'Pure Georgette' | 'Handloom Raw Silk' | 'Velvet';
  color: 'Maroon' | 'Black' | 'Gold' | 'Emerald Green' | 'Navy Blue';
  colorHex: string;
  mirrorWork: boolean;
  artisanDays: number;
  stitchCount: string;
  artisanRegion: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: 'BEST SELLER' | 'NEW IN' | 'LIMITED' | 'HERITAGE MASTERPIECE';
  sku: string;
  availableSizes: string[];
  fabricYardage: {
    shirt: string;
    shalwar: string;
    dupatta: string;
  };
  details: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  tailoringOption: 'unstitched' | 'custom_tailored';
  customNotes?: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  stateProvince: string;
  country: string;
  postalCode: string;
}

export interface Order {
  id: string;
  date: string;
  customer: CustomerInfo;
  items: CartItem[];
  shippingMethod: 'pakistan_cod' | 'pakistan_express' | 'intl_standard' | 'intl_express';
  shippingCostUSD: number;
  shippingCostPKR: number;
  subtotalUSD: number;
  subtotalPKR: number;
  discountUSD: number;
  discountPKR: number;
  totalUSD: number;
  totalPKR: number;
  currency: Currency;
  paymentMethod: 'cod' | 'card' | 'bank_transfer' | 'whatsapp';
  status: 'Order Placed' | 'Artisan Hand-Stitching' | 'Quality & Mirror Inspection' | 'Dispatched via Courier' | 'Out for Delivery' | 'Delivered';
  trackingNumber: string;
  courier: string;
  estimatedDelivery: string;
  timeline: {
    step: string;
    description: string;
    date: string;
    completed: boolean;
    current?: boolean;
  }[];
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  excerpt: string;
  content: string[];
  quote?: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export interface BalochiMotif {
  id: string;
  name: string;
  nativeScript: string;
  meaning: string;
  symbolism: string;
  region: string;
  visualFeature: string;
}
