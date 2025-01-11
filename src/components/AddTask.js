import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    addTask({ name, description, status: "Not Completed" });
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
        rows="3"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-green-500 rounded-lg"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
