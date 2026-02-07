import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FocusEvent, type SubmitEventHandler, useId, useState } from 'react';
import { cn } from '../../utils/cn';
import { phoneNumberFormatter } from '../../utils/phoneNumberFormatter';
import type { Address, Contact, Name } from '../booking/types/checkout.types';

type CheckoutFormProps = {
  onSubmit: SubmitEventHandler;
};

export const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const [name, setName] = useState<Name>({ first: '', last: '' });
  const [contact, setContact] = useState<Contact>({ email: '', phone: '' });
  const [address, setAddress] = useState<Address>({ city: '', province: '', postalCode: '' });
  const [dateOfBirth, setDateOfBirth] = useState<string>('');

  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const cityId = useId();
  const provinceId = useId();
  const postalCodeId = useId();
  const dateOfBirthId = useId();

  const labelClasses = cn('text-lg mb-1');
  const legendClasses = cn('text-2xl font-bold');
  const fieldsetClasses = cn('flex flex-col gap-2');

  const handlePhoneBlur = (e: FocusEvent<HTMLInputElement>) => {
    setContact((prev) => ({ ...prev, phone: phoneNumberFormatter(e.target.value) }));
  };

  const provinces: string[] = [
    'AB',
    'BC',
    'MB',
    'NB',
    'NL',
    'NS',
    'ON',
    'PE',
    'QC',
    'SK',
    'NT',
    'NU',
    'YT',
  ] as const;

  return (
    <form className="max-w-120 w-full flex flex-col gap-10" onSubmit={onSubmit}>
      {/* Name */}
      <fieldset>
        <legend className={cn('mb-2', legendClasses)}>Name*</legend>

        <div className={cn('flex gap-6 flex-wrap')}>
          {/* First Name */}
          <label htmlFor={firstNameId} className="sr-only">
            First Name
          </label>
          <input
            type="text"
            id={firstNameId}
            placeholder="First"
            value={name.first}
            onChange={(e) => setName((prev) => ({ ...prev, first: e.target.value }))}
            required
          />

          {/* Last Name */}
          <label htmlFor={lastNameId} className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            id={lastNameId}
            placeholder="Last"
            value={name.last}
            onChange={(e) => setName((prev) => ({ ...prev, last: e.target.value }))}
            required
          />
        </div>
      </fieldset>

      {/* Contact */}
      <fieldset className={fieldsetClasses}>
        <legend className={legendClasses}>Contact*</legend>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor={emailId} className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id={emailId}
            value={contact.email}
            onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col max-w-60">
          <label htmlFor={phoneId} className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id={phoneId}
            value={contact.phone}
            onChange={(e) => setContact((prev) => ({ ...prev, phone: e.target.value }))}
            onBlur={handlePhoneBlur}
            maxLength={14}
            required
          />
        </div>
      </fieldset>

      {/* Address */}
      <fieldset className={fieldsetClasses}>
        <legend className={legendClasses}>Address</legend>

        {/* City */}
        <div className="flex flex-col max-w-60">
          <label htmlFor={cityId} className={labelClasses}>
            City
          </label>
          <input
            type="text"
            id={cityId}
            value={address.city}
            onChange={(e) => setAddress((prev) => ({ ...prev, city: e.target.value }))}
          />
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col max-w-30">
            {/* Province */}
            <label htmlFor={provinceId} className={labelClasses}>
              Province
            </label>
            <select
              id={provinceId}
              name="province"
              value={address.province}
              onChange={(e) => setAddress((prev) => ({ ...prev, province: e.target.value }))}
            >
              {provinces.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col max-w-30">
            {/* Postal Code */}
            <label htmlFor={postalCodeId} className={labelClasses}>
              Postal Code
            </label>
            <input
              type="text"
              id={postalCodeId}
              value={address.postalCode}
              onChange={(e) => setAddress((prev) => ({ ...prev, postalCode: e.target.value }))}
            />
          </div>
        </div>
      </fieldset>

      {/* Additional Information */}
      <fieldset className={fieldsetClasses}>
        <legend className={legendClasses}>Additional Information</legend>

        {/* Date of Birth */}
        <div className="flex flex-col max-w-40">
          <label htmlFor={dateOfBirthId} className={labelClasses}>
            Date of Birth
          </label>
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </div>
      </fieldset>

      <button
        type="submit"
        className="flex items-center justify-center p-2 bg-brand hover:bg-brand-hover text-light rounded-xl w-60"
      >
        Next <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </form>
  );
};
