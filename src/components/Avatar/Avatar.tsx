import React from 'react';
/* import PropTypes from 'prop-types'; */
import styles from './Avatar.module.css';
import defaultImage from '../../images/default.jpg';

const Avatar = ({ avatarThumb, nickname }:{avatarThumb:string, nickname: string}) => {
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
}; */

/* export{} */
export default Avatar;
