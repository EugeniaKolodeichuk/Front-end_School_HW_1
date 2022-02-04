import Avatar from '../Avatar/Avatar';
import Stats from '../NewsStats/NewsStats';
import Video from '../Video/Video';
import Loader from '../Loader/Loader';
import {
  StyledListNoorder,
  StyledLink,
  StyledFeedInfo,
} from './StyledTrendingFeed';

interface ITrendingFeed {
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

const TrendingFeed = ({ feed }: ITrendingFeed) => {
  return feed.video.downloadAddr ? (
    <StyledListNoorder key={feed.author.nickname}>
      <Video downloadAddr={feed.video.downloadAddr} />
      <p>{feed.author.signature}</p>
      <StyledFeedInfo>
        <Avatar
          avatarThumb={feed.author.avatarThumb}
          nickname={feed.author.nickname}
        />
        <p>
          <StyledLink to={`/profile/${feed.author.uniqueId}`}>
            <b>{feed.author.nickname}</b>
          </StyledLink>
        </p>
      </StyledFeedInfo>
      <Stats
        commentCount={feed.stats.commentCount}
        diggCount={feed.stats.diggCount}
      />
    </StyledListNoorder>
  ) : (
    <Loader />
  );
};

export default TrendingFeed;
