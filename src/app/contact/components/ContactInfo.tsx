import contactData from '@/src/data/contact.json';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      {contactData.map(({ header, subHeader, phoneNumber, address, email, notes }) => (
        <div key={address} className="flex flex-col text-xl">
          {header && <span className="text-2xl font-bold text-brand">{header}</span>}
          {subHeader && <span className="text-xl font-bold text-brand-light">{subHeader}</span>}
          <span>{phoneNumber}</span>
          <span>{address}</span>
          {notes && <span>{notes}</span>}
          <span>{email}</span>
        </div>
      ))}
    </div>
  );
};
