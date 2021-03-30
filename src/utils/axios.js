import axios from "axios";

const baseUrl = process.env.REACT_APP_URL;

let headers = {};

let token;
const user = localStorage.getItem("users");
if (user) {
  token = user.token;
}

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers,
});

export default axiosInstance;
