import type { BookingOption, Money, PeopleNumber, Resource } from '../shared';

type PhoneNumber = {
  number: string;
  type: string;
};

type StreetAddress = {
  address1?: string;
  address2?: string;
  city?: string;
  countryCode?: string;
  state?: string;
  postcode?: string;
};

type CustomField = {
  id?: string;
  name?: string;
  value: string;
};

type LinkedPerson = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumbers?: PhoneNumber[];
  streetAddress?: StreetAddress;
  dateOfBirth?: string;
  cutomFields?: CustomField[];
  gender?: 'male' | 'female' | 'unknown';
};

type Participant = {
  personId: string;
  peopleCategoryId: string;
  categoryIndex: number;
  personDetails?: LinkedPerson;
};

type Participants = {
  numbers: PeopleNumber[];
  details?: Participant;
};

export type Customer = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumbers?: PhoneNumber[];
  streetAddress?: StreetAddress;
  dateOfBirth?: string;
  customFields?: CustomField[];
  gender?: 'male' | 'female' | 'unknown';
  facebookId?: string;
  languageCode?: string;
  acceptSmsReminders?: boolean;
};

type PriceAdjustment = {
  unitPrice: Money;
  quntity: number;
  description: string;
  taxIds?: string[];
};

export type Payment = {
  receivedTime: string;
  reason: string;
  comment?: string;
  amount: Money;
  paymentMethod: string;
  paymentMethodOther?: string;
};

type PriceTax = {
  taxId: string;
  amount: Money;
};

type Price = {
  totalGross: Money;
  totalNet: Money;
  totalTaxes: Money;
  totalPaid: Money;
  taxes: PriceTax;
};

export type Booking = {
  bookingNumber?: string;
  eventId?: string;
  firstCourseEnrolledEventId?: string;
  dropinCourseEnrolledEventId?: string;
  startTime?: string;
  endTime?: string;
  customerId?: string;
  customer?: Customer;
  title: string;
  externalRef?: string;
  participants: Participants;
  resources?: Resource[];
  canceled?: boolean;
  cancelationTime?: string;
  cancelationAgent?: string;
  accepted?: boolean;
  sourceIp?: string;
  creationTime: string;
  creationAgent: string;
  lastChangeTime?: string;
  lastChangeAgent?: string;
  productId: string;
  options?: BookingOption[];
  privateEvent?: boolean;
  priceAdjustments?: PriceAdjustment[];
  promotionCodeInput?: string;
  productName?: string;
  couponCodes?: string[];
  giftVoucherCodeInput?: string;
  specificVoucherCode?: string;
  initialPayments?: Payment[];
  noShow?: boolean;
  price?: Price;
  source?: string;
};

export type BookingBody = Pick<
  Booking,
  | 'eventId'
  | 'firstCourseEnrolledEventId'
  | 'dropinCourseEnrolledEventId'
  | 'startTime'
  | 'endTime'
  | 'customerId'
  | 'customer'
  | 'externalRef'
  | 'participants'
  | 'resources'
  | 'sourceIp'
  | 'productId'
  | 'options'
  | 'privateEvent'
  | 'priceAdjustments'
  | 'promotionCodeInput'
  | 'giftVoucherCodeInput'
  | 'initialPayments'
  | 'source'
>;
