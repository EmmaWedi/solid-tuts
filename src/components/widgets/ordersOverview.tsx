import { For } from "solid-js";
import { OrderEvent } from "../../types/types";
import { ordersData } from "../../types/data";

const OrdersOverview = () => {
  return (
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full flex flex-col">
      <h3 class="font-bold text-gray-800 text-xl mb-1">Orders overview</h3>
      <div class="text-green-500 font-bold text-sm mb-8 flex items-center gap-1">
        <span>+30%</span>{" "}
        <span class="text-gray-400 font-normal">this month</span>
      </div>

      <div class="space-y-8 relative flex-1">
        {/* Timeline Line */}
        <div class="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gray-100"></div>

        <For each={ordersData}>
          {(order: OrderEvent) => (
            <div class="relative pl-12 group">
              <div
                class={`absolute left-0 top-0.5 w-10 h-10 ${order.iconBg} rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform`}
              >
                <span class={`${order.iconColor} text-sm`}>{order.icon}</span>
              </div>
              <div>
                <p class="text-sm font-bold text-gray-800 group-hover:text-teal-600 transition-colors cursor-pointer">
                  {order.title}
                </p>
                <p class="text-xs text-gray-400 mt-1 font-medium">
                  {order.date}
                </p>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default OrdersOverview;
