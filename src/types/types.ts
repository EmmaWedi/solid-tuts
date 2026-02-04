export interface StatItem {
  title: string;
  value: string;
  percent: string;
  isPositive: boolean;
  iconName: "wallet" | "globe" | "document" | "cart";
}

export interface Project {
  id: string;
  name: string;
  companyAbbr: string;
  members: number;
  budget: string;
  completion: number;
  color: string;
}

export interface OrderEvent {
  id: string;
  title: string;
  date: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}
