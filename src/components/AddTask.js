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
    <div className="flex flex-wrap flex-row   items-center justify-center">
      <div className="flex flex-wrap flex-row  ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded text-black"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded  text-black"
            rows="3"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-lg "
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
