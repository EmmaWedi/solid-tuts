import { For } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import {
  IoHome,
  IoStatsChart,
  IoWallet,
  IoPerson,
  IoHelpCircle,
} from "solid-icons/io";
import { dashboardState, toggleSidebar } from "../../stores/dashboardStore";

interface NavItem {
  icon: any;
  label: string;
  href: string;
  isHeader?: boolean;
}

const Sidebar = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    // Exact match for root, startsWith for others
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const mainNav: NavItem[] = [
    { icon: IoHome, label: "Dashboard", href: "/" },
    { icon: IoStatsChart, label: "Tables", href: "/tables" },
    { icon: IoWallet, label: "Billing", href: "/billing" },
  ];

  const accountNav: NavItem[] = [
    { icon: IoPerson, label: "Profile", href: "/profile" },
  ];

  const NavLink = (props: NavItem) => {
    const active = () => isActive(props.href);

    return (
      <A
        href={props.href}
        class={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
          active()
            ? "bg-white text-gray-800 shadow-sm font-semibold scale-[1.02]"
            : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
        }`}
      >
        <props.icon class="text-lg" />
        <span class="text-sm">{props.label}</span>
      </A>
    );
  };

  return (
    <aside class="fixed left-0 top-0 h-screen w-64 bg-[#F7FAFC] border-r border-gray-200 p-6 hidden lg:flex flex-col z-50">
      <div class="flex items-center gap-3 mb-10 px-2">
        <div class="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
          P
        </div>
        <h1 class="font-bold text-gray-800 tracking-wide text-lg">PURITY UI</h1>
      </div>

      <div class="flex-1 overflow-y-auto space-y-1">
        <For each={mainNav}>{(item) => <NavLink {...item} />}</For>

        <div class="mt-8 mb-2 px-4 text-xs font-bold uppercase text-gray-400 tracking-wider">
          Account Pages
        </div>
        <For each={accountNav}>{(item) => <NavLink {...item} />}</For>
      </div>

      <div class="mt-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-5 text-white relative overflow-hidden shadow-lg">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
        <div class="text-2xl mb-2">
          <IoHelpCircle />
        </div>
        <h3 class="font-bold text-sm mb-1">Need help?</h3>
        <p class="text-xs opacity-90 mb-4">Please check our docs</p>
        <button class="w-full bg-white text-teal-600 text-xs font-bold py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition hover:scale-[1.02]">
          DOCUMENTATION
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
