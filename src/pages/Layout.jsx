import { Outlet } from "react-router-dom";

import { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="h-screen overflow-y-scroll transition-all duration-300 ease-in-out">
      <div className="space-y-10 relative ">
        <Header />
        <button
          onClick={() => setShowSidebar(true)}
          className="group bg-black/50 w-12 h-12 p-2 -mb-24 flex items-center justify-center rounded-full absolute bottom-0 right-8 cursor-pointer hover:bg-green-500 transition-colors duration-300 shadow-lg shadow-green-500/40"
        >
          <i className="fi fi-sr-apps group-hover:text-gray-900 transition-colors duration-300"></i>
        </button>
        <SideBar
          isOpen={showSidebar}
          onClose={() => setShowSidebar(false)}
        />

        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};
export default Layout;
