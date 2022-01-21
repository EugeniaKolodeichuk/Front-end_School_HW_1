/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserAvatar.module.css';
import defaultImage from '../../images/default.jpg';

const UserAvatar = ({ nickname, avatarMedium, signature }) => {
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

UserAvatar.propTypes = {
  avatarMedium: PropTypes.string,
  nickname: PropTypes.string,
  signature: PropTypes.string,
};

export default UserAvatar;
