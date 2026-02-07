import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import { onMount } from "solid-js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { initAuth } from "./stores/authStore";
import ProtectedRoute from "./components/auth/protected";
import PublicRoute from "./components/auth/public";

import Dashboard from "./pages/dashboard";
import Tables from "./components/widgets/tables";
import Billing from "./pages/billing";
import Profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NotFound from "./pages/NotFound";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
);

const App: Component = () => {
  onMount(initAuth);

  return (
    <Router>
      <Route
        path="/"
        component={() => <ProtectedRoute component={Dashboard} />}
      />
      <Route
        path="/tables"
        component={() => <ProtectedRoute component={Tables} />}
      />
      <Route
        path="/billing"
        component={() => <ProtectedRoute component={Billing} />}
      />
      <Route
        path="/profile"
        component={() => <ProtectedRoute component={Profile} />}
      />

      <Route
        path="/signin"
        component={() => <PublicRoute component={SignIn} />}
      />
      <Route
        path="/signup"
        component={() => <PublicRoute component={SignUp} />}
      />

      <Route path="*404" component={NotFound} />
    </Router>
  );
};

export default App;
