import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import Stats from '../Stats/Stats';
import Video from '../Video/Video';
import styles from './TrendingFeed.module.css';
import Loader from '../Loader/Loader';

const TrendingFeed = ({ feed }) => {
  return feed.video.playAddress ? (
    <div className={styles.list_noorder} key={feed.author.nickname}>
      <Video playAddress={feed.video.playAddress} />
      <p>{feed.author.signature}</p>
      <div className={styles.feed_info}>
        <Avatar
          avatarThumb={feed.author.avatarThumb}
          nickname={feed.author.nickname}
        />
        <p>
          <Link className={styles.link} to={`/profile/${feed.author.uniqueId}`}>
            <b>{feed.author.nickname}</b>
          </Link>
        </p>
      </div>
      <Stats
        commentCount={feed.stats.commentCount}
        diggCount={feed.stats.diggCount}
      />
    </div>
  ) : (
    <Loader />
  );
};

TrendingFeed.propTypes = {
  feed: PropTypes.any.isRequired,
};
export default TrendingFeed;
