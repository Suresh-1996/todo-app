import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Filter from "./components/Filter";
import Preloader from "./components/Preloader";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true); // Preloader state

  useEffect(() => {
    // Simulate loading effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Preloader lasts 2 seconds

    // Fetch tasks from the backend
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));

    return () => clearTimeout(timeout);
  }, []);

  const addTask = (task) => {
    axios
      .post("http://localhost:5000/api/tasks", task)
      .then((res) => {
        setTasks([...tasks, { ...task, id: res.data.id }]);
      })
      .catch((err) => console.error(err));
  };

  const updateTask = (updatedTask) => {
    axios
      .put(`http://localhost:5000/api/tasks/${updatedTask.id}`, updatedTask)
      .then(() => {
        setTasks(
          tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
        setEditingTask(null);
      })
      .catch((err) => console.error(err));
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => console.error(err));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.status === "Completed";
    if (filter === "Not Completed") return task.status === "Not Completed";
    return true;
  });

  // Show preloader while loading
  if (loading) {
    return <Preloader />;
  }

  return (
    <div className=" flex flex-wrap flex-row min-h-screen bg-gradient-to-r from-orange-400    to-pink-600  text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold font-serif text-center mb-4  text-black">
          Task Manager
        </h1>
        <Filter filter={filter} setFilter={setFilter} />
        {editingTask ? (
          <EditTask
            task={editingTask}
            updateTask={updateTask}
            cancelEdit={() => setEditingTask(null)}
          />
        ) : (
          <AddTask addTask={addTask} />
        )}
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default App;
