import React, { useState } from "react";

const EditTask = ({ task, updateTask, cancelEdit }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, name, description });
  };

  return (
    <div className="flex flex-wrap flex-row   items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded  text-black"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded  text-black"
          rows="2"
        ></textarea>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          >
            Save Changes
          </button>
          <button
            onClick={cancelEdit}
            className="px-4 py-2 text-white bg-gray-500 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
