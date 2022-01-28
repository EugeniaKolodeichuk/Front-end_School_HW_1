import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import styles from './NewsView.module.css';
import Loader from '../../components/Loader/Loader';
import { getTrendingFeed } from '../../service/app';
import TrendingFeed from '../../components/TrendingFeed/TrendingFeed';
import { ITrendingFeed } from '../../types/feedTypes';

export default function NewsView() {
  const [trendingFeed, setTrendingFeed] = useState<ITrendingFeed[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (event: any): void => {
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
    <div className={styles.wrap} key={shortid.generate()}>
      {trendingFeed.length > 0 ? (
        trendingFeed.map(feed => (
          <TrendingFeed key={shortid.generate()} feed={feed} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
