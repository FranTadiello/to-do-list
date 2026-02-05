import api from "../api/api";
import type{ LoginData, LoginResponse } from "../types/user";

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const formData = new URLSearchParams();
  formData.append("username", data.username);
  formData.append("password", data.password);

  const response = await api.post<LoginResponse>("/auth/login", formData);

  return response.data;
};
