import type { MatchingSlot } from '../../types/api/availability';
import type { TimeWindow } from '../../types/app';

export const slotsCache: Record<string, MatchingSlot[]> = {};
export const slotsCacheExpires: Record<string, number> = {};
export const SLOTS_TTL = 60_000; // 1 minute TTL

export const getSlotsCacheKey = (productId: string, timeWindow: TimeWindow, numberOfParticipants: number) =>
  `${productId}-${timeWindow.startTime}-${timeWindow.endTime}-${numberOfParticipants}`;
