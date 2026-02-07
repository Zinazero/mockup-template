import { PaginationInfo } from '../shared';
import { Product } from './products.types';

export type GetProductsQueryParemeters = {
  type?: string;
  itemsPerPage?: number; // <= 100 Default: 50
  pageNavigationToken?: string;
  pageNumber?: number; // Default: 1
  lang?: string;
};

export type GetProductsResponse = {
  info: PaginationInfo;
  data: Product[];
};
