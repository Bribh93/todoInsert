import { Link } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { useState, useEffect } from "react";
import supabase from "../../helpers/supabaseClient";
import ModalUpdate from "../ModalUpdate";

const CardTaskHtml = () => {
  const [codetask, setcodetask] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); //para mostrar los datos que hay guardados en supabase en codetask
  const [showModal, setShowModal] = useState(false); //para abrir y cerrar el modal
  const [user, setUser] = useState(null); //para obtener el usuario
  const [estadoModal, setEstadoModal] = useState(false); //para abrir y cerrar el modal

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
      setLoading(false);
    });
  }, []);

  const handleOpenModal = (codetask) => {
    //para abriir el modal
    setSelectedTask(codetask);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    //para cerrar el modal
    setShowModal(false);
    setSelectedTask(null);
  };

  useEffect(() => {
    showCards();
  }, []);

  const showCards = async (event) => {
    //extraer los datos de supabase
    let { data, error } = await supabase
      .from("htmlcode")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      toast.error("Upps, the data could not be displayed");
    } else {
      setcodetask(data);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  
  async function deleteCard(id) {
    await supabase.from("htmlcode").delete().eq("id", id);

    showCards();
  }

  return (
    <>
      <div className="flex justify-center mt-10 relativo">
        <div className="w-[100%] md:min-w-[800px] max-h-[450px] md:max-h-[600px] overflow-y-auto scroll-smooth snap-y snap-mandatory">
          {codetask.map((codetasks) => (
            <div
              key={codetasks.id}
              className=" max-w-2xl mx-auto py-4 px-6 rounded-lg shadow-xl md:hover:shadow-orange-600/50 shadow-orange-600/10 mb-16 relative md:hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center justify-between ">
                <time className="text-sm text-muted-foreground">
                  {formatDate(codetasks.created_at)}
                </time>
                <span className="bg-orange-600/10 text-orange-600 font-semibold md:py-2 md:px-4 py-1 px-2 text-xs rounded uppercase">
                  {codetasks.languages?.trim() || "HTML"}
                </span>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Link
                  href="/"
                  className=" font-bold hover:underline mt-2 text-orange-600 line-clamp-1 md:line-clamp-2"
                >
                  ✔️{codetasks.title}
                </Link>
                <p className="text-muted-foreground md:line-clamp-2 line-clamp-1">
                  ✨{codetasks.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleOpenModal(codetasks)}
                  className="text-orange-600 hover:underline transition-colors"
                >
                  Leer más
                </button>
                <div className="flex items-center gap-4">
                  <div className="relative w-6 h-6">
                    <img
                      src="https://img.freepik.com/premium-photo/confident-female-business-executive-standing-office_107420-79149.jpg?ga=GA1.1.1481528647.1685589990&semt=ais_hybrid&w=740"
                      loading="lazy"
                      className="rounded-full object-cover"
                      alt="User Avatar"
                    />
                  </div>
                  <div>
                    <p className="dark:text-white ">{user.email.split("@gmail.com")}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 ">
                <button
                  onClick={() => setEstadoModal(!estadoModal)}
                  className="border hover:bg-orange-600/30 text-orange-600 font-semibold md:py-2 md:px-4 py-1 px-2 text-xs rounded uppercase transition-colors duration-300 "
                >
                  Update
                </button>

                <button
                  onClick={() => deleteCard(codetasks.id)}
                  className="border  hover:bg-orange-600/30 text-orange-600 font-semibold md:py-2 md:px-4 py-1 px-2 text-xs rounded uppercase transition-colors duration-300 "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {showModal && selectedTask && (
            <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 transition-transform duration-500 ">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-[90%] max-w-md max-h-[80vh] overflow-y-auto text-white">
                <h2 className="text-xl font-bold mb-2">{selectedTask.title}</h2>
                <p className="mb-4 break-words whitespace-pre-wrap overflow-hidden text-gray-400">
                  {selectedTask.description}
                </p>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 md:top-32 md:right-4/12 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {estadoModal && (
        <ModalUpdate
          
          estado={estadoModal}
          cambiarEstado={setEstadoModal}
          task={codetask}
        />
      )}
      <Toaster
        closeButton
        richColors/>
    </>
  );
};

export default CardTaskHtml;
