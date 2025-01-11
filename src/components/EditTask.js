import React, { useState } from "react";

const EditTask = ({ task, updateTask, cancelEdit }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    //save changes
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
          className=" outline-none w-full p-2 border rounded-full  shadow-xl text-orange-900"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="outline-none w-full  p-2 border rounded-lg shadow-xl  text-orange-900"
          rows="2"
        ></textarea>
        <div className="flex space-x-2">
          <button
            type="submit"
            className=" shadow-md px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full"
          >
            Save Changes
          </button>
          <button
            onClick={cancelEdit}
            className="shadow-md px-4 py-2 text-white bg-red-700 hover:bg-red-800 rounded-full "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
