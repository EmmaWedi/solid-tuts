import type { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createEffect, Show } from "solid-js";
import { authState } from "../../stores/authStore";

const PublicRoute: Component<{ component: Component }> = (props) => {
  const navigate = useNavigate();

  createEffect(() => {
    if (!authState.isLoading && authState.isAuthenticated) {
      navigate("/", { replace: true });
    }
  });

  return (
    <Show when={!authState.isAuthenticated} fallback={<div>Loading...</div>}>
      <props.component />
    </Show>
  );
};

export default PublicRoute;
