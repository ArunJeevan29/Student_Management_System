import api from "../api/axios";

export const getStudents = () => api.get("/api/students");

export const createStudent = (student) => api.post("/api/students", student);

export const updateStudent = (id, student) => api.put(`/api/students/${id}`, student);

export const deleteStudent = (id) => api.delete(`/api/students/${id}`);

export const getStudent = (id) => api.get(`/api/students/${id}`);
