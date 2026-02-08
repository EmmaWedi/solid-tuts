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
}

// Create reactive store
const [authState, setAuthState] = createStore<AuthState>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});

// Persist to localStorage
createEffect(() => {
  if (authState.isLoading) return;

  if (authState.user) {
    secureStorage.set("user", authState.user);
    secureStorage.set("isAuthenticated", "true");
  } else {
    storage.remove("user");
    storage.remove("isAuthenticated");
  }
});

// Init from storage
const initAuth = () => {
  const storedUser = storage.getJSON("user");
  const storedAuth = storage.get("isAuthenticated");

  if (storedUser && storedAuth) {
    setAuthState({
      user: storedUser as User,
      isAuthenticated: true,
      isLoading: false,
    });
  } else {
    setAuthState("isLoading", false);
  }
};

// Actions
const login = (user: User) => {
  setAuthState({
    user,
    isAuthenticated: true,
    isLoading: false,
  });
};

const logout = () => {
  setAuthState({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });
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

// Export readonly state and actions
export { authState, initAuth, login, logout, updateUser, setLoading };
