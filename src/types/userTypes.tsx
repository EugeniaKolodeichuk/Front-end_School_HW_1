export interface IUserAvatar {
  nickname: string;
  avatarMedium: string;
  signature: string;
}

export interface IUserInfo {
  uniqueId: string;
  avatarMedium: string;
  nickname: string;
  signature: string;
}

export interface IUserVideos {
  user: {
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
  };
}

export interface IVideoStats {
  playCount: number;
  diggCount: number;
  commentCount: number;
}
