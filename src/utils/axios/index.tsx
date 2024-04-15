import axios from "axios";
import errorHandler from "./errorHandler";
import { TokenUtil } from "../token";
import { appConfig } from "@/src/configs/app";

const instance = axios.create({
  baseURL: appConfig.apiUrl,
});

instance.interceptors.request.use((config) => {
  if (TokenUtil.accessToken) {
    // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
    config.headers["Authorization"] = "Bearer " + TokenUtil.accessToken; // for Node.js Express back-end
  }
  return config;
}, errorHandler);

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
