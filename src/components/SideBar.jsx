import clsx from "clsx";
import { Link } from "react-router-dom";
import supabase from "../helpers/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SideBar = ({ isOpen, onClose }) => {
  const navigate = useNavigate(false);
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

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen bg-gray-700 dark:bg-gray-900 dark:text-white text-gray-300 overflow-x-hidden transition-all duration-300 z-40 drop-shadow-md drop-shadow-gray-600",
          isOpen ? "w-auto p-4" : "w-0 p-0"
        )}
      >
        <aside className="flex flex-col justify-between gap-8 bg-background-secondary  w-80 p-4 overflow-hidden rounded-lg ">
          <section>
            <div className="logo flex items-center gap-4 mb-8 ">
              <h1 className="flex items-center justify-center w-10 h-10 bg-green-600 p-2 rounded-xl font-extrabold text-white">
                UI
              </h1>
              <div className="flex gap-10">
                <div>
                  <h3 className="font-bold text-green-600">
                    {user ? (
                      <span className="">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5582/5582872.png"
                          alt="User"
                          className="inline-block w-6 h-6 rounded-full mr-2 object-cover ring-2 ring-green-600"
                        />
                        {user.email.split("@gmail.com")}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500">
                        Please log in
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground pt-1">
                    Do More. Think Less.
                  </p>
                </div>
                {isOpen && (
                  <div>
                    <button
                      onClick={onClose}
                      className="mb-4 text-sm bg-red-500 px-3 py-1 rounded font-bold cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
            </div>
            <form>
              <input
                type="text"
                className="w-full py-2 px-4 rounded-lg outline-none focus:border-green-500 border placeholder:text-gray-300 "
                placeholder="Buscar..."
              />
            </form>
            <ul className="mt-4 mb-8">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i className="fi fi-rr-inbox-in"></i>
                  <span>Bandeja de entrada</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i className="fi fi-rr-bell"></i>
                  <span>Actividad</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i class="fi fi-rr-dashboard-panel"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
            </ul>
            <hr className="my-8 border-gray-500" />
            <h5 className="uppercase font-semibold text-xs text-green-600 tracking-[2px] mb-4">
              Menu
            </h5>
            <ul>
              <li>
                <Link
                  to={"/documents"}
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i className="fi fi-rr-document"></i>
                  <span>Documentos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i className="fi fi-rr-ticket"></i>
                  <span>Tickets</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i className="fi fi-rr-users-alt"></i>
                  <span>Usuarios</span>
                </Link>
              </li>
            </ul>
            <h5 className="uppercase font-semibold text-xs text-green-600 tracking-[2px] my-4">
              Proyectos
            </h5>
            <ul>
              <li>
                <Link
                  to={"/HtmlPage"}
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i class="fi fi-rr-html-file"></i>
                  <span>Html</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/CssPage"}
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i class="fi fi-brands-css3"></i>
                  <span>Css</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/JsPage"}
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i class="fi fi-brands-js"></i>
                  <span>JavaScript</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/ReactPage"}
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i class="fi fi-ss-react"></i>
                  <span>React</span>
                </Link>
              </li>

              <li>
                <Link
                  to={"/SupabasePage"}
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i class="fi fi-sr-big-data-analytics"></i>
                  <span>Supabase</span>
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <ul className="my-4">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i className="fi fi-rr-settings"></i>
                  <span>Ajustes</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i className="fi fi-rr-interrogation"></i>
                  <span>Ayuda</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-2 hover:bg-green-500 transition-colors rounded-lg"
                >
                  <i class="fi fi-rr-exit"></i>
                  <button onClick={signOut}>sign out</button>
                </a>
              </li>
            </ul>
            <hr className="my-8 border-gray-500" />
            <div className="text-xs text-gray-500">
              <p>© 2025 Bribh93. All rights reserved.</p>
              <p>Made with ❤️ by Bribh93</p>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
};
export default SideBar;
