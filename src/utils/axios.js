import axios from "axios";

const baseUrl = process.env.REACT_APP_URL;

let headers = {};

const token = localStorage.getItem("token");

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers,
});

export default axiosInstance;
