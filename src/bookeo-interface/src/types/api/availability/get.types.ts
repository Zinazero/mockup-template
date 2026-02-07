import type { PaginationInfo } from '../shared';
import type { AvailabilityInfo, MatchingSlot, Slot } from './availability.types';

// Get Product Availability Info
export type GetProductAvailabilityInfoQueryParameters = {
  productId?: string;
  startTime?: string;
  endTime?: string;
  itemsPerPage?: number;
  pageNavigationToken?: string;
  pageNumber?: number;
  mode?: string;
};

export type GetProductAvailabilityInfoResponse = {
  info: AvailabilityInfo;
  data: Slot[];
};

// Navigate Results of Matching Slots Search
export type NavigateMatchingSlotsSearchPathParameters = {
  pageNavigationToken: string;
};

export type NavigateMatchingSlotsSearchQueryParameters = {
  pageNumber?: number;
};

export type NavigateMatchingSlotsSearchResponse = {
  info: PaginationInfo;
  data?: MatchingSlot[];
};
