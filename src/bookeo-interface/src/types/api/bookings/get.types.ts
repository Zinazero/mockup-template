import type { Money, PaginationInfo } from '../shared';
import type { Booking, Customer, Payment } from './bookings.types';

// GET MULTIPLE BOOKINGS
export type GetMultipleBookingsQueryParameters = {
  startTime?: string;
  endTime?: string;
  lastUpdatedStartTime?: string;
  lastUpdatedEndTime?: string;
  productId?: string;
  includeCanceled?: boolean;
  expandCustomer?: boolean;
  expandParticipants?: boolean;
  itemsPerPage?: number; // (<= 100) Default 50
  pageNavigationToken?: string;
  pageNumber?: number; // Default 1
};

export type GetMultipleBookingsResponse = {
  info: PaginationInfo;
  data: Booking[];
};

// GET A SPECIFIC BOOKING
export type GetBookingPathParameters = {
  bookingNumber: string;
};

export type GetBookingQueryParameters = {
  expandCustomer?: boolean; // Default false
  expandParticipants?: boolean; // Default false
};

export type GetBookingResponse = Booking;

// GET PAYMENTS RECEIVED FOR A BOOKING
export type GetPaymentsReceivedPathParameters = {
  bookingNumber: string;
};

export type GetPaymentsReceivedQueryParameters = Pick<
  GetMultipleBookingsQueryParameters,
  'itemsPerPage' | 'pageNavigationToken' | 'pageNumber'
>;

export type GetPaymentsReceivedResponse = {
  info: PaginationInfo;
  data: Payment[];
};

// RETRIEVE THE CUSTOMER ASSOCIATED WITH A BOOKING
export type GetCustomerOfBookingPathParameters = {
  bookingNumber: string;
};

export interface GetCustomerOfBookingBody extends Customer {
  id: number;
  creationTime: string;
  startTimeOfNextBooking?: string;
  startTimeOfPreviousBooking?: string;
  credit?: Money;
  numBooking?: number;
  numCancelations?: number;
  numNoShows?: number;
  member?: boolean;
  membershipEnd?: string;
}
