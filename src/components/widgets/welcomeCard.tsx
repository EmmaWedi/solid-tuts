import { IoArrowForward } from "solid-icons/io";

const WelcomeCard = () => {
  return (
    <div class="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col justify-center group hover:shadow-md transition-all">
      <div class="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-teal-50 to-teal-100 rounded-tl-full opacity-60 translate-x-10 translate-y-10 transition-transform group-hover:translate-x-8 group-hover:translate-y-8"></div>

      <div class="relative z-10">
        <h2 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
          Built by developers
        </h2>
        <h3 class="text-3xl font-bold text-gray-800 mb-4 leading-tight">
          Purity UI Dashboard
        </h3>
        <p class="text-gray-500 text-sm mb-6 max-w-xs leading-relaxed">
          From colors, cards, typography to complex elements, you will find the
          full documentation.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-sm font-bold text-gray-800 hover:text-teal-500 transition-colors group/link"
        >
          Read more{" "}
          <IoArrowForward class="ml-1 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default WelcomeCard;
