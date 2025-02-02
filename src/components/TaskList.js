import React from "react";

const TaskList = ({ tasks, deleteTask, setEditingTask, updateTask }) => {
  //status logic
  const toggleStatus = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "Completed" ? "Not Completed" : "Completed",
    };
    updateTask(updatedTask);
  };

  return (
    <div className="h-[360px] overflow-auto  mt-4 p-4 rounded-lg shadow-lg ">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        <ul className=" space-y-4 ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className=" p-4 bg-gray-100 rounded-lg shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between"
            >
              <div className=" w-full  break-words ">
                <h2 className="text-lg font-bold text-gray-800">{task.name}</h2>

                <p className=" text-sm text-gray-700 whitespace-normal break-words ">
                  {task.description}
                </p>

                <p className="text-sm text-gray-600">
                  Status:
                  <span
                    className={`ml-2 font-medium ${
                      task.status === "Completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {task.status}
                  </span>
                </p>
              </div>

              {/* Action */}
              <div className="flex items-center space-x-4 mt-4 md:mt-4 md:ml-0 ">
                <button
                  onClick={() => toggleStatus(task)}
                  className="px-2 w-20 py-1 text-[12px] font-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg "
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => setEditingTask(task)}
                  className="px-2 py-1 text-[12px] font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg "
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-2 py-1 text-[12px] font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg "
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
