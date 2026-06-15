// src/api/api.js

const BASE_URL = "http://127.0.0.1:8000";

export const API = {
  login: `${BASE_URL}/user/login/`,
  register: `${BASE_URL}/user/register/`,
  getUser: (userId) => `${BASE_URL}/user/${userId}/`,
  deleteUser: (userId) => `${BASE_URL}/user/${userId}/delete/`,
  getAllUsers: `${BASE_URL}/user/users/`,
};