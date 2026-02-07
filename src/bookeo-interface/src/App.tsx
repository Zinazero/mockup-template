import { formatISO, parse } from 'date-fns';
import { AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Checkout } from './features/checkout/Checkout';
import { Games } from './features/games/Games';
import { ApiProvider } from './lib/ApiContext';
import type { MatchingSlot } from './types/api/availability';
import type { Product } from './types/api/products';
import { PageTransition } from './ui/PageTransition';

type BookeoInterfaceProps = {
  serverBase: string;
};

export const BookeoInterface = ({ serverBase }: BookeoInterfaceProps) => {
  const [chosenProduct, setChosenProduct] = useState<Product | null>(null);
  const [chosenSlot, setChosenSlot] = useState<MatchingSlot | null>(null);
  const [date, setDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('17:00');

  const timeWindow = useMemo(() => {
    if (!date || !startTime || !endTime) return null;

    const start = parse(`${date} ${startTime}`, 'yyyy-MM-dd HH:mm', new Date());
    const end = parse(`${date} ${endTime}`, 'yyyy-MM-dd HH:mm', new Date());

    return {
      startTime: formatISO(start),
      endTime: formatISO(end),
    };
  }, [date, startTime, endTime]);

  const gamesProps = {
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
  };

  const clearChoices = () => {
    setChosenProduct(null);
    setChosenSlot(null);
  };

  return (
    <ApiProvider serverBase={serverBase}>
      <div className="w-full min-h-screen flex flex-col items-center gap-30 p-10 relative">
        <AnimatePresence mode="wait">
          {chosenProduct && chosenSlot ? (
            <PageTransition key="checkout">
              <Checkout
                product={chosenProduct}
                slot={chosenSlot}
                returnToGames={clearChoices}
                returnToBooking={() => setChosenSlot(null)}
              />
            </PageTransition>
          ) : (
            <PageTransition key="games">
              <Games {...gamesProps} />
            </PageTransition>
          )}
        </AnimatePresence>
      </div>
    </ApiProvider>
  );
};
