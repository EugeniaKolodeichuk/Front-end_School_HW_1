import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../../images/default.jpg';
import styles from './NewsView.module.css';
import Loader from '../../components/Loader/Loader';
import { getTrendingFeed } from '../../service/app';

export default function NewsView() {
  const [trendingFeed, setTrendingFeed] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = event => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    try {
      getTrendingFeed(currentPage).then(data => {
        setTrendingFeed([...trendingFeed, ...data]);
        setCurrentPage(previousState => previousState + 1);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  }, [fetching]);

  return (
    <div className={styles.wrap}>
      {trendingFeed.length > 0 ? (
        trendingFeed.map(user => (
          <div className={styles.list_noorder} key={user.id}>
            {user.video.playAddr ? (
              <video width="300px" controls="controls">
                <source src={user.video.playAddr} type="video/mp4;" />
                <track kind="captions" srcLang="en" label="english_captions" />
              </video>
            ) : (
              <Loader />
            )}
            <p>{user.author.signature}</p>
            <div className={styles.user_info}>
              {user.author.avatarThumb ? (
                <img
                  key={user.video.id}
                  width="70px"
                  src={user.author.avatarThumb}
                  alt={user.author.nickname}
                  className={styles.avatar}
                />
              ) : (
                <img
                  width="150px"
                  src={defaultImage}
                  alt={user.author.nickname}
                />
              )}
              <p>
                <Link
                  className={styles.link}
                  to={`/profile/${user.author.uniqueId}`}
                >
                  <b>{user.author.nickname}</b>
                </Link>
              </p>
            </div>
            <p>
              Comments: <b>{user.stats.commentCount}</b>
            </p>
            <p>
              Likes: <b>{user.stats.diggCount}</b>
            </p>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
