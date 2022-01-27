import React from 'react';
import PropTypes from 'prop-types';
import VideoStats from '../VideoStats/VideoStats';
import styles from './UserVideos.module.css';
import { IUserVideos } from '../../types/userTypes';

/* export interface IUserVideos{
  user: {
    video: {
      id: number,
      originCover: string,
    },
    desc: string,
    stats: {
      commentCount: number,
      diggCount: number,
      playCount: number,
    },
  }
} */

const UserVideos = ({ user }: IUserVideos) => {
  return (
    <div className={styles.list_noorder}>
      <VideoStats
        playCount={user.stats.playCount}
        diggCount={user.stats.diggCount}
        commentCount={user.stats.commentCount}
      />
      <img
        key={user.video.id}
        src={user.video.originCover}
        alt={user.desc}
        className={styles.main_element}
      />
      <p>{user.desc}</p>
    </div>
  );
};

UserVideos.propTypes = {
  user: PropTypes.any.isRequired,
};

export default UserVideos;