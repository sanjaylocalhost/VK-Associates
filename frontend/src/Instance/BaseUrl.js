import axios from 'axios';

// Create axios instance with base URL
const BaseURL = axios.create({
  baseURL: 'http://localhost:5000/api', // Make sure this matches your backend port
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add token to all requests
BaseURL.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
BaseURL.interceptors.response.use(
  (response) => {
    // Check if response has the expected structure
    return response;
  },
  (error) => {
    // Handle 401 unauthorized errors
    if (error.response?.status === 401) {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default BaseURL;