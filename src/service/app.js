import axios from 'axios';

const baseURL = 'https://tiktok33.p.rapidapi.com/';

export default axios.create({
  baseURL,
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c17160964emsh53c95fe98847290p1030d7jsne22e88c7eb61',
    'Content-Type': 'application/json',
  },
});

export function getTrends(currentPage) {
  return axios.get(`/trending/feed/?limit=30&page=${currentPage}`);
}

/* export function getUserInfo(username) {
  return axios.get(`/user/info/${username}`);
}

export function getUserFeed() {
  return axios.get('/trending/feed');
} */

/* import { useState } from 'react';

const [currentPage] = useState(1);

const getTrends = {
  method: 'GET',
  url: `https://tiktok33.p.rapidapi.com/trending/feed/?limit=30&page=${currentPage}`,
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  },
};
export default getTrends; */
