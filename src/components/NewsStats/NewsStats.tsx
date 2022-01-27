/* eslint-disable react/require-default-props */
/* import { number } from 'prop-types'; */
import React from 'react';
/* import PropTypes from 'prop-types'; */
import { IStats } from '../../types/feedTypes';

/* interface IStats {
  commentCount: number;
  diggCount: number;
} */

const Stats = ({ commentCount = 0, diggCount = 0 }: IStats) => {
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

/* Stats.propTypes = {
  commentCount: PropTypes.number,
  diggCount: PropTypes.number,
}; */

export default Stats;
