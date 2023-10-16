import axios from 'axios';

export const customAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/api/`,
});

export const wordpressAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2`,
});
