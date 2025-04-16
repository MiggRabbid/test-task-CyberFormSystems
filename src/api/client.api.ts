import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

import { ABSOLUTE_URL } from './endpoints.api'

export const axiosInstance = axios.create({
  baseURL: ABSOLUTE_URL,
})

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // if (config.method === 'get' || config.method === 'post') {
  //   console.group('axiosInstance');
  //   console.log(config);
  //   console.groupEnd();
  // }

  return config
})
