import type { ComponentType } from 'react';
import type { DateTimeProps } from '../components/DateTime';
import { formatRelativeDate } from '../utils/relativeDate';

function withPrettyDate(Wrapped: ComponentType<DateTimeProps>) {
  return function WithPrettyDate({ date }: DateTimeProps) {
    return <Wrapped date={formatRelativeDate(date)} />;
  };
}

export default withPrettyDate;
