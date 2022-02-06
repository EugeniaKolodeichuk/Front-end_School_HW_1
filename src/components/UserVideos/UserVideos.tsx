import VideoStats from '../VideoStats/VideoStats';
import { IUserVideos } from '../../types/userTypes';
import { StyledListNoorder, StyledMainElement } from './StyledUserVideos';

const UserVideos = ({ user }: IUserVideos) => {
  return (
    <StyledListNoorder>
      <VideoStats
        playCount={user.stats.playCount}
        diggCount={user.stats.diggCount}
        commentCount={user.stats.commentCount}
      />
      <StyledMainElement
        key={user.video.id}
        src={user.video.originCover}
        alt={user.desc}
      />
      <p>{user.desc}</p>
    </StyledListNoorder>
  );
};

export default UserVideos;
