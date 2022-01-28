/* eslint-disable react/require-default-props */
import React from 'react';
import { IVideoStats } from '../../types/userTypes';

const VideoStats = ({
  playCount = 0,
  diggCount = 0,
  commentCount = 0,
}: IVideoStats) => {
  return (
    <ul>
      <li>
        <b>{playCount}</b> views
      </li>
      <li>
        <b>{diggCount}</b> likes
      </li>
      <li>
        <b>{commentCount}</b> comments
      </li>
    </ul>
  );
};

export default VideoStats;
