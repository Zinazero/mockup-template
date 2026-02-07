import type { Product } from '../../types/api/products';

export const productsCache: Record<string, Product[]> = {};
export const productsCacheExpires: Record<string, number> = {};
export const PRODUCTS_TTL = 60_000; // 1 minute TTL

export const getProductsCacheKey = (): string => 'all-products';
