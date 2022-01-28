export interface IAvatar {
  avatarThumb: string;
  nickname: string;
}

export interface IStats {
  commentCount: number;
  diggCount: number;
}

export interface ITrendingFeed {
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

export type VideoProperties = {
  downloadAddr: string;
};

export interface ITrendingFeed {
  id: string;
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
}
