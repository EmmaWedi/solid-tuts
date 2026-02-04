import { For } from "solid-js";
import { Bar, Line } from "solid-chartjs";
import DashboardLayout from "../components/layout/dashboardLayout";
import StatCard from "../components/ui/statCard";
import WelcomeCard from "../components/widgets/welcomeCard";
import RocketCard from "../components/widgets/rocketCard";
import ProjectsTable from "../components/widgets/projectsTable";
import OrdersOverview from "../components/widgets/ordersOverview";
import {
  statsData,
  chartDataActiveUsers,
  chartOptionsActiveUsers,
  chartDataSales,
  chartOptionsSales,
} from "../types/data";

import { IoPerson, IoRocket, IoCart, IoDocumentText } from "solid-icons/io";
import { useMeta } from "../hooks/useMeta";

const Dashboard = () => {
  useMeta({
    title: "Dashboard Overview | Solid-Tuts",
    description:
      "View your analytics, sales data, and active users in real-time.",
    ogImage: "https://yourdomain.com/dashboard-og.png",
  });

  return (
    <DashboardLayout>
      {/* Stats Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <For each={statsData}>{(stat) => <StatCard {...stat} />}</For>
      </div>

      {/* Main Content Grid */}
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
        {/* Left Column (2/3 width) */}
        <div class="xl:col-span-2 space-y-8">
          {/* Top Row: Welcome & Brand */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WelcomeCard />
            <div class="bg-gradient-to-br from-teal-400 to-teal-300 rounded-3xl shadow-lg p-8 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div class="relative z-10 text-center text-white">
                <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md shadow-inner">
                  <span class="text-4xl">⚡</span>
                </div>
                <h3 class="text-3xl font-bold tracking-tight">chakra</h3>
              </div>
            </div>
          </div>

          {/* Active Users Chart */}
          <div class="bg-[#1A202C] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div class="flex justify-between items-end mb-6">
              <div>
                <h3 class="text-2xl font-bold mb-2">Active Users</h3>
                <p class="text-emerald-400 text-sm font-bold flex items-center gap-1">
                  (+23){" "}
                  <span class="text-gray-400 font-normal">than last week</span>
                </p>
              </div>
            </div>

            <div class="h-56 w-full relative z-10">
              <Bar
                data={chartDataActiveUsers}
                options={chartOptionsActiveUsers}
              />
            </div>

            <div class="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700/50">
              {[
                { icon: IoPerson, label: "Users", val: "32,984" },
                { icon: IoRocket, label: "Clicks", val: "2.42m" },
                { icon: IoCart, label: "Sales", val: "2,400$" },
                { icon: IoDocumentText, label: "Items", val: "320" },
              ].map((item) => (
                <div class="text-center md:text-left">
                  <div class="flex items-center justify-center md:justify-start gap-2 mb-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
                    <div class="p-1.5 bg-gray-700/50 rounded-lg text-teal-400">
                      <item.icon size={14} />
                    </div>{" "}
                    {item.label}
                  </div>
                  <p class="text-2xl font-bold text-white">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1/3 width) */}
        <div class="space-y-8">
          <RocketCard />

          <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h3 class="font-bold text-gray-800 text-xl mb-1">Sales overview</h3>
            <p class="text-sm text-green-500 font-bold mb-6 flex items-center gap-1">
              (+5) more <span class="text-gray-400 font-normal">in 2021</span>
            </p>

            <div class="h-64 w-full">
              <Line data={chartDataSales} options={chartOptionsSales} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div class="xl:col-span-2">
          <ProjectsTable />
        </div>
        <div>
          <OrdersOverview />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
