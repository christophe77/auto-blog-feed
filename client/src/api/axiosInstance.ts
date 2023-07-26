import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: { 'content-type': 'application/json' },
    responseType: 'json'
});

export default axiosInstance