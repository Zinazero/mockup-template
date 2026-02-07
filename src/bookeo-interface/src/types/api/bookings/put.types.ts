import type { Booking, BookingBody } from './bookings.types';

// UPDATE BOOKING
export type UpdateBookingPathParameters = {
  bookingNumber: string;
};

export type UpdateBookingQueryParameters = {
  notifyUsers?: boolean;
  notifyCustomer?: boolean;
  mode?: string;
};

export type UpdateBookingBody = BookingBody;

export type UpdateBookingResponse = Booking;
