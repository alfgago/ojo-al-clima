import axios from 'axios';

export const customAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/api/`,
});

export const wordpressAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2`,
});

export const adsAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/advanced-ads/v1/`,
});

export const contactFormAPI = (id: number) => `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`;