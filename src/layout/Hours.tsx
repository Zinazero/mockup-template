import hoursData from '@/src/data/hours.json';
import { capitalizeWord } from '../utils/capitalizeWord';

export const Hours = () => {
  return (
    <div className="w-full py-4 bg-deep-dark border-y-brand border-y ">
      <div className="w-full flex justify-evenly max-w-500 mx-auto">
        {Object.entries(hoursData).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <span className="font-bold text-brand text-lg">{capitalizeWord(key)}</span>
            <span className="text-light">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
