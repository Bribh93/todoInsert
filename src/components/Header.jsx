import { Link } from "react-router-dom";
import supabase from "../helpers/supabaseClient";
import { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
  return (
    <>
      <header className="text-sm p-4 ">
        <nav>
          <div className="container mx-auto flex justify-between items-center">
            <Link
              to="/"
              className=" font-bold hover:text-green-600 transition-colors duration-300"
            >
              Bribh93
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/"
                    className=" hover:text-gray-300 text-gray-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className=" hover:text-gray-300 text-gray-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className=" hover:text-gray-300 text-gray-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              {user ? (
                <p className="flex">
                  <span className="hidden md:block">Welcome,</span> 😎{user.email.split("@gmail.com")}
                </p>
              ) : (
                <Link
                  to="/login"
                  className="text-xs bg-black/40 px-5 py-1.5 rounded-4xl hover:bg-green-600 hover:shadow-green-600 hover:shadow-md transition-all duration-300"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
