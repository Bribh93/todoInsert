import { useState } from "react";
import supabase from "../../helpers/supabaseClient";

import {toast, Toaster } from "sonner";

const ModalCard = ({ selectedTask, onClose, onUpdate }) => {
  const [editTitle, setEditTitle] = useState(selectedTask.title);
  const [editDescription, setEditDescription] = useState(selectedTask.description);
  const [editLanguage, setEditLanguage] = useState(selectedTask.languages || "");

  const handleSave = async () => {
    const { error } = await supabase
      .from("htmlcode")
      .update({
        title: editTitle,
        description: editDescription,
        languages: editLanguage,
      })
      .eq("id", selectedTask.id);

    if (error) {
      toast.error("Error updating the card");
    } else {
      toast.success("Card updated successfully!");
      onUpdate(); // Refresh list in parent
      onClose(); // Close modal
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-[90%] max-w-md max-h-[80vh] overflow-y-auto text-white relative">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          value={editLanguage}
          onChange={(e) => setEditLanguage(e.target.value)}
          placeholder="Programming languages"
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder="Write your description..."
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          rows={5}
        />

        <div className="flex justify-between items-center">
          <button
            onClick={handleSave}
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
      <Toaster richColors/>
    </div>
  );
};

export default ModalCard;
