import type { Money } from '../shared';

export type AvailabilityInfo = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageNavigationToken?: string;
};

type CourseEvent = {
  eventNumber: number;
  eventId: string;
  startTime: string;
  endTime: string;
};

type CourseSchedule = {
  events: CourseEvent[];
  title: string;
};

type AvailabilityResource = {
  name: string;
  id: string;
};

export type Slot = {
  productId: string;
  eventId: string;
  startTime: string;
  endTime: string;
  numSeatsAvailable?: number;
  numSeatsAvailableAsDropIn?: number;
  courseSchedule?: CourseSchedule;
  resources?: AvailabilityResource[];
  privateEvent?: boolean;
  privateEventOption?: boolean;
};

export type MatchingSlot = {
  startTime: string;
  endTime: string;
  price?: Money;
  courseSchedule?: CourseSchedule;
  eventId: string;
  resources?: AvailabilityResource;
};
