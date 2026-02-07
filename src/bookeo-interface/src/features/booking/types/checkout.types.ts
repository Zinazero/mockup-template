export type Name = {
  first: string;
  last: string;
};

export type Contact = {
  email: string;
  phone: string;
};

export type Address = {
  city: string;
  province: string;
  postalCode: string;
};

export type CheckoutInfo = {
  name: Name;
  contact: Contact;
  address: Address;
  dateOfBirth?: string;
};
