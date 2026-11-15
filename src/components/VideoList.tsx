import Video from './Video';

export interface VideoItem {
  url: string;
  date: string;
}

interface VideoListProps {
  list: VideoItem[];
}

function VideoList({ list }: VideoListProps) {
  return list.map((item) => <Video key={item.url} url={item.url} date={item.date} />);
}

export default VideoList;
