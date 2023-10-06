import axios from 'axios';

// TODO: Figure out how to set baseURL dynamically
const isProduction = false;
const LOCAL_URL = 'http://localhost:8000/';
const PRODUCTION_URL = 'https://localhost:8000/';
const baseURL = isProduction ? PRODUCTION_URL : LOCAL_URL;

const axiosInstance = axios.create({
	withCredentials: true,
	xsrfCookieName: 'csrftoken',
	xsrfHeaderName: 'X-CSRFToken',
	baseURL: baseURL,
});

export default axiosInstance;
