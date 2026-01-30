'use client';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubmitEventHandler, useState } from 'react';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitEventHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      setTimeout(() => {
        console.log('Contact Sent!');
      }, 10);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
      {/* Name */}
      <Input type="text" name="Name" placeholder="Your Name" required />

      {/* Email */}
      <Input type="email" name="Email" placeholder="Email Address" required />

      {/* Message */}
      <Textarea name="Message" placeholder="How can we help?" rows={4} required />

      {/* Hidden honeypot for spam */}
      <input type="text" name="website" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-brand text-light p-2 rounded-lg active:scale-95 hover:bg-brand-hover"
        disabled={loading}
      >
        {loading ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : 'Send Message'}
      </button>
    </form>
  );
};
