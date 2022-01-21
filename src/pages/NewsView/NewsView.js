import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
/* import defaultImage from '../../images/default.jpg'; */
import styles from './NewsView.module.css';
import Loader from '../../components/Loader/Loader';
import { getTrendingFeed } from '../../service/app';
/* import Video from '../../components/Video/Video';
import Avatar from '../../components/Avatar/Avatar';
import Stats from '../../components/Stats/Stats'; */
import TrendingFeed from '../../components/TrendingFeed/TrendingFeed';

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
        trendingFeed.map(feed => <TrendingFeed key={feed.id} feed={feed} />)
      ) : (
        <Loader />
      )}
    </div>
  );
}
