import axios from 'axios'

const LOCAL_URL = "http://localhost:8000/";
const PRODUCTION_URL = "https://localhost:8000/";
const baseURL = LOCAL_URL

const axiosInstance = axios.create({
    withCredentials: true, 
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',  
    baseURL: baseURL,
  })

export default axiosInstance