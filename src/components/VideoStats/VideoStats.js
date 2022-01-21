import React from 'react';
import PropTypes from 'prop-types';
/* import styles from './VideoStats.module.css'; */

const VideoStats = ({ playCount, diggCount, commentCount }) => {
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

VideoStats.propTypes = {
  playCount: PropTypes.number.isRequired,
  diggCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default VideoStats;
