import { useState } from 'react';
import type { MatchingSlot } from '../../types/api/availability';
import type { Product } from '../../types/api/products';
import { CheckoutForm } from './CheckoutForm';
import { Confirmation } from './Confirmation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { PageTransition } from '../../ui/PageTransition';
import { AnimatePresence } from 'framer-motion';

type CheckoutProps = {
  product: Product;
  slot: MatchingSlot;
  returnToGames: () => void;
  returnToBooking: () => void;
};

export const Checkout = ({ product, slot, returnToGames, returnToBooking }: CheckoutProps) => {
  const [isConfirmation, setIsConfirmation] = useState(false);

  const confirmationProps = {
    product,
    slot,
    returnToGames,
  };

  return (
    <div className="flex justify-center w-full pb-10">
      <AnimatePresence mode="wait">
        {isConfirmation ? (
          <PageTransition key="confirmation-page">
            <Confirmation {...confirmationProps} />
          </PageTransition>
        ) : (
          <PageTransition key="checkout-form">
            <div className="relative mt-10 p-10 px-30">
              <CheckoutForm onSubmit={(e) => { e.preventDefault(); setIsConfirmation(true)}} />
              <button type="button">
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  onClick={() => returnToBooking()}
                  className="absolute top-10 left-0 text-3xl text-brand hover:text-brand-hover active:scale-95 transition"
                />
              </button>
            </div>
          </PageTransition>
        )}
      </AnimatePresence>
    </div>
  );
};
