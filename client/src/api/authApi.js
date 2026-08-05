import api from "./axios";

export const checkLogin = (user) => api.post("/api/auth/login", user);

export const registerUser = (user) => api.post("/api/auth/register", user);
