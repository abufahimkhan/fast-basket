import { Product } from '@/types/product';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 12500,
    originalPrice: 15000,
    image: 'https://picsum.photos/seed/headphones/400/400',
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    isNew: true,
    discount: 15,
  },
  {
    id: '2',
    name: 'Smart Watch Series 7',
    price: 8500,
    originalPrice: 10000,
    image: 'https://picsum.photos/seed/watch/400/400',
    category: 'Electronics',
    rating: 4.6,
    reviews: 89,
    discount: 15,
  },
  {
    id: '3',
    name: 'Cotton Blend Casual Shirt',
    price: 1200,
    originalPrice: 1800,
    image: 'https://picsum.photos/seed/shirt/400/400',
    category: 'Fashion',
    rating: 4.2,
    reviews: 56,
    discount: 33,
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 18500,
    originalPrice: 22000,
    image: 'https://picsum.photos/seed/chair/400/400',
    category: 'Home & Living',
    rating: 4.9,
    reviews: 210,
    isNew: true,
    discount: 16,
  },
  {
    id: '5',
    name: 'Mechanical Gaming Keyboard',
    price: 4500,
    originalPrice: 5500,
    image: 'https://picsum.photos/seed/keyboard/400/400',
    category: 'Electronics',
    rating: 4.7,
    reviews: 145,
    discount: 18,
  },
  {
    id: '6',
    name: 'Leather Travel Backpack',
    price: 3200,
    originalPrice: 4500,
    image: 'https://picsum.photos/seed/backpack/400/400',
    category: 'Fashion',
    rating: 4.5,
    reviews: 78,
    discount: 28,
  },
  {
    id: '7',
    name: 'Smart Home Security Camera',
    price: 2800,
    originalPrice: 3500,
    image: 'https://picsum.photos/seed/camera/400/400',
    category: 'Electronics',
    rating: 4.4,
    reviews: 92,
    discount: 20,
  },
  {
    id: '8',
    name: 'Minimalist Wall Clock',
    price: 950,
    originalPrice: 1200,
    image: 'https://picsum.photos/seed/clock/400/400',
    category: 'Home & Living',
    rating: 4.3,
    reviews: 45,
    discount: 21,
  }
];

export const getProducts = async (category?: string): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (category) {
    return MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  return MOCK_PRODUCTS;
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PRODUCTS.find(p => p.id === id);
};

export const getCategories = async (): Promise<string[]> => {
  return Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)));
};
