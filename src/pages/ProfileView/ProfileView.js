import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import styles from './ProfileView.module.css';
import Loader from '../../components/Loader/Loader';
import { getUserFeed, getUserInfo } from '../../service/app';
import UserVideos from '../../components/UserVideos/UserVideos';
import UserInfo from '../../components/UserInfo/UserInfo';

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
    <div key={userInfo.id} data-testid="profile">
      <UserInfo
        uniqueId={userInfo.uniqueId}
        nickname={userInfo.nickname}
        avatarMedium={userInfo.avatarMedium}
        signature={userInfo.signature}
      />
      <div className={styles.wrap} key={userFeed.id}>
        {userFeed > 0 ? (
          userFeed.map(user => <UserVideos key={user.createTime} user={user} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
