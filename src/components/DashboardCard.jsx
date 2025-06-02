import { Link } from "react-router";

const DashboardCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 md:gap-6 px-10 md:w-[50%] mx-auto my-10 page-transition space-y-6 md:space-y-0">
      <Link to={"/htmlpage"} className=" py-14 flex justify-center items-center  rounded-4xl text-6xl bg-amber-700 shadow-amber-600 shadow-lg hover:scale-105 relative transition-transform duration-300 ">
        HTML
      </Link>
      <Link to={"/csspage"} className="overflow-hidden md:col-span-2 py-14 flex justify-center items-center  rounded-4xl text-6xl bg-blue-700 shadow-blue-600 shadow-lg hover:scale-105 relative transition-transform duration-300 group">
        <i class="fi fi-brands-css3 absolute right-0.5 -bottom-4 -rotate-24 group-hover:scale-150 group-hover:-translate-3.5 transition-transform duration-300"></i>
        Css
      </Link>
      <Link to={"/jspage"} className="overflow-hidden md:col-span-2 py-14 flex justify-center items-center  rounded-4xl text-6xl bg-yellow-600 shadow-yellow-600 shadow-lg hover:scale-105 relative transition-transform duration-300 group">
        <i class="fi fi-brands-js absolute right-0.5 -bottom-4 -rotate-24 group-hover:scale-150 group-hover:-translate-5 transition-transform duration-300"></i>
        JavaScript
      </Link>
      <Link to={"/supabasepage"} className="py-14 flex justify-center items-center  rounded-4xl text-5xl bg-green-700 shadow-green-600 shadow-lg hover:scale-105 relative transition-transform duration-300 ">
        Supabase
      </Link>
      <Link to={"/reactpage"} className="overflow-hidden md:col-span-3 py-14 flex justify-center items-center  rounded-4xl text-6xl bg-blue-800 shadow-blue-800 shadow-lg hover:scale-105 relative transition-transform duration-300 group">
        <div >
          <i class="fi fi-ss-react absolute right-0 -bottom-3 -rotate-24 group-hover:scale-150 group-hover:-translate-5 transition-transform duration-300"></i>
          React
        </div>
      </Link>
    </section>
  );
};
export default DashboardCard;
