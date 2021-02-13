import axios from "axios";
import consts from "./consts";

const api = axios.create({
  baseURL: consts.baseUrl,
  params: {
    api_key: consts.apiKey,
  },
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default api;
