import type { BookingOption, PaginationInfo, PeopleNumber, Resource } from '../shared';
import type { MatchingSlot } from './availability.types';

export type FindAvailableSlotsQueryParameters = {
  itemsPerPage?: number; // <= 300 Default: 50
  mode?: string;
};

export type FindAvailableSlotsBody = {
  productId: string;
  startTime: string;
  endTime: string;
  peopleNumbers: PeopleNumber[];
  options?: BookingOption[];
  resources?: Resource[]; // Shared Resource, NOT AvailabilityResource
};

export type FindAvailableSlotsResponse = {
  info: PaginationInfo;
  data: MatchingSlot[];
};
