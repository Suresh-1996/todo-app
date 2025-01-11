import React, { useState } from "react";

const EditTask = ({ task, updateTask, cancelEdit }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, name, description });
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
  );
};

export default EditTask;
