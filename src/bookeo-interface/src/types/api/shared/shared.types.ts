export type PeopleNumber = {
  peopleCategoryId: string;
  number: number;
};

export type BookingOption = {
  id?: string;
  name?: string;
  value?: string;
};

export type Resource = {
  id: string;
};

export type PaginationInfo = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageNavigationToken?: string;
};

export type Money = {
  amount: string;
  currency: string;
};
