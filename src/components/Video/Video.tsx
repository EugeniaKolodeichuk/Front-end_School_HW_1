import Loader from '../Loader/Loader';
import { VideoProperties } from '../../types/feedTypes';

const Video = ({ downloadAddr }: VideoProperties) => {
  return downloadAddr ? (
    <video width="300px" controls data-testid="video">
      <source src={downloadAddr} type="video/mp4;" />
      <track kind="captions" srcLang="en" label="english_captions" />
    </video>
  ) : (
    <Loader />
  );
};

export default Video;
