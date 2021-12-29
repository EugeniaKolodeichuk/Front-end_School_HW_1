import axios from 'axios';

const baseURL = 'https://tiktok33.p.rapidapi.com/';

export default axios.create({
  baseURL,
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': '98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551',
    'Content-Type': 'application/json',
  },
});

export function getTrends(currentPage) {
  return axios.get(`/trending/feed/?limit=30&page=${currentPage}`);
}
