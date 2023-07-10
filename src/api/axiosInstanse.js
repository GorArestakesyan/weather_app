import axios from "axios";
import { BASE_URL } from "./baseURL";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  async (config) => {
    config.baseURL = BASE_URL;
    // config.headers["Authorization"] = API_KEY;
    return config;
  },
  (error) => {
    console.log("axiosInstance error", error);
    return Promise.reject(error);
  }
);
export default axiosInstance;
