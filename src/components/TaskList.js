import React from "react";

const TaskList = ({ tasks, deleteTask, setEditingTask, updateTask }) => {
  const toggleStatus = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "Completed" ? "Not Completed" : "Completed",
    };
    updateTask(updatedTask);
  };

  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">{task.name}</h2>
                  <p className="text-gray-700">{task.description}</p>
                  <p
                    className={`text-sm ${
                      task.status === "Completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {task.status}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => toggleStatus(task)}
                    className="px-3 py-1 text-white bg-blue-500 rounded-lg"
                  >
                    Toggle Status
                  </button>
                  <button
                    onClick={() => setEditingTask(task)}
                    className="px-3 py-1 text-white bg-yellow-500 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
