import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MatchingSlot } from '../../types/api/availability';
import type { Product } from '../../types/api/products';
import { cn } from '../../utils/cn';
import { formatSlotDate } from '../../utils/formatSlotDate';

type ConfirmationProps = {
  product: Product;
  slot: MatchingSlot;
  returnToGames: () => void;
};

export const Confirmation = ({ product, slot, returnToGames }: ConfirmationProps) => {
  const { startTime } = slot;
  const { duration } = product;

  return (
    <div className="flex flex-col items-center justify-center text-center text-xl py-12">
      <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-brand-light mb-4" />
      <h2 className="text-4xl font-semibold mb-2">Thank you for booking!</h2>
      <p className="text-gray-600 dark:text-brand-light max-w-md">Your escape details are below.</p>

      <ul className="rounded-2xl bg-white dark:bg-deep-dark dark:border-b dark:border-brand shadow-sm p-4 text-left my-10">
        <li>
          <b className="text-brand">Game:</b> {product.name}
        </li>
        <li>
          <b className="text-brand">Time Slot:</b> {formatSlotDate(startTime)}
        </li>
        <li>
          <b className="text-brand">Duration:</b> {duration.hours} hour{duration.hours > 1 && 's'}
        </li>
      </ul>

      <span className="font-bold">Please arrive 15 minutes before your booking time.</span>

      <button
        type="button"
        onClick={returnToGames}
        className={cn(
          'mt-6 p-2 bg-brand hover:bg-brand-hover transition',
          'text-light font-bold rounded-lg active:scale-95 cursor-pointer',
          'md:w-1/2',
        )}
      >
        Return to Games
      </button>
    </div>
  );
};
