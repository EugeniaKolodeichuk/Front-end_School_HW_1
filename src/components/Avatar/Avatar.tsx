import defaultImage from '../../static/default.jpg';
import { IAvatar } from '../../types/feedTypes';
import StyledAvatar from './StyledAvatar';

const Avatar = ({ avatarThumb, nickname }: IAvatar) => {
  return (
    <StyledAvatar
      width="70px"
      src={avatarThumb || defaultImage}
      alt={nickname}
    />
  );
};

export default Avatar;
