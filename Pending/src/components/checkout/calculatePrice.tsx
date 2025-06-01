import { differenceInCalendarDays } from 'date-fns';

export function calculatePricePerPage(deliveryDate: Date): number {
  const today = new Date();
  const selected = new Date(deliveryDate);
  const daysDiff = differenceInCalendarDays(selected, today);

  if (daysDiff >= 9) return 9;
  if (daysDiff === 8) return 10;
  if (daysDiff === 6 || daysDiff === 7) return 11.5;
  if (daysDiff === 4 || daysDiff === 5) return 12.5;
  if (daysDiff === 1 || daysDiff === 2 || daysDiff === 3) return 13.5;
  return 14.5; // same day or invalid
}
