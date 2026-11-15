const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

function plural(value: number, one: string, few: string, many: string): string {
  const lastTwo = value % 100;
  const last = value % 10;
  if (lastTwo >= 11 && lastTwo <= 14) {
    return many;
  }
  if (last === 1) {
    return one;
  }
  return last >= 2 && last <= 4 ? few : many;
}

export function formatRelativeDate(date: string, now = Date.now()): string {
  const diff = Math.max(now - new Date(date.replace(' ', 'T')).getTime(), 0);

  if (diff < HOUR_MS) {
    const minutes = Math.floor(diff / MINUTE_MS);
    return `${minutes} ${plural(minutes, 'минуту', 'минуты', 'минут')} назад`;
  }
  if (diff < DAY_MS) {
    const hours = Math.floor(diff / HOUR_MS);
    return `${hours} ${plural(hours, 'час', 'часа', 'часов')} назад`;
  }
  const days = Math.floor(diff / DAY_MS);
  return `${days} ${plural(days, 'день', 'дня', 'дней')} назад`;
}
