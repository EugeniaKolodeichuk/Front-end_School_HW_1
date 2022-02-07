import axios from 'axios';

const baseURL = 'https://tiktok33.p.rapidapi.com';

const API = axios.create({
  baseURL,
  headers: {
    'x-rapidapi-host': `${process.env.REACT_APP_HOST}`,
    'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default API;
