import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api: AxiosInstance = axios.create({
  baseURL
});

export const FAQApi: AxiosInstance = axios.create({});
