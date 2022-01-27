/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ commentCount = 0, diggCount = 0 }) => {
  return (
    <ul>
      <li>
        Comments: <b>{commentCount}</b>
      </li>
      <li>
        Likes: <b>{diggCount}</b>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  commentCount: PropTypes.number,
  diggCount: PropTypes.number,
};

export default Stats;
