import { ChartData, ChartOptions } from "chart.js";
import { StatItem, Project, OrderEvent } from "./types";

export const statsData: StatItem[] = [
  {
    title: "Today's Money",
    value: "$53,000",
    percent: "55%",
    isPositive: true,
    iconName: "wallet",
  },
  {
    title: "Today's Users",
    value: "2,300",
    percent: "5%",
    isPositive: true,
    iconName: "globe",
  },
  {
    title: "New Clients",
    value: "+3,052",
    percent: "14%",
    isPositive: false,
    iconName: "document",
  },
  {
    title: "Total Sales",
    value: "$173,000",
    percent: "8%",
    isPositive: true,
    iconName: "cart",
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    name: "Chakra Soft UI Version",
    companyAbbr: "Xd",
    members: 5,
    budget: "$14,000",
    completion: 60,
    color: "bg-purple-500",
  },
  {
    id: "2",
    name: "Add Progress Track",
    companyAbbr: "A",
    members: 2,
    budget: "$3,000",
    completion: 10,
    color: "bg-blue-500",
  },
  {
    id: "3",
    name: "Fix Platform Errors",
    companyAbbr: "Sp",
    members: 4,
    budget: "Not set",
    completion: 100,
    color: "bg-green-500",
  },
  {
    id: "4",
    name: "Launch our Mobile App",
    companyAbbr: "Ap",
    members: 3,
    budget: "$32,000",
    completion: 100,
    color: "bg-yellow-500",
  },
];

export const ordersData: OrderEvent[] = [
  {
    id: "1",
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    icon: "⚡",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: "2",
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    icon: "✖",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "3",
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    icon: "🛒",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "4",
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    icon: "📦",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

// Chart Configurations
export const chartDataSales: ChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [300, 200, 250, 400, 350, 500, 450, 400, 300, 350, 400, 450],
      borderColor: "#4FD1C5",
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(79, 209, 197, 0.4)");
        gradient.addColorStop(1, "rgba(79, 209, 197, 0.0)");
        return gradient;
      },
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      pointHoverRadius: 4,
    },
    {
      label: "Profit",
      data: [200, 150, 200, 300, 250, 350, 300, 250, 200, 220, 250, 300],
      borderColor: "#2D3748",
      tension: 0.4,
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 4,
    },
  ],
};

export const chartOptionsSales: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      border: {
        dash: [5, 5],
      },
      grid: { color: "#E2E8F0", tickBorderDash: [5, 5] },
      ticks: { font: { size: 10 }, color: "#A0AEC0" },
    },
    x: {
      grid: { display: false },
      ticks: { font: { size: 10 }, color: "#A0AEC0" },
    },
  },
};

export const chartDataActiveUsers: ChartData = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Active Users",
      data: [300, 200, 100, 250, 500, 400, 300, 200],
      backgroundColor: "#FFF",
      borderRadius: 4,
      barThickness: 6,
    },
  ],
};

export const chartOptionsActiveUsers: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: { display: false, min: 0 },
    x: { display: false },
  },
};
