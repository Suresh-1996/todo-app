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
    <div className="flex flex-wrap flex-row   items-center justify-center ">
      <div className="flex flex-wrap flex-row  ">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" rounded-full uppercase w-full outline-none p-2 border  text-black shadow-md hover:border-pink-800 font-serif"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-lg outline-none text-black  hover:border-pink-800 font-mono"
            rows="2"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" rounded-full px-4 py-2 text-white bg-green-500 hover:bg-green-600   shadow-sm transition-all duration-200 hover:px-5"
            >
              ADD TASK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
