import apiClient from "./client";
import type { ApiResult } from "./client"; // Import the type

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  token: string;
}

const authApi = {
  login: (credentials: LoginCredentials): Promise<ApiResult<LoginResponse>> => {
    return apiClient.post<LoginResponse>("/auth/login", credentials);
  },

  logout: (): Promise<ApiResult<void>> => {
    return apiClient.post<void>("/auth/logout", {});
  },

  me: (token: string): Promise<ApiResult<LoginResponse["user"]>> => {
    return apiClient.get<LoginResponse["user"]>("/auth/me", token);
  },
};

export default authApi;