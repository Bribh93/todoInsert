import { useState, useEffect } from "react";
import supabase from "../helpers/supabaseClient"; // tu instancia Supabase
import { Toaster, toast } from "sonner";

const ModalUpdate = ({ id, children, estado, cambiarEstado }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState("");
  const [loading, setLoading] = useState(true);

  // 1. Cargar el dato al montar
  useEffect(() => {
    console.log("ID recibido:", id); // Verifica que el ID se esté recibiendo correctamente
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("htmlcode")
        .select("title, description, languages")
        .eq("id", id)
        .single();

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (!error && data && data.length > 0) {
        setTitle(data.title);
        setDescription(data.description);
        setLanguages(data.languages);
        setLoading(false);
      } else {
        toast.error("Error al cargar los datos");
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  // 2. Función para guardar cambios
  const handleUpdate = async () => {
    const { error } = await supabase
      .from("htmlcode")
      .update({ description, title, languages })
      .eq("id:", id);

    if (!error) {
      toast.success("Cambios guardados");
    } else {
      console.error(error);
      toast.error("Error al guardar los cambios");
    }

    cambiarEstado(!estado);
  };

  if (loading) return toast.success("Loanding...");

  return (
    <>
      {estado && (
        <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/50 ">
          <div
            onClick={() => cambiarEstado(!estado)}
            className="absolute top-50 right-2/6 bg-green-600 rounded-full px-2 py-1 cursor-pointer"
          >
            X
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-md space-y-5">
            <h2 className="text-xl font-bold mb-2 text-green-600">
              Editor HTML
            </h2>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Title"
              className=" bg-gray-700 rounded-2xl drop-shadow-md drop-shadow-gray-800 dark:text-white p-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
            <input
              type="text"
              onChange={(e) => setLanguages(e.target.value)}
              value={languages}
              placeholder="Languages"
              className=" bg-gray-700 rounded-2xl drop-shadow-md drop-shadow-gray-800 dark:text-white p-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
            <textarea
              className=" bg-gray-700 rounded-2xl drop-shadow-md drop-shadow-gray-800 dark:text-white p-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              rows="6"
              placeholder="Write your description..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <button
              onClick={handleUpdate}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 transition-colors duration-300"
            >
              Guardar cambios
            </button>
            <Toaster
              closeButton
              richColors
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUpdate;
