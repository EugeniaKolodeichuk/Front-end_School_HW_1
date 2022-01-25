import axios from 'axios';

const baseURL = 'https://tiktok33.p.rapidapi.com';

export const API = axios.create({
  baseURL,
  headers: {
    'x-rapidapi-host': `${process.env.REACT_APP_HOST}`,
    'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export async function getTrendingFeed(currentPage) {
  const response = await API.get(
    `/trending/feed/?limit=30&page=${currentPage}`,
  );
  return response.data;
}

export async function getUserInfo(uniqueId) {
  const response = await API.get(`/user/info/${uniqueId}`);
  return response.data;
}

export async function getUserFeed(uniqueId) {
  const response = await API.get(`/user/feed/${uniqueId}`);
  return response.data;
}
