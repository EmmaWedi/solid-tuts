import { createStore, produce } from "solid-js/store";
import { createEffect } from "solid-js";
import { storage, secureStorage } from "./storage";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}

// Create reactive store
const [authState, setAuthState] = createStore<AuthState>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  token: null,
});

// Persist to localStorage
createEffect(() => {
  const { isLoading, user, isAuthenticated, token } = authState;
  
  if (isLoading) return;

  if (user) {
    secureStorage.set("user", user);
    secureStorage.set("isAuthenticated", isAuthenticated);
    secureStorage.set("token", token);
  } else {
    storage.remove("user");
    storage.remove("isAuthenticated");
    storage.remove("token");
  }
});

// Init from storage
const initAuth = () => {
  const storedUser = storage.getJSON("user");
  const storedAuth = storage.get("isAuthenticated");
  const storedToken = storage.get("token");

  if (storedUser && storedAuth) {
    setAuthState({
      user: storedUser as User,
      isAuthenticated: true,
      token: storedToken,
      isLoading: false,
    });
  } else {
    setAuthState("isLoading", false);
  }
};

const setUser = (user: User) => {
  setAuthState({
    user,
    isAuthenticated: true,
    isLoading: false,
    error: null,
  });
};

const logout = () => {
  setAuthState({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  });
  storage.remove("user");
  storage.remove("isAuthenticated");
};

const updateUser = (updates: Partial<User>) => {
  setAuthState(
    produce((state) => {
      if (state.user) {
        Object.assign(state.user, updates);
      }
    }),
  );
};

const setLoading = (loading: boolean) => {
  setAuthState("isLoading", loading);
};

const setError = (error: string | null) => {
  setAuthState("error", error);
};

const setToken = (token: string | null) => {
  setAuthState("token", token);
}

// Export readonly state and actions
export { authState, initAuth, setUser, logout, updateUser, setLoading, setError, setToken };