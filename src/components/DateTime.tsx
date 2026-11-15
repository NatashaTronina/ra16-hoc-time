export interface DateTimeProps {
  date: string;
}

function DateTime({ date }: DateTimeProps) {
  return <p className="date">{date}</p>;
}

export default DateTime;
