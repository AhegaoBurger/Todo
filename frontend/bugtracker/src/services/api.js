// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',  // Adjust this to your Django backend's URL
});

export default api;