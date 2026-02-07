import { createStore, produce } from "solid-js/store";
import { createEffect } from "solid-js";

interface DashboardState {
  sidebarCollapsed: boolean;
  theme: "light" | "dark";
  activeChart: string | null;
}

// Create reactive store
const [dashboardState, setDashboardState] = createStore<DashboardState>({
  sidebarCollapsed: false,
  theme: "light",
  activeChart: null,
});

// Persist theme preference
createEffect(() => {
  localStorage.setItem("theme", dashboardState.theme);
  localStorage.setItem(
    "sidebarCollapsed",
    String(dashboardState.sidebarCollapsed),
  );
});

// Init from storage
const initDashboard = () => {
  const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  const savedSidebar = localStorage.getItem("sidebarCollapsed");

  if (savedTheme) {
    setDashboardState("theme", savedTheme);
  }
  if (savedSidebar) {
    setDashboardState("sidebarCollapsed", savedSidebar === "true");
  }
};

// Actions
const toggleSidebar = () => {
  setDashboardState("sidebarCollapsed", (prev) => !prev);
};

const setTheme = (theme: "light" | "dark") => {
  setDashboardState("theme", theme);
};

const setActiveChart = (chart: string | null) => {
  setDashboardState("activeChart", chart);
};

// Batch update for complex state changes
const updateDashboard = (updates: Partial<DashboardState>) => {
  setDashboardState(
    produce((state) => {
      Object.assign(state, updates);
    }),
  );
};

export {
  dashboardState,
  setDashboardState,
  initDashboard,
  toggleSidebar,
  setTheme,
  setActiveChart,
  updateDashboard,
};
