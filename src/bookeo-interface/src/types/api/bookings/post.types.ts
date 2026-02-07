import type { Money } from '../shared';
import type { Booking, BookingBody } from './bookings.types';

// CREATE BOOKING
export type CreateBookingQueryParameters = {
  previousHoldId?: string;
  notifyUsers?: boolean;
  notifyCustomer?: boolean;
  sendCustomerReminders?: boolean;
  sendCustomerThankyou?: boolean;
  mode?: string;
};

export type CreateBookingBody = BookingBody;

export type CreateBookingResponse = Booking;

// ADD PAYMENT TO BOOKING
export type AddPaymentToBookingPathParameters = {
  bookingNumber: string;
};

export type AddPaymentToBookingBody = {
  receivedTime: string;
  reason: string;
  comment?: string;
  amount: Money;
  paymentMethod: string;
  paymentMethodOther?: string;
};

export interface AddPaymentToBookingResponse extends AddPaymentToBookingBody {
  id: string;
  creationTime: string;
  description?: string;
  agent?: string;
  customerId?: string;
  gatewayName?: string;
  transactionId?: string;
}
