import api from "../api/api";
import type { Task, TaskCreate, TaskUpdate } from "../types/task";

export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get("/task/");
  return response.data;
};

export const createTask = async (data: TaskCreate): Promise<Task> => {
  const response = await api.post("/task/create", data);
  return response.data;
};

export const updateTask = async (
  taskId: number,
  data: TaskUpdate
): Promise<Task> => {
  const response = await api.patch(`/task/${taskId}`, data);
  return response.data;
};

export const deleteTask = async (taskId: number): Promise<void> => {
  await api.delete(`/task/${taskId}`);
};
