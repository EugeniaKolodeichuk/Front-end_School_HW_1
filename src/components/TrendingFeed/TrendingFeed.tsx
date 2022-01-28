import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Stats from '../NewsStats/NewsStats';
import Video from '../Video/Video';
import styles from './TrendingFeed.module.css';
import Loader from '../Loader/Loader';

interface ITrendingFeed {
  feed: {
    video: {
      downloadAddr: string;
    };
    author: {
      signature: string;
      avatarThumb: string;
      nickname: string;
      uniqueId: string;
    };
    stats: {
      commentCount: number;
      diggCount: number;
    };
  };
}

const TrendingFeed = ({ feed }: ITrendingFeed) => {
  return feed.video.downloadAddr ? (
    <div className={styles.list_noorder} key={feed.author.nickname}>
      <Video downloadAddr={feed.video.downloadAddr} />
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

export default TrendingFeed;
