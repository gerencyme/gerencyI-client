import axios, { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const cookies = parseCookies();

const token = cookies._t;

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `bearer ${token}`
  }
});

export const FAQApi: AxiosInstance = axios.create({});
