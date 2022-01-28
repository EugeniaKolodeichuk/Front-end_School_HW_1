/* eslint-disable react/require-default-props */
import React from 'react';
import { IStats } from '../../types/feedTypes';

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

export default Stats;
