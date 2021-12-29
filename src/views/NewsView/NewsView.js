import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import defaultImage from '../../images/default.png';
import styles from './NewsView.module.css';
import Loader from '../../components/Loader/Loader';
import { getTrends } from '../../service/app';

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

  const axios = require('axios').default;

  /*const trends = {
    method: 'GET',
    url: `https://tiktok33.p.rapidapi.com/trending/feed/?limit=30&page=${currentPage}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    },
  }; */

  useEffect(async () => {
    try {
      const response = await axios.request(getTrends(currentPage));
      const { data } = response;

      setTrendingFeed([...trendingFeed, ...data]);
      setCurrentPage(previousState => previousState + 1);
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
          <div className={styles.list_noorder} key={shortid.generate()}>
            <video width="300px" controls="controls">
              <source src={user.videoUrl} type="video/mp4;" />
              <track
                src={user.authorMeta.avatar}
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </video>
            <p>{user.text}</p>
            <div className={styles.user_info}>
              {user.authorMeta.avatar ? (
                <img
                  key={shortid.generate()}
                  width="70px"
                  src={user.authorMeta.avatar}
                  alt={user.authorMeta.nickName}
                  className={styles.avatar}
                />
              ) : (
                <img
                  width="150px"
                  src={defaultImage}
                  alt={user.authorMeta.nickName}
                />
              )}
              <p key={shortid.generate()}>
                <Link
                  className={styles.link}
                  to={`/profile/${user.authorMeta.name}`}
                >
                  <b>{user.authorMeta.nickName}</b>
                </Link>
              </p>
            </div>
            <div className={styles.tags}>
              {user.hashtags &&
                user.hashtags.map(tag => (
                  <p key={shortid.generate()}> #{tag.name} </p>
                ))}
            </div>
            <p>
              Comments: <b>{user.commentCount}</b>
            </p>
            <p>
              Likes: <b>{user.diggCount}</b>
            </p>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
