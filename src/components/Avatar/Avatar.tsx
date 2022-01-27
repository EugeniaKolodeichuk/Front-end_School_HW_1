import React from 'react';
/* import PropTypes from 'prop-types'; */
import styles from './Avatar.module.css';
import defaultImage from '../../static/default.jpg';
import { IAvatar } from '../../types/feedTypes';

/* interface IAvatar {
  avatarThumb: string;
  nickname: string
} */

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

/* Avatar.propTypes = {
  avatarThumb: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};
 */
export default Avatar;
