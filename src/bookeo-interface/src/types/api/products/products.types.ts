import type { Money } from '../shared';

type Image = {
  url: string;
};

type BookingLimit = {
  peopleCategoryId?: string;
  min: number;
  max: number;
};

type PriceRate = {
  peopleCategoryId?: string;
  price?: Money;
};

type Duration = {
  days: number;
  hours: number;
  minutes: number;
};

type ChoiceOptionValue = {
  id: string;
  name: string;
  description: string;
};

type ChoiceOption = {
  id: string;
  name: string;
  index: number;
  description?: string;
  shownToCustomers: boolean;
  enabled: boolean;
  values: ChoiceOptionValue[];
  defaultValueId?: string;
};

type NumberOption = {
  id: string;
  name: string;
  index: number;
  description?: string;
  shownToCustomers: boolean;
  enabled: boolean;
  minValue: number;
  maxValue: number;
  defaultValue: number;
};

type OnOffOption = {
  id: string;
  name: string;
  index: number;
  description?: string;
  shownToCustomers: boolean;
  enabled: boolean;
  defaultState: boolean;
};

type TextOption = {
  id: string;
  name: string;
  index: string;
  description?: string;
  shownToCustomers: boolean;
  enabled: boolean;
  required: boolean;
};

export type Product = {
  name: string;
  description?: string;
  images?: Image[];
  productId: string;
  productCode: string;
  bookingLimits: BookingLimit[];
  defaultRates?: PriceRate[];
  duration: Duration;
  type: 'fixed' | 'fixedCourse' | 'flexibleTime';
  membersOnly: boolean;
  prepaidOnly: boolean;
  acceptDeny: boolean;
  apiBookingsAllowed: boolean;
  dropInOnly: boolean;
  allowPrivateEvents?: boolean;
  choiceOptions?: ChoiceOption[];
  numberOptions?: NumberOption[];
  onOffOptions?: OnOffOption[];
  textOptions?: TextOption[];
};
