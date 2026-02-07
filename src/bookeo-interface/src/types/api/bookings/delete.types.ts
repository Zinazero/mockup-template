export type DeleteBookingPathParameters = {
  bookingNumber: string;
};

export type DeleteBookingQueryParameters = {
  notifyUsers?: boolean;
  notifyCustomer?: boolean;
  applyCancellationPolicy?: boolean;
  trackInCustomerHistory?: boolean;
  cancelRemainingSeries?: boolean;
  reason?: string;
};
