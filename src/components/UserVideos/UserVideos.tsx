import React from 'react';
import VideoStats from '../VideoStats/VideoStats';
import styles from './UserVideos.module.css';
import { IUserVideos } from '../../types/userTypes';

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

export default UserVideos;
