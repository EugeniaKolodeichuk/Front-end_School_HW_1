/* eslint-disable react/require-default-props */
import React from 'react';
import { IVideoStats } from '../../types/userTypes';
/* import PropTypes from 'prop-types'; */

/* interface IVideoStats {
  playCount: number;
  diggCount: number;
  commentCount: number;
} */

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

/* VideoStats.propTypes = {
  playCount: PropTypes.number,
  diggCount: PropTypes.number,
  commentCount: PropTypes.number,
}; */

export default VideoStats;
