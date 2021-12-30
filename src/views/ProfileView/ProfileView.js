import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import defaultImage from '../../images/default.png';
import styles from './ProfileView.module.css';
import Loader from '../../components/Loader/Loader';

export default function ProfileView() {
  const { uniqueId } = useParams();

  const [userFeed, setUserFeed] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  //TODO remove api information to service component

  const axios = require('axios').default;

  const info = {
    method: 'GET',
    url: `https://tiktok33.p.rapidapi.com/user/info/${uniqueId}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    },
  };

  useEffect(async () => {
    try {
      const response = await axios.request(info);
      const infoData = response.data;
      setUserInfo(infoData);
    } catch (error) {
      console.error(error);
    }
  }, [setUserInfo]);

  const feed = {
    method: 'GET',
    url: `https://tiktok33.p.rapidapi.com/user/feed/${uniqueId}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    },
  };

  useEffect(async () => {
    try {
      const response = await axios.request(feed);
      const feedsData = response.data;
      setUserInfo(feedsData);
    } catch (error) {
      console.error(error);
    }
  }, [setUserFeed]);

  return (
    <div key={shortid.generate()}>
      {userInfo.user && (
        <div key={shortid.generate()} className={styles.profile}>
          <div className={styles.list_noorder}>
            {userInfo.user.avatarThumb ? (
              <img
                key={shortid.generate()}
                width="150px"
                src={userInfo.user.avatarMedium}
                alt={userInfo.user.nickname}
                className={styles.avatar}
              />
            ) : (
              <img
                width="150px"
                src={defaultImage}
                alt={userInfo.user.nickname}
              />
            )}
            <h2 className={styles.title}>{userInfo.user.nickname}</h2>
            <p>{userInfo.user.signature}</p>
            <p>
              <b>{userInfo.stats.followerCount}</b> followers
            </p>
            <p>
              <b>{userInfo.stats.followingCount}</b> followings
            </p>
            <p>
              <b>{userInfo.stats.videoCount}</b> videos
            </p>
            <p>
              <b>{userInfo.stats.heart}</b> hearts
            </p>
          </div>
          <h2 className={styles.title}>
            Other posts created by {userInfo.user.nickname}
          </h2>
        </div>
      )}
      <div className={styles.wrap} key={shortid.generate()}>
        {userFeed.length > 0 ? (
          userFeed.map(user => (
            <div key={shortid.generate()} className={styles.list_noorder}>
              <p>
                <b>{user.stats.playCount}</b> views
              </p>
              {user.video.originCover ? (
                <img
                  key={shortid.generate()}
                  src={user.video.originCover}
                  alt={user.desc}
                  className={styles.main_element}
                />
              ) : (
                <img
                  width="150px"
                  src={defaultImage}
                  alt={userInfo.user.nickname}
                />
              )}

              <p>{user.desc}</p>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
