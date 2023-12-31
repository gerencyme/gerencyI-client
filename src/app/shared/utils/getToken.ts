import { parseCookies } from 'nookies';

const cookies = parseCookies();

const token = cookies._t;

export const getToken = () => token;
