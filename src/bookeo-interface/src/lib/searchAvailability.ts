import type { AxiosInstance } from 'axios';
import type {
  FindAvailableSlotsBody,
  FindAvailableSlotsResponse,
} from '../types/api/availability/post.types';

export const searchAvailability = async (
  api: AxiosInstance,
  productId: string,
  startTime: string,
  endTime: string,
  numberOfParticipants: number,
): Promise<FindAvailableSlotsResponse> => {
  const body: FindAvailableSlotsBody = {
    productId,
    startTime,
    endTime,
    peopleNumbers: [{ peopleCategoryId: 'Cadults', number: numberOfParticipants }],
  };

  const { data } = await api.post('/availability/matchingslots', body);

  return data;
};
