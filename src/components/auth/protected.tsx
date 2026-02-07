import type { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createEffect, Show } from "solid-js";
import { authState } from "../../stores/authStore";
import DashboardLayout from "../layout/dashboardLayout";

const ProtectedRoute: Component<{ component: Component }> = (props) => {
  const navigate = useNavigate();

  createEffect(() => {
    if (!authState.isLoading && !authState.isAuthenticated) {
      navigate("/signin", { replace: true });
    }
  });

  return (
    <Show when={authState.isAuthenticated} fallback={<div>Loading...</div>}>
      <DashboardLayout>
        <props.component />
      </DashboardLayout>
    </Show>
  );
};

export default ProtectedRoute;
