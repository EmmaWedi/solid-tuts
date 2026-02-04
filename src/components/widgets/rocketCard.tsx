import { IoArrowForward } from "solid-icons/io";

const RocketCard = () => {
  return (
    <div class="relative h-64 rounded-3xl overflow-hidden shadow-md group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Rockets"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
      <div class="absolute bottom-0 left-0 p-8 text-white w-full">
        <h3 class="text-2xl font-bold mb-2">Work with the Rockets</h3>
        <p class="text-gray-200 text-sm mb-4 max-w-sm leading-relaxed">
          Wealth creation is an evolutionarily recent positive-sum game.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-xs font-bold uppercase tracking-wider hover:text-teal-300 transition-colors"
        >
          Read more <IoArrowForward class="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default RocketCard;
