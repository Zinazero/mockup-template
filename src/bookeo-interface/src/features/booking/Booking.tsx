import DOMPurify from 'dompurify';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { useApi } from '../../lib/ApiContext';
import { searchAvailability } from '../../lib/searchAvailability';
import type { MatchingSlot } from '../../types/api/availability';
import type { Product } from '../../types/api/products';
import type { TimeWindow } from '../../types/app';
import { getSlotsCacheKey, SLOTS_TTL, slotsCache, slotsCacheExpires } from './BookingCache';
import { Slots } from './components/Slots';

type BookingProps = {
  product: Product;
  timeWindow: TimeWindow | null;
  setChosenSlot: Dispatch<SetStateAction<MatchingSlot | null>>;
};

export const Booking = ({ product, timeWindow, setChosenSlot }: BookingProps) => {
  const { api } = useApi();
  const { productId, name, description, images, duration, bookingLimits, defaultRates } = product;

  const [loading, setLoading] = useState(false);
  const [numberOfParticipants, _setNumberOfParticipants] = useState<number>(bookingLimits[0].min);
  const [slots, setSlots] = useState<MatchingSlot[]>([]);

  useEffect(() => {
    if (!productId || !timeWindow || !numberOfParticipants) return;

    const key = getSlotsCacheKey(productId, timeWindow, numberOfParticipants);

    // Check cache
    if (slotsCache[key] && slotsCacheExpires[key] > Date.now()) {
      setSlots(slotsCache[key]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const fetchSlots = async () => {
      try {
        const { startTime, endTime } = timeWindow;
        const res = await searchAvailability(api, productId, startTime, endTime, numberOfParticipants);

        if (!cancelled) {
          slotsCache[key] = res.data;
          slotsCacheExpires[key] = Date.now() + SLOTS_TTL;
          setSlots(res.data);
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
  }, [api, productId, timeWindow, numberOfParticipants]);

  const sanitizedHTML = description ? DOMPurify.sanitize(description) : '';

  return (
    <div className="flex flex-col gap-4 w-full max-w-350 bg-white dark:bg-deep-dark shadow-lg rounded-2xl overflow-hidden pb-10 border-b border-brand">
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden relative w-full h-[30vh]">
          {images && (
            <img src={images[0].url} alt={name} className="w-full h-full object-cover object-center" />
          )}
        </div>

        <div className="flex flex-col gap-1 px-10">
          <h1 className="text-4xl font-bold text-brand">{name}</h1>
          <div className="flex gap-4 text-gray-500 text-lg">
            <span>{duration.hours} hour</span>
            <span>•</span>
            <span>
              {bookingLimits[0].min}-{bookingLimits[0].max} people
            </span>
            {defaultRates && (
              <>
                <span>•</span>
                <span>
                  ${defaultRates[0].price?.amount} {defaultRates[0].price?.currency}/person
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {description && (
        <div className="flex flex-col gap-2 px-10">
          <h2 className="text-xl font-semibold">Description</h2>
          {sanitizedHTML && (
            // biome-ignore lint: sanitized
            <div className="inner" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          )}
        </div>
      )}

      <div className="flex flex-col gap-2 px-10">
        <h3 className="text-xl font-semibold">Available Time Slots</h3>
        <Slots slots={slots} setChosenSlot={setChosenSlot} loading={loading} />
      </div>
    </div>
  );
};
