import config from '../../config';
import humps from 'humps';
import axios from 'axios';

import storeConfig from '../../store';
import { resetStore } from '../../store/system';
// import { getAccessToken } from '../../store/auth/auth-selectors';

const axiosApi = axios.create({
  baseURL: config.API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  transformRequest: [
    (data) => {
      // convert all body keys to snack_case
      let output: any = humps.decamelizeKeys(data);

      // convert  all body values to strings
      if (typeof output === 'object') {
        output = JSON.stringify(output);
      }
      return output;
    },
  ],
  transformResponse: [(data) => humps.camelizeKeys(JSON.parse(data))],
});

axiosApi.interceptors.request.use(
  (config) => {
    // const state: any = storeConfig.store.getState();
    // const accessToken = getAccessToken(state);

    // if (accessToken) {
    //   config.headers = {
    //     ...config.headers,
    //     // Authorization: `Bearer ${accessToken}`,
    //   };
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response && error.response.status === 401) {
      storeConfig.store.dispatch(resetStore());
    }
    return Promise.reject(error);
  }
);

export default axiosApi;
