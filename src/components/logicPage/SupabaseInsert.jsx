import { useState } from "react";
import supabase from "../../helpers/supabaseClient";
import { Toaster, toast } from "sonner";

const SupabaseInsert = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [showLabel, setShowLabel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (taskName === "" || description === "") {
        toast.error("Cannot be empty");
        return;
      }
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("supabasecode")
        .insert([
          {
            title: taskName,
            description: description,
            languages: showLabel,
            user_id: user.id,
          },
        ])
        .select();

      if (error) {
        toast.error(`Insert error: ${error.message}`);
        return;
      }
      if (data) {
        toast.success("Your tilte y description was creado succesfully");
        setTaskName("");
        setDescription("");
        setShowLabel("");
      }
    } catch (error) {
      toast.error(` ${error.message}`);

      return;
    }
  };

  return (
    <div className="grid justify-center items-center max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-7 text-center"
      >
        <input
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          placeholder="Title"
          className=" bg-gray-700 rounded-2xl drop-shadow-md drop-shadow-gray-800 dark:text-white p-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <input
          type="text"
          onChange={(e) => setShowLabel(e.target.value)}
          value={showLabel}
          placeholder="Programming languages"
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
          type="submit"
          className="w-[50%] bg-transparent border-2 border-green-600/50 text-green-600 py-2 px-5 rounded-full hover:bg-green-500 hover:text-white transition-colors"
        >
          Add
        </button>
      </form>
      <Toaster richColors osition="bottom-right" />
    </div>
  );
};
export default SupabaseInsert;
