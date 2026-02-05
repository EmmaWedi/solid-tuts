import { MetaWrapper } from "../../wrappers/metaWrapper";
import { IoConstruct } from "solid-icons/io";

const Tables = () => {
  return (
    <MetaWrapper
      title="Tables"
      description="View and manage data tables with sorting and filtering."
    >
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center">
        <div class="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <IoConstruct class="w-10 h-10 text-teal-500" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Tables Page</h2>
        <p class="text-gray-500">Data tables component coming soon.</p>
      </div>
    </MetaWrapper>
  );
};

export default Tables;
