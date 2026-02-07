import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Dispatch, SetStateAction } from 'react';
import type { MatchingSlot } from '../../../types/api/availability';
import { formatSlotTime } from '../../../utils/formatSlotTime';

type SlotsProps = {
  slots: MatchingSlot[];
  setChosenSlot: Dispatch<SetStateAction<MatchingSlot | null>>;
  loading: boolean;
};

export const Slots = ({ slots, setChosenSlot, loading }: SlotsProps) => (
  <div className="flex justify-center p-4 bg-light dark:bg-dark dark:border-t dark:border-brand rounded-xl">
    {loading ? (
      <FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-gray-400 py-10" />
    ) : slots.length < 1 ? (
      <span className="text-2xl text-gray-300">No Available Slots</span>
    ) : (
      <div className="flex gap-2 flex-wrap">
        {slots.map((slot) => (
          <button
            key={slot.startTime}
            type="button"
            className="rounded-lg bg-brand hover:bg-brand-hover transition active:scale-95 text-light p-2 w-20 text-center"
            onClick={() => setChosenSlot(slot)}
          >
            {formatSlotTime(slot.startTime)}
          </button>
        ))}
      </div>
    )}
  </div>
);
