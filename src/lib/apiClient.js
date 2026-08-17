import axios from 'axios';

// Use the full backend URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ace-tech-hub-backend.onrender.com';

console.log('🔗 API Base URL:', API_BASE_URL);

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 second timeout
  withCredentials: true,
});

// Add token to requests
apiClient.interceptors.request.use(
  (config) => {
    console.log('🚀 API Request:', config.method.toUpperCase(), config.baseURL + config.url);
    
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Handle responses
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.message);
    
    if (error.code === 'ECONNABORTED') {
      console.error('⏱️ Request timeout - backend may not be responding');
    }
    
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;