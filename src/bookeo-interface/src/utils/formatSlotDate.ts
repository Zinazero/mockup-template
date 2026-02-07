import { format, isValid } from 'date-fns';

export const formatSlotDate = (timestamp: string): string => {
  const date = new Date(timestamp);

  if (!isValid(date)) {
    throw new Error(`Invalid timestamp: ${timestamp}`);
  }

  return format(date, 'EEEE MMMM d, yyyy | h:mma');
};
