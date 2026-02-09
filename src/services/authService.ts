import authApi from "../api/auth";
import { setUser, setError, setLoading, logout, setToken } from "../stores/authStore";

interface LoginCredentials {
    email: string;
    password: string;
}

export const loginUser = async (credentials: LoginCredentials): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
        const response = await authApi.login(credentials);

        if (!response.success) {
            throw new Error(response.error.message);
        }

        setToken(response.data.token);
        setUser(response.data.user);
        return true;
    } catch (error) {
        const message = error instanceof Error ? error.message : "Login failed";
        setError(message);
        return false;
    } finally {
        setLoading(false);
    }
};

export const logoutUser = async (): Promise<boolean> => {
    try {
        const response = await authApi.logout();
        
        if (!response.success) {
            throw new Error(response.error.message);
        }

        return true;
    } catch (error) {
        console.error("Logout API call failed:", error);
        return false;
    } finally {
        logout();
    }
};