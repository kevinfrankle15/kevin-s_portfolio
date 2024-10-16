import Axios from "axios";

const baseurl = "http://127.0.0.1:8000/";

const AxiosInstance = Axios.create({
  baseURL: baseurl,
  timeout: 4000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default AxiosInstance;
