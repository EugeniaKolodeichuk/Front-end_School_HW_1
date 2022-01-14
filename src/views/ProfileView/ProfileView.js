import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import defaultImage from '../../images/default.jpg';
import styles from './ProfileView.module.css';
import Loader from '../../components/Loader/Loader';
import { getUserFeed, getUserInfo } from '../../service/app';

export default function ProfileView() {
  const { uniqueId } = useParams();

  const [userFeed, setUserFeed] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    try {
      getUserInfo(uniqueId).then(data => {
        setUserInfo(data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [setUserInfo]);

  useEffect(() => {
    try {
      getUserFeed(uniqueId).then(data => {
        setUserFeed(data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [setUserFeed]);

  return (
    <div key={userInfo.id}>
      {userInfo && (
        <div key={userInfo.uniqueId} className={styles.profile}>
          <div className={styles.list_noorder}>
            {userInfo.avatarThumb ? (
              <img
                key={userInfo.nickname}
                width="150px"
                src={userInfo.avatarMedium}
                alt={userInfo.nickname}
                className={styles.avatar}
              />
            ) : (
              <img width="150px" src={defaultImage} alt={userInfo.nickname} />
            )}
            <h2 className={styles.title}>{userInfo.nickname}</h2>
            <p>{userInfo.signature}</p>
          </div>
          <h2 className={styles.title}>
            Other posts created by {userInfo.nickname}
          </h2>
        </div>
      )}
      <div className={styles.wrap} key={userFeed.id}>
        {userFeed.length ? (
          userFeed.map(user => (
            <div key={user.createTime} className={styles.list_noorder}>
              <p>
                <b>{user.stats.playCount}</b> views
              </p>
              {user.video.originCover ? (
                <img
                  key={user.video.id}
                  src={user.video.originCover}
                  alt={user.desc}
                  className={styles.main_element}
                />
              ) : (
                <img width="150px" src={defaultImage} alt={userInfo.nickname} />
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
