import { JSX } from "solid-js";
import Sidebar from "./sidebar";
import Header from "./header";

interface DashboardLayoutProps {
  children: JSX.Element;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div class="min-h-screen bg-[#F7FAFC] font-sans text-gray-800">
      <Sidebar />

      <div class="lg:ml-64 p-4 lg:p-10 transition-all duration-300 min-h-screen flex flex-col">
        <Header />
        <main class="flex-1">{props.children}</main>
        <footer class="mt-12 text-center text-sm text-gray-400 pb-4">
          <p>&copy; 2026 Purity UI Dashboard. Made with SolidJS & Tailwind.</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
