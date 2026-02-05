import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";

const pageNames: Record<string, string> = {
  "": "Dashboard",
  billing: "Billing & Invoices",
  profile: "User Profile",
  tables: "Data Tables",
  signin: "Sign In",
  signup: "Sign Up",
  "404": "Page Not Found",
};

export function usePageTitle() {
  const location = useLocation();

  const pageKey = createMemo(() => location.pathname.replace(/^\//, ""));

  const rawPageName = createMemo(() => pageKey() || "Dashboard");

  const readablePageName = createMemo(
    () => pageNames[pageKey()] || rawPageName(),
  );

  return {
    rawPageName,
    readablePageName,
  };
}
