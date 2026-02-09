const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.example.com";

type ApiSuccess<T> = {
  success: true;
  data: T;
};

type ApiError = {
  success: false;
  error: {
    message: string;
    status?: number;
    [key: string]: unknown;
  };
};

export type ApiResult<T> = ApiSuccess<T> | ApiError;

const apiClient = {
  post: async <T>(
    endpoint: string,
    body: Object,
    token?: string
  ): Promise<ApiResult<T>> => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        error: {
          message: data.message || `HTTP ${response.status}`,
          status: response.status,
          ...data,
        },
      };
    }

    return {
      success: true,
      data: data as T,
    };
  },

  put: async <T>(
    endpoint: string,
    body: Object,
    token?: string
  ): Promise<ApiResult<T>> => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        error: {
          message: data.message || `HTTP ${response.status}`,
          status: response.status,
          ...data,
        },
      };
    }

    return {
      success: true,
      data: data as T,
    };
  },

  get: async <T>(endpoint: string, token?: string): Promise<ApiResult<T>> => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        error: {
          message: data.message || `HTTP ${response.status}`,
          status: response.status,
          ...data,
        },
      };
    }

    return {
      success: true,
      data: data as T,
    };
  },

  delete: async <T>(endpoint: string, token?: string): Promise<ApiResult<T>> => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        error: {
          message: data.message || `HTTP ${response.status}`,
          status: response.status,
          ...data,
        },
      };
    }

    return {
      success: true,
      data: data as T,
    };
  },
};

export default apiClient;