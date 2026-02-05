import { MetaWrapper } from "../wrappers/metaWrapper";
import { IoCard } from "solid-icons/io";

const Billing = () => {
  return (
    <MetaWrapper
      title="Billing"
      description="Manage your billing information and payment methods."
    >
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center">
        <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <IoCard class="w-10 h-10 text-blue-500" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Billing Page</h2>
        <p class="text-gray-500">
          Billing and invoicing component coming soon.
        </p>
      </div>
    </MetaWrapper>
  );
};

export default Billing;
