import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
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

// Layout
import DashboardLayout from "./components/layout/dashboardLayout";

// Pages
import Dashboard from "./pages/dashboard";
import Tables from "./components/widgets/tables";
import Billing from "./pages/billing";
import Profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NotFound from "./pages/NotFound";

// Register Chart.js
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

// Wrapper component to inject layout
const LayoutWrapper = (Component: Component) => {
  return () => (
    <DashboardLayout>
      <Component />
    </DashboardLayout>
  );
};

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={LayoutWrapper(Dashboard)} />
      <Route path="/tables" component={LayoutWrapper(Tables)} />
      <Route path="/billing" component={LayoutWrapper(Billing)} />
      <Route path="/profile" component={LayoutWrapper(Profile)} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="*404" component={LayoutWrapper(NotFound)} />
    </Router>
  );
};

export default App;
