import { JSX } from "solid-js";
import { useMeta } from "../hooks/useMeta";

interface MetaWrapperProps {
  title: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
  children: JSX.Element;
}

export const MetaWrapper = (props: MetaWrapperProps) => {
  useMeta({
    title: `${props.title} | Solid Tuts`,
    description: props.description,
    ogImage: props.ogImage,
    noIndex: props.noIndex,
  });

  return props.children;
};

// this is beneficial when using solid-router and usage is detailed below
// import { Route, Routes } from "@solidjs/router";
// import { MetaWrapper } from "./components/MetaWrapper";

// In your App.tsx or Routes config
// <Routes>
//   <Route
//     path="/"
//     component={() => (
//       <MetaWrapper title="Dashboard" description="Analytics overview">
//         <Dashboard />
//       </MetaWrapper>
//     )}
//   />
//   <Route
//     path="/profile"
//     component={() => (
//       <MetaWrapper title="Profile" description="Manage your account">
//         <Profile />
//       </MetaWrapper>
//     )}
//   />
// </Routes>
