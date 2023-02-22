import axios from "axios";
import { ENDPOINT, REQUEST_TIMEOUT } from "../const";
import { getToken } from "./token";

export const createAPI = () => {
  const api = axios.create({
    baseURL: ENDPOINT,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers["x-token"] = token;
    }

    return config;
  });

  return api;
};
