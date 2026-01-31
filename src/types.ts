export type ImageType = {
  text: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Location = {
  location: string;
  subLocation?: string;
  imgSrc: string;
  href: string;
};

export type ContactInfo = {
  header?: string;
  subHeader?: string;
  phoneNumber: string;
  address: string;
  email: string;
  notes?: string;
}
