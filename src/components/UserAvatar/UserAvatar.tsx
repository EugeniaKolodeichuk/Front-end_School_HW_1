import {
  StyledListNoorder,
  StyledAvatar,
  StyledTitle,
} from './StyledUserAvatar';
import defaultImage from '../../static/default.jpg';
import { IUserAvatar } from '../../types/userTypes';

const UserAvatar = ({ nickname, avatarMedium, signature }: IUserAvatar) => {
  return (
    <StyledListNoorder>
      <StyledAvatar
        key={nickname}
        width="150px"
        src={avatarMedium || defaultImage}
        alt={nickname}
      />
      <StyledTitle>{nickname}</StyledTitle>
      <p>{signature}</p>
    </StyledListNoorder>
  );
};

export default UserAvatar;
