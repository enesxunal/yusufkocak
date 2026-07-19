import {
  DAY_NAMES,
  MONTH_NAMES,
  SITE,
  WEEKDAY_HOURS,
  WEEKEND_HOURS,
} from "./constants";

export type AvailableDate = {
  value: string;
  label: string;
  isWeekend: boolean;
};

export function getAvailableDates(daysAhead = 30): AvailableDate[] {
  const dates: AvailableDate[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 1; i <= daysAhead; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayIndex = date.getDay();
    const isWeekend = dayIndex === 0 || dayIndex === 6;

    const label = `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}, ${DAY_NAMES[dayIndex]}`;

    dates.push({
      value: date.toISOString().split("T")[0],
      label,
      isWeekend,
    });
  }

  return dates;
}

export function getHoursForDate(isWeekend: boolean): number[] {
  return isWeekend ? [...WEEKEND_HOURS] : [...WEEKDAY_HOURS];
}

export function formatHour(hour: number): string {
  return `${hour.toString().padStart(2, "0")}:00`;
}

export function buildWhatsAppUrl(
  name: string,
  dateLabel: string,
  hour: number,
): string {
  const message = `Merhaba, ben ${name.trim()}.

15 dakikalık ücretsiz ön görüşme için ${dateLabel} tarihinde saat ${formatHour(hour)} civarında randevu almak istiyorum.

Uygunluğunuzu paylaşabilir misiniz?`;

  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;
}
