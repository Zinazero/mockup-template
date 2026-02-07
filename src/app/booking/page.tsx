import BookeoInterface from '@/src/bookeo-interface';
import env from '../config/env';

const Booking = () => {
  return (
    <div>
      <BookeoInterface serverBase={env.SERVER_BASE} />
    </div>
  );
};

export default Booking;
