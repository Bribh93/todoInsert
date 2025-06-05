import { Link } from "react-router";

const Hero = () => {
  return (
    <>
      <section className="grid place-items-center">
        <h1 className="text-4xl font-bold text-wrapper text-center">
          The Simplest Way to Stay Productive
        </h1>
        <p className="text-sm mt-4 text-gray-500">Your Tasks, Under Control.</p>
        <Link
          className="group flex items-center justify-center gap-2 mt-6 bg-green-500 shadow-sm hover:shadow-green-600 text-white text-xs px-2 py-0.5 rounded-4xl hover:bg-green-600 transition-colors duration-300"
          to="/htmlpage"
        >
          <span >Get Started Now</span>
          <i class="fi fi-sr-arrow-circle-right text-lg pt-1 group-hover:translate-x-1 transition duration-300"></i>
        </Link>
      </section>
      <section className="flex gap-8 justify-center mt-20 flex-wrap">
        <img
          src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
          alt="HTML"
          className="p-4 h-32 rounded-2xl shadow-md object-cover transition-transform duration-300 hover:scale-105 shadow-green-500 hover:shadow-lg hover:shadow-green-600"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
          alt="HTML"
          className="p-4 h-32 rounded-2xl shadow-md object-cover transition-transform duration-300 hover:scale-105 shadow-green-500 hover:shadow-lg hover:shadow-green-600"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/15484/15484268.png"
          alt="HTML"
          className="p-4 h-32  rounded-2xl shadow-md object-cover transition-transform duration-300 hover:scale-105  shadow-green-500 hover:shadow-lg hover:shadow-green-600"
        />

        <img
          src="https://cdn-icons-png.flaticon.com/128/15484/15484303.png"
          alt="HTML"
          className="p-4 h-32 rounded-2xl shadow-md object-cover transition-transform duration-300 hover:scale-105 shadow-green-500 hover:shadow-lg hover:shadow-green-600"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/18526/18526685.png"
          alt="HTML"
          className="p-4 h-32 rounded-2xl shadow-md object-cover transition-transform duration-300 hover:scale-105 shadow-green-500 hover:shadow-lg hover:shadow-green-600"
        />
      </section>
    </>
  );
};
export default Hero;
