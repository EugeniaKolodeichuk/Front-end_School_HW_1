/* eslint-disable react/require-default-props */
import UserAvatar from '../UserAvatar/UserAvatar';
import { StyledProfile, StyledTitle } from './StyledUserInfo';
import { IUserProperties } from '../../types/userTypes';

// eslint-disable-next-line object-curly-newline
const UserInfo = ({
  uniqueId,
  avatarMedium,
  nickname,
  signature,
}: IUserProperties) => {
  return (
    <StyledProfile key={uniqueId}>
      <UserAvatar
        avatarMedium={avatarMedium}
        nickname={nickname}
        signature={signature}
      />
      <StyledTitle>Other posts created by {nickname}</StyledTitle>
    </StyledProfile>
  );
};

export default UserInfo;
