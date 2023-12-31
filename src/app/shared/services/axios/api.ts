import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = (clientToken?: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `bearer ${clientToken}`
    }
  });
};

export const FAQApi: AxiosInstance = axios.create({});
