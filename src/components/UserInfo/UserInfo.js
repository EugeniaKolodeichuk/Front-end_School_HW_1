/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './UserInfo.module.css';

// eslint-disable-next-line object-curly-newline
const UserInfo = ({ uniqueId, avatarMedium, nickname, signature }) => {
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

UserInfo.propTypes = {
  uniqueId: PropTypes.any,
  avatarMedium: PropTypes.string,
  nickname: PropTypes.string,
  signature: PropTypes.string,
};

export default UserInfo;
