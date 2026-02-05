import { MetaWrapper } from "../wrappers/metaWrapper";
import { A } from "@solidjs/router";
import { IoArrowBack } from "solid-icons/io";

const NotFound = () => {
  return (
    <MetaWrapper
      title="Page Not Found"
      description="The requested page could not be found."
      noIndex={true}
    >
      <div class="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div class="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <span class="text-6xl">😕</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <p class="text-xl text-gray-500 mb-8">Page not found</p>
        <A
          href="/"
          class="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-600 transition"
        >
          <IoArrowBack /> Back to Dashboard
        </A>
      </div>
    </MetaWrapper>
  );
};

export default NotFound;
