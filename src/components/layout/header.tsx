import { IoSettings, IoNotifications, IoLogOut } from "solid-icons/io";
import { usePageTitle } from "../../hooks/usePageTitle";
import { logout } from "../../stores/authStore";

const Header = () => {
  const { rawPageName, readablePageName } = usePageTitle();

  return (
    <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <p class="text-gray-500 text-sm mb-1">
          Pages / <span class="text-gray-800 font-medium">{rawPageName()}</span>
        </p>
        <h2 class="text-3xl font-bold text-gray-800 tracking-tight">
          {readablePageName()}
        </h2>
      </div>

      <div class="flex items-center gap-3 w-full md:w-auto bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
        <div class="relative flex-1 md:w-64">
          <input
            type="text"
            placeholder="Type here..."
            class="w-full pl-10 pr-4 py-2 rounded-xl text-sm bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
          <span class="absolute left-3.5 top-2.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>

        <button
          onClick={logout}
          class="flex items-center gap-2 text-gray-500 hover:text-teal-500 transition-colors text-sm font-bold px-3 py-2"
        >
          <IoLogOut size={18} /> Sign Out
        </button>

        <div class="h-6 w-px bg-gray-200 mx-1"></div>

        <button class="p-2 text-gray-400 hover:text-teal-500 transition-colors rounded-full hover:bg-gray-50">
          <IoSettings size={20} />
        </button>
        <button class="p-2 text-gray-400 hover:text-teal-500 transition-colors rounded-full hover:bg-gray-50">
          <IoNotifications size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
