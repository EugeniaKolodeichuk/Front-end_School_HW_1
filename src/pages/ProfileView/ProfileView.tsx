import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import styles from './ProfileView.module.css';
import Loader from '../../components/Loader/Loader';
import { getUserFeed, getUserInfo } from '../../service/app';
import UserVideos from '../../components/UserVideos/UserVideos';
import UserInfo from '../../components/UserInfo/UserInfo';

interface IUserInfo {
  id: string;
  uniqueId: string;
  nickname: string;
  avatarMedium: string;
  signature: string;
  createTime: number;
  video: {
    id: number;
    originCover: string;
  };
  desc: string;
  stats: {
    commentCount: number;
    diggCount: number;
    playCount: number;
  };
}

/* interface IUserFeed {
  id: string;
  uniqueId: string;
  nickname: string;
  avatarMedium: string;
  signature: string;
  createTime?: any;
  video: {
    id: number;
    originCover: string;
  };
  desc: string;
  stats: {
    commentCount: number;
    diggCount: number;
    playCount: number;
  };
}
 */
/* interface IUser {
  createTime?: any;
  video?: {
    id: number;
    originCover: string;
  };
  desc?: string;
  stats?: {
    commentCount: number;
    diggCount: number;
    playCount: number;
  };
} */

/* id: string;
  video: {
    cover: string;
  };
  author: {
    signature: string;
    avatarThumb: string;
    nickname: string;
    uniqueId: string;
  };
  stats: {
    commentCount: number;
    diggCount: number; */

export default function ProfileView() {
  const { uniqueId } = useParams<{ uniqueId: string }>();

  const [userFeed, setUserFeed] = useState<IUserInfo[]>([]);
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

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
  if (!userInfo) {
    return <Loader />;
  }
  return (
    <div key={userInfo.id} data-testid="profile">
      <UserInfo
        uniqueId={userInfo.uniqueId}
        nickname={userInfo.nickname}
        avatarMedium={userInfo.avatarMedium}
        signature={userInfo.signature}
      />
      <div className={styles.wrap} key={userInfo.id}>
        {userFeed ? (
          userFeed.map((user: IUserInfo) => (
            <UserVideos key={user.createTime} user={user} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
