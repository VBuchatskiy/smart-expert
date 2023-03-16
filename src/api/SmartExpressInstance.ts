import axios from "axios";

const SmartExpressInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

SmartExpressInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error) => {
    throw error;
  }
);

SmartExpressInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    throw error;
  }
);

export { SmartExpressInstance };
