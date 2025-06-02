import { Link } from "react-router-dom";
import supabase from "../helpers/supabaseClient";
import { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div className="w-full bg-background-secondary rounded-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
        <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl text-green-500 transition-all duration-300 hover:text-green-600 hover:scale-105 group">
          BBH
          <span className="group-hover:text-gray-200 group-hover:rotate-12 transition-all duration-300">
            93
          </span>
        </h1>
        <nav className="md:col-span-8 flex items-center gap-1 justify-center">
          <Link
            to={"/"}
            className="xl:py-1 px-2 md:px-4 rounded-lg hover:md:hover:text-green-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="xl:py-1 px-2 md:px-4 rounded-lg hover:md:hover:text-green-500 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#"
            className="xl:py-1 px-2 md:px-4 rounded-lg hover:md:hover:text-green-500 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#"
            className="xl:py-1 px-2 md:px-4 rounded-lg hover:md:hover:text-green-500 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="xl:py-1 px-2 md:px-4 rounded-lg hover:md:hover:text-green-500 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
        <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4 md:text-xl text-2xl text-gray-500">
          {user ? (
            user.email.split("@gmail.com")
          ) : (
            <Link
              to="/login"
              className="hover:text-green-600 transition-colors duration-300"
            >
              <i class="fi fi-sr-user"></i>
            </Link>
          )}
          <Link
            href="https://instagram.com/jotredev"
            target="_blank"
            className="hover:text-green-600"
          >
            <i className="fi fi-brands-instagram"></i>
          </Link>
          <Link
            href="https://github.com/jotredev"
            target="_blank"
            className="hover:text-green-600"
          >
            <i className="fi fi-brands-github"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jorge-luis-trejo-payan-3464b6214/"
            target="_blank"
            className="hover:text-green-600"
          >
            <i className="fi fi-brands-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
