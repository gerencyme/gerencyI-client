import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const FAQApiBaseURL = process.env.NEXT_PUBLIC_FAQ_API_BASE_URL;

export const api: AxiosInstance = axios.create({
  baseURL
});

export const FAQApi: AxiosInstance = axios.create({
  baseURL: FAQApiBaseURL
});
