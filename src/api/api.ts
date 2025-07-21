import axios from 'axios';
import type { Endpoint } from '../types';

export const serverURL =
  import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';

export const axiosInstance = axios.create({
  baseURL: serverURL,
  timeout: 15000,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
  },
});

const ENDPOINT_API = '/endpoints';

export const api = {
  getAll: async (): Promise<Endpoint[]> =>
    (await axiosInstance.get(ENDPOINT_API)).data,
  getMaliciousList: async (endpointId: string): Promise<string[]> =>
    (await axiosInstance.get(`${ENDPOINT_API}/maliciousList/${endpointId}`))
      .data,
};
