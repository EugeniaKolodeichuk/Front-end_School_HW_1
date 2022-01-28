/* eslint-disable react/require-default-props */
import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './UserInfo.module.css';
import { IUserInfo } from '../../types/userTypes';

// eslint-disable-next-line object-curly-newline
const UserInfo = ({
  uniqueId,
  avatarMedium,
  nickname,
  signature,
}: IUserInfo) => {
  return (
    <div key={uniqueId} className={styles.profile}>
      <UserAvatar
        avatarMedium={avatarMedium}
        nickname={nickname}
        signature={signature}
      />
      <h2 className={styles.title}>Other posts created by {nickname}</h2>
    </div>
  );
};

export default UserInfo;
