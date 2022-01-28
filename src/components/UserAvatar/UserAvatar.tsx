/* eslint-disable react/require-default-props */
import React from 'react';
import styles from './UserAvatar.module.css';
import defaultImage from '../../static/default.jpg';
import { IUserAvatar } from '../../types/userTypes';

const UserAvatar = ({ nickname, avatarMedium, signature }: IUserAvatar) => {
  return (
    <div className={styles.list_noorder}>
      <img
        key={nickname}
        width="150px"
        src={avatarMedium || defaultImage}
        alt={nickname}
        className={styles.avatar}
      />
      <h2 className={styles.title}>{nickname}</h2>
      <p>{signature}</p>
    </div>
  );
};

export default UserAvatar;
