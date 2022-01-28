import React from 'react';
import styles from './Avatar.module.css';
import defaultImage from '../../static/default.jpg';
import { IAvatar } from '../../types/feedTypes';

const Avatar = ({ avatarThumb, nickname }: IAvatar) => {
  return (
    <img
      width="70px"
      src={avatarThumb || defaultImage}
      alt={nickname}
      className={styles.avatar}
    />
  );
};

export default Avatar;
