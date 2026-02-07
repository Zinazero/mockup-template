import { useState } from 'react';
import api from '../lib/api';
import type { FindAvailableSlotsBody } from '../types/api/availability/post.types';
import type { CreateBookingBody } from '../types/api/bookings';

type TimeRangeType = 'booked' | 'lastUpdated';
type TimeRange = {
  startTime: string;
  endTime: string;
};

export const Temp = () => {
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [timeRangeType, setTimeRangeType] = useState<TimeRangeType>('booked');
  const [timeSlots, setTimeSlots] = useState<{ eventId: string; startTime: string; endTime: string }[]>([]);

  const fetchBookings = async () => {
    // "Either booked time range or last updated range must be specified"

    let startTimeData: string;
    if (!startTime) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 15);

      startTimeData = startDate.toISOString();
    } else {
      startTimeData = startTime;
    }

    let endTimeData: string;
    if (!endTime) {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 15);

      endTimeData = endDate.toISOString();
    } else {
      endTimeData = endTime;
    }

    const timeRange: TimeRange = {
      startTime: startTimeData,
      endTime: endTimeData,
    };

    const startQuery = timeRangeType === 'booked' ? 'startTime' : 'lastUpdatedStartTime';
    const endQuery = timeRangeType === 'booked' ? 'endTime' : 'lastUpdatedEndTime';

    try {
      const { data } = await api.get(
        `/bookings?${startQuery}=${timeRange.startTime}&${endQuery}=${timeRange.endTime}`,
      );
      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const postBooking = async () => {
    // Either startTime or eventId must be specified
    // either customerId or customer (new) must be specified

    const data: CreateBookingBody = {
      startTime: '2026-02-03T16:00:00-05:00',
      participants: {
        numbers: [
          {
            peopleCategoryId: 'Cadults',
            number: 1,
          },
        ],
      },
      productId: '4156149LRXM19C11A0A190',
    };

    try {
      await api.post('/bookings', data);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const searchAvailability = async () => {
    let startTimeData: string;
    if (!startTime) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 15);

      startTimeData = startDate.toISOString();
    } else {
      startTimeData = startTime;
    }

    let endTimeData: string;
    if (!endTime) {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 15);

      endTimeData = endDate.toISOString();
    } else {
      endTimeData = endTime;
    }

    const body: FindAvailableSlotsBody = {
      productId: '4156149LRXM19C11A0A190',
      startTime: startTimeData,
      endTime: endTimeData,
      peopleNumbers: [{ peopleCategoryId: 'Cadults', number: 1 }],
    };

    try {
      const { data } = await api.post('/availability/matchingslots', body);
      console.log(data);
      setTimeSlots(data.data);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const fetchAvailability = async () => {
    // "Either booked time range or last updated range must be specified"

    const startTimeData = startTime ? startTime : new Date().toISOString();

    let endTimeData: string;
    if (!endTime) {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 30);

      endTimeData = endDate.toISOString();
    } else {
      endTimeData = endTime;
    }

    const timeRange: TimeRange = {
      startTime: startTimeData,
      endTime: endTimeData,
    };

    try {
      const { data } = await api.get(
        `/availability/slots?startTime=${timeRange.startTime}&endTime=${timeRange.endTime}`,
      );
      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <>
      <button type="button" onClick={() => fetchBookings()} className="bg-brand text-light p-4 text-6xl">
        FETCH BOOKINGS
      </button>

      <button type="button" onClick={() => postBooking()} className="bg-[red] text-light p-4 text-6xl">
        POST BOOKING
      </button>

      <button
        type="button"
        onClick={() => fetchAvailability()}
        className="bg-[yellow] text-dark p-4 text-6xl"
      >
        GET AVAILABILITY
      </button>

      <button
        type="button"
        onClick={() => searchAvailability()}
        className="bg-[orange] text-dark p-4 text-6xl"
      >
        SEARCH AVAILABILITY
      </button>

      <div className="grid grid-cols-4 gap-4">
        {timeSlots.map(({ eventId, startTime }) => (
          <button key={eventId} type="button" className="rounded-lg bg-amber-500 p-2 text-light">
            {startTime.slice(0, 10)}
          </button>
        ))}
      </div>
    </>
  );
};
