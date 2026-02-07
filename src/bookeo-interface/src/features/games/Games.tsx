import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { useApi } from '../../lib/ApiContext';
import type { MatchingSlot } from '../../types/api/availability';
import type { Product } from '../../types/api/products';
import type { TimeWindow } from '../../types/app';
import { PageTransition } from '../../ui/PageTransition';
import { Booking } from '../booking/Booking';
import { GameTile } from './components/GameTile';
import { getProductsCacheKey, PRODUCTS_TTL, productsCache, productsCacheExpires } from './GamesCache';

type GamesProps = {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  startTime: string;
  setStartTime: Dispatch<SetStateAction<string>>;
  endTime: string;
  setEndTime: Dispatch<SetStateAction<string>>;
  timeWindow: TimeWindow | null;
  chosenProduct: Product | null;
  setChosenProduct: Dispatch<SetStateAction<Product | null>>;
  setChosenSlot: Dispatch<SetStateAction<MatchingSlot | null>>;
};

export const Games = ({
  date,
  setDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  timeWindow,
  chosenProduct,
  setChosenProduct,
  setChosenSlot,
}: GamesProps) => {
  const { api } = useApi();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!date && timeWindow) {
      const startDate = new Date(timeWindow.startTime);
      const derivedDate = format(startDate, 'yyyy-MM-dd');

      setDate(derivedDate);
    }
  }, [date, timeWindow, setDate]);

  useEffect(() => {
    const fetchProducts = async () => {
      const key = getProductsCacheKey();

      // Return cached data if valid
      if (productsCache[key] && productsCacheExpires[key] > Date.now()) {
        setProducts(productsCache[key]);
        return;
      }

      try {
        const { data } = await api.get('/products');

        productsCache[key] = data.data; // store in cache
        productsCacheExpires[key] = Date.now() + PRODUCTS_TTL;

        setProducts(data.data);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error(err);
        }
      }
    };

    fetchProducts();
  }, [api]);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="flex flex-col items-center gap-10 relative">
      <div className="flex flex-col items-center gap-2 text-xl min-h-25">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={today} />
        <AnimatePresence>
          {date && (
            <motion.div
              key="time-inputs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
              <span> - </span>
              <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {chosenProduct ? (
          <PageTransition key="booking">
            <Booking product={chosenProduct} timeWindow={timeWindow} setChosenSlot={setChosenSlot} />
          </PageTransition>
        ) : (
          <PageTransition key="game-tiles">
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {products.map((prod) => (
                <div key={prod.productId}>
                  <GameTile product={prod} timeWindow={timeWindow} setBookingProduct={setChosenProduct} />
                </div>
              ))}
            </div>
          </PageTransition>
        )}
      </AnimatePresence>

      {chosenProduct && (
        <button type="button">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            onClick={() => setChosenProduct(null)}
            className="absolute top-10 left-10 text-3xl text-brand hover:text-brand-hover active:scale-95 transition"
          />
        </button>
      )}
    </div>
  );
};
