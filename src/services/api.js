// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://mood-tracker-backend-myjj.onrender.com';

export const getMoods = () => axios.get(`${BASE_URL}/moods`);
export const postMood = (data) => axios.post(`${BASE_URL}/moods`, data);
