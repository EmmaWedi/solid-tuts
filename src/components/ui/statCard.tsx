import { IoWallet, IoGlobe, IoDocumentText, IoCart } from "solid-icons/io";
import { StatItem } from "../../types/types";

const iconMap = {
  wallet: IoWallet,
  globe: IoGlobe,
  document: IoDocumentText,
  cart: IoCart,
};

const StatCard = (props: StatItem) => {
  const Icon = iconMap[props.iconName];

  return (
    <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-50 group">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-gray-500 text-sm font-medium mb-2">{props.title}</p>
          <h3 class="text-2xl font-bold text-gray-800">
            {props.value}
            <span
              class={`text-sm ml-2 font-bold ${props.isPositive ? "text-green-500" : "text-red-500"}`}
            >
              {props.isPositive ? "+" : ""}
              {props.percent}
            </span>
          </h3>
        </div>
        <div class="p-3.5 rounded-xl text-white bg-gradient-to-br from-teal-400 to-teal-500 shadow-lg shadow-teal-200 group-hover:scale-110 transition-transform">
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
