import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, PageType, Currency, JournalArticle } from '../types';
import { PRODUCTS } from '../data/products';
import { JOURNAL_ARTICLES } from '../data/journal';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  isLoggedIn: boolean;
}

interface ShopContextType {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  currency: Currency;
  toggleCurrency: () => void;
  formatPrice: (usd: number, pkr: number) => string;
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
  selectedArticle: JournalArticle | null;
  setSelectedArticle: (article: JournalArticle | null) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string, tailoringOption?: 'unstitched' | 'custom_tailored', customNotes?: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategoryFilter: string;
  setActiveCategoryFilter: (category: string) => void;
  orders: Order[];
  activeOrder: Order | null;
  setActiveOrder: (order: Order | null) => void;
  createOrder: (orderData: Omit<Order, 'id' | 'date' | 'timeline' | 'trackingNumber' | 'status' | 'courier' | 'estimatedDelivery'>) => Order;
  findOrderById: (orderId: string) => Order | null;
  user: UserProfile | null;
  loginUser: (email: string, name?: string, phone?: string) => void;
  logoutUser: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  openProductDetail: (product: Product) => void;
  openArticleDetail: (article: JournalArticle) => void;
  generateWhatsAppOrderUrl: (product: Product, size?: string) => string;
}

const DEFAULT_ORDERS: Order[] = [
  {
    id: 'BD-1042',
    date: 'September 24, 2026',
    customer: {
      name: 'Faiza Salam',
      email: 'faizasalam1995@gmail.com',
      phone: '+92 300 8392104',
      address: 'House 42, Street 8, Sector F-7/2',
      city: 'Islamabad',
      stateProvince: 'Federal Capital',
      country: 'Pakistan',
      postalCode: '44000'
    },
    items: [
      {
        id: 'item-1042-1',
        product: PRODUCTS[0],
        quantity: 1,
        selectedSize: 'Small (Stitched)',
        tailoringOption: 'custom_tailored'
      }
    ],
    shippingMethod: 'pakistan_cod',
    shippingCostUSD: 0,
    shippingCostPKR: 0,
    subtotalUSD: 128,
    subtotalPKR: 35000,
    discountUSD: 0,
    discountPKR: 0,
    totalUSD: 128,
    totalPKR: 35000,
    currency: 'PKR',
    paymentMethod: 'cod',
    status: 'Dispatched via Courier',
    trackingNumber: 'TCS-PK-984210492',
    courier: 'TCS Express Pakistan',
    estimatedDelivery: 'October 3, 2026',
    timeline: [
      {
        step: 'Order Placed & Verified',
        description: 'Customer selected Cash on Delivery (COD). Atelier verified fabric dimensions.',
        date: 'Sep 24, 2026 - 11:20 AM',
        completed: true
      },
      {
        step: 'Artisan Hand-Stitching & Embellishment',
        description: 'Mastung Master Guild completed intricate Danko geometric borders and neckline needlework.',
        date: 'Sep 27, 2026 - 04:30 PM',
        completed: true
      },
      {
        step: 'Quality & Mirror Inspection',
        description: 'Lead Conservator inspected all 250+ hand-set sheesha mirrors and thread tension.',
        date: 'Sep 29, 2026 - 02:15 PM',
        completed: true
      },
      {
        step: 'Dispatched via Courier',
        description: 'Departed Quetta Central Depot en route to Islamabad delivery hub.',
        date: 'Sep 30, 2026 - 09:00 AM',
        completed: true,
        current: true
      },
      {
        step: 'Out for Delivery',
        description: 'Rider assigned with Cash on Delivery invoice.',
        date: 'Estimated Oct 2, 2026',
        completed: false
      },
      {
        step: 'Delivered & Handcrafted Heirloom Received',
        description: 'Package delivered to recipient with artisan care booklet.',
        date: 'Estimated Oct 3, 2026',
        completed: false
      }
    ]
  },
  {
    id: 'BD-84920',
    date: 'September 28, 2026',
    customer: {
      name: 'Amina Al-Mansoor',
      email: 'amina.mansoor@example.com',
      phone: '+971 50 123 4567',
      address: 'Villa 14, Al Safa 2, Jumeirah',
      city: 'Dubai',
      stateProvince: 'Dubai',
      country: 'United Arab Emirates',
      postalCode: '00000'
    },
    items: [
      {
        id: 'item-84920-1',
        product: PRODUCTS[2],
        quantity: 1,
        selectedSize: 'Medium (Stitched)',
        tailoringOption: 'custom_tailored'
      },
      {
        id: 'item-84920-2',
        product: PRODUCTS[1],
        quantity: 1,
        selectedSize: 'Medium',
        tailoringOption: 'unstitched'
      }
    ],
    shippingMethod: 'intl_express',
    shippingCostUSD: 15,
    shippingCostPKR: 4200,
    subtotalUSD: 280,
    subtotalPKR: 78000,
    discountUSD: 28,
    discountPKR: 7800,
    totalUSD: 267,
    totalPKR: 74400,
    currency: 'USD',
    paymentMethod: 'card',
    status: 'Artisan Hand-Stitching',
    trackingNumber: 'DHL-INT-77290145',
    courier: 'DHL Express Worldwide',
    estimatedDelivery: 'October 8, 2026',
    timeline: [
      {
        step: 'Order Placed & Payment Cleared',
        description: 'International card payment verified. Artisan production docket issued.',
        date: 'Sep 28, 2026 - 03:45 PM',
        completed: true
      },
      {
        step: 'Artisan Hand-Stitching & Embellishment',
        description: 'Sibi artisans currently hand-stitching stepped Mehrgarh neolithic diamond motifs.',
        date: 'Sep 29, 2026 - 10:00 AM',
        completed: true,
        current: true
      },
      {
        step: 'Quality & Mirror Inspection',
        description: 'Pending mirror bezel inspection and archival steaming.',
        date: 'Scheduled Oct 3, 2026',
        completed: false
      },
      {
        step: 'Dispatched via Courier',
        description: 'Direct courier handoff to DHL Express Quetta Airport hub.',
        date: 'Scheduled Oct 4, 2026',
        completed: false
      },
      {
        step: 'Out for Delivery',
        description: 'Customs clearance Dubai and dispatch to recipient.',
        date: 'Scheduled Oct 7, 2026',
        completed: false
      },
      {
        step: 'Delivered',
        description: 'Signed delivery at doorstep.',
        date: 'Scheduled Oct 8, 2026',
        completed: false
      }
    ]
  }
];

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(JOURNAL_ARTICLES[0]);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'init-cart-1',
      product: PRODUCTS[0],
      quantity: 1,
      selectedSize: 'Small (Stitched)',
      tailoringOption: 'custom_tailored'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('balochi_doch_orders');
    return saved ? JSON.parse(saved) : DEFAULT_ORDERS;
  });
  const [activeOrder, setActiveOrder] = useState<Order | null>(DEFAULT_ORDERS[0]);
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('balochi_doch_user');
    return saved ? JSON.parse(saved) : {
      name: 'Faiza Salam',
      email: 'faizasalam1995@gmail.com',
      phone: '+92 300 8392104',
      isLoggedIn: true
    };
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('balochi_doch_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('balochi_doch_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('balochi_doch_user');
    }
  }, [user]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const toggleCurrency = () => {
    setCurrency(prev => (prev === 'USD' ? 'PKR' : 'USD'));
    showToast(`Currency switched to ${currency === 'USD' ? 'PKR (Rs.)' : 'USD ($)'}`);
  };

  const formatPrice = (usd: number, pkr: number) => {
    if (currency === 'PKR') {
      return `Rs. ${pkr.toLocaleString()} PKR`;
    }
    return `$${usd.toLocaleString()} USD`;
  };

  const addToCart = (
    product: Product,
    quantity = 1,
    selectedSize = product.availableSizes[0] || 'Unstitched Fabric',
    tailoringOption: 'unstitched' | 'custom_tailored' = 'unstitched',
    customNotes = ''
  ) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === selectedSize && item.tailoringOption === tailoringOption
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      return [
        ...prev,
        {
          id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          product,
          quantity,
          selectedSize,
          tailoringOption,
          customNotes
        }
      ];
    });

    showToast(`Added "${product.title}" to your handcrafted bag.`);
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from shopping bag.');
  };

  const clearCart = () => {
    setCart([]);
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openArticleDetail = (article: JournalArticle) => {
    setSelectedArticle(article);
    setCurrentPage('journal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generateWhatsAppOrderUrl = (product: Product, size?: string) => {
    const currentSize = size || product.availableSizes[0] || 'Standard';
    const message = `Salam! I would like to inquire/order authentic Balochi Doch:\n\n*Product:* ${product.title}\n*SKU:* ${product.sku}\n*Price:* $${product.priceUSD} USD / Rs. ${product.pricePKR.toLocaleString()} PKR\n*Fabric:* ${product.fabric}\n*Selection:* ${currentSize}\n\nPlease confirm availability and dispatch timeline.`;
    return `https://wa.me/923008392104?text=${encodeURIComponent(message)}`;
  };

  const createOrder = (orderData: Omit<Order, 'id' | 'date' | 'timeline' | 'trackingNumber' | 'status' | 'courier' | 'estimatedDelivery'>): Order => {
    const newId = `BD-${Math.floor(10000 + Math.random() * 90000)}`;
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const trackingCode = `${orderData.shippingMethod.includes('pakistan') ? 'TCS-PK' : 'DHL-INT'}-${Math.floor(10000000 + Math.random() * 90000000)}`;
    const courierName = orderData.shippingMethod.includes('pakistan') ? 'TCS Express Pakistan' : 'DHL Express Worldwide';

    const newOrder: Order = {
      ...orderData,
      id: newId,
      date: dateStr,
      status: 'Order Placed',
      trackingNumber: trackingCode,
      courier: courierName,
      estimatedDelivery: 'Within 5-7 business days',
      timeline: [
        {
          step: 'Order Placed & Acknowledged',
          description: `Order ${newId} confirmed via ${orderData.paymentMethod === 'cod' ? 'Cash on Delivery (Pakistan COD)' : 'Online Payment'}. Handcraft dossier created.`,
          date: `${dateStr} - Just now`,
          completed: true,
          current: true
        },
        {
          step: 'Artisan Hand-Stitching & Embellishment',
          description: 'Master Baloch artisans preparing fabric thread count and geometric motif execution.',
          date: 'Scheduled next 2-3 business days',
          completed: false
        },
        {
          step: 'Quality & Mirror Inspection',
          description: 'Authentic Sheesha mirror count, gold zari tension, and fabric finish inspection.',
          date: 'Pending artisan completion',
          completed: false
        },
        {
          step: 'Dispatched via Courier',
          description: `Handed over to ${courierName} with tracking ${trackingCode}.`,
          date: 'Pending dispatch',
          completed: false
        },
        {
          step: 'Out for Delivery',
          description: 'Courier agent carrying package for final doorstep delivery.',
          date: 'Pending arrival',
          completed: false
        },
        {
          step: 'Delivered',
          description: 'Handcrafted Balochi heirloom safely delivered.',
          date: 'Pending',
          completed: false
        }
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    setActiveOrder(newOrder);
    clearCart();
    return newOrder;
  };

  const findOrderById = (orderId: string): Order | null => {
    const cleanId = orderId.trim().toUpperCase().replace('#', '');
    const found = orders.find(o => o.id.toUpperCase() === cleanId || o.trackingNumber.toUpperCase().includes(cleanId));
    return found || null;
  };

  const loginUser = (email: string, name = 'Valued Collector', phone = '+92 300 1234567') => {
    const profile: UserProfile = {
      email,
      name,
      phone,
      isLoggedIn: true
    };
    setUser(profile);
    showToast(`Welcome back, ${name}!`);
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Signed out of collector portal.');
  };

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        currency,
        toggleCurrency,
        formatPrice,
        selectedProduct,
        setSelectedProduct,
        selectedArticle,
        setSelectedArticle,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        activeCategoryFilter,
        setActiveCategoryFilter,
        orders,
        activeOrder,
        setActiveOrder,
        createOrder,
        findOrderById,
        user,
        loginUser,
        logoutUser,
        toastMessage,
        showToast,
        openProductDetail,
        openArticleDetail,
        generateWhatsAppOrderUrl
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
