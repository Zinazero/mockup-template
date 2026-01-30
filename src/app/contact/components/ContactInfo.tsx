import contactData from '@/src/data/contact.json';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      {contactData.map(({ header, phoneNumber, address, email }) => (
        <div key={address} className="flex flex-col text-xl">
          {header && <span className="text-2xl font-bold text-brand">{header}</span>}
          <span>{phoneNumber}</span>
          <span>{address}</span>
          <span>{email}</span>
        </div>
      ))}
    </div>
  );
};
