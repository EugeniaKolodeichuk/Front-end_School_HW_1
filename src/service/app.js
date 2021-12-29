import axios from 'axios';

const baseURL = 'https://tiktok33.p.rapidapi.com/';

export default axios.create({
  baseURL,
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    'Content-Type': 'application/json',
  },
});

export function getTrends(currentPage) {
  return axios.get(`/trending/feed/?limit=30&page=${currentPage}`);
}
