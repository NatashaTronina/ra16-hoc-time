import DateTimePretty from './DateTimePretty';

interface VideoProps {
  url: string;
  date: string;
}

function Video({ url, date }: VideoProps) {
  return (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen title="Видео"></iframe>
      <DateTimePretty date={date} />
    </div>
  );
}

export default Video;
