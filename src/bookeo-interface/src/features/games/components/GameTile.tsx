import { faCaretDown, faCaretUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DOMPurify from 'dompurify';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { useApi } from '../../../lib/ApiContext';
import { searchAvailability } from '../../../lib/searchAvailability';
import type { Product } from '../../../types/api/products';
import type { TimeWindow } from '../../../types/app';
import { cn } from '../../../utils/cn';
import { getSlotsCacheKey, SLOTS_TTL, slotsCache, slotsCacheExpires } from '../../booking/BookingCache';

type GameTileProps = {
  product: Product;
  timeWindow: TimeWindow | null;
  setBookingProduct: Dispatch<SetStateAction<Product | null>>;
};

export const GameTile = ({ product, timeWindow, setBookingProduct }: GameTileProps) => {
  const { api } = useApi();
  const { productId, name, description, images, duration, bookingLimits } = product;

  const [hasOpenSlots, setHasOpenSlots] = useState(true);
  const [loading, setLoading] = useState(false);
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  useEffect(() => {
    if (!productId || !timeWindow || !bookingLimits[0].min) return;

    const key = getSlotsCacheKey(productId, timeWindow, bookingLimits[0].min);

    // Check cache
    if (slotsCache[key] && slotsCacheExpires[key] > Date.now()) {
      setHasOpenSlots(slotsCache[key].length > 0);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const fetchSlots = async () => {
      try {
        const { startTime, endTime } = timeWindow;
        const res = await searchAvailability(api, productId, startTime, endTime, bookingLimits[0].min);

        if (!cancelled) {
          slotsCache[key] = res.data;
          slotsCacheExpires[key] = Date.now() + SLOTS_TTL;
          setHasOpenSlots(res.data.length > 0);
        }
      } catch (err) {
        if (!cancelled) console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchSlots();

    return () => {
      cancelled = true;
    };
  }, [api, productId, timeWindow, bookingLimits]);

  const sanitizedHTML = description ? DOMPurify.sanitize(description) : '';

  return (
    <div className="flex flex-col rounded-xl overflow-hidden max-w-140 bg-light dark:bg-deep-dark dark:border-b dark:border-brand shadow-lg relative">
      {!loading && !hasOpenSlots && timeWindow && (
        <div className="absolute top-0 left-0 w-full h-full z-99 bg-black/10 dark:bg-black/40" />
      )}
      {images && <img src={images[0].url} alt={name} />}

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <span className="text-brand text-lg font-bold">{name}</span>
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin className="text-gray-400" />
              ) : (
                timeWindow &&
                (hasOpenSlots ? (
                  <div className="bg-green-400 rounded-2xl px-2 text-sm">
                    <span>Slots Open</span>
                  </div>
                ) : (
                  <div className="bg-red-400 rounded-2xl px-2 text-sm">
                    <span>No Slots</span>
                  </div>
                ))
              )}
            </div>

            <div className="flex flex-col text-gray-500 text-base/tight">
              <span>{duration.hours} hour</span>
              <span>
                {bookingLimits[0].min}-{bookingLimits[0].max} people
              </span>
            </div>
          </div>
          {!loading && hasOpenSlots && timeWindow && (
            <button
              type="button"
              className="p-2 bg-brand hover:bg-brand-hover transition text-light rounded-lg"
              onClick={() => setBookingProduct(product)}
            >
              Book Now
            </button>
          )}
        </div>
        {description && (
          <div className={cn('description', descriptionOpen && 'open')}>
            {sanitizedHTML && (
              // biome-ignore lint: sanitized
              <div className="inner" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setDescriptionOpen(!descriptionOpen)}
          className={cn('hover:text-brand-hover transition', descriptionOpen && 'text-brand-hover')}
        >
          More Info <FontAwesomeIcon icon={descriptionOpen ? faCaretUp : faCaretDown} />
        </button>
      </div>
    </div>
  );
};
