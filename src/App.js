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
  // Preloader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate 5 sec

    // Fetch tasks from the backend
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));

    return () => clearTimeout(timeout);
  }, []);
  //Make Task
  const addTask = (task) => {
    axios
      .post("http://localhost:5000/api/tasks", task)
      .then((res) => {
        setTasks([...tasks, { ...task, id: res.data.id }]);
        //Refresh data
        axios
          .get("http://localhost:5000/api/tasks")
          .then((res) => setTasks(res.data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  //Update Task
  const updateTask = (updatedTask) => {
    axios
      .put(`http://localhost:5000/api/tasks/${updatedTask.id}`, updatedTask)
      .then(() => {
        setTasks(
          tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
        //Refresh data
        axios
          .get("http://localhost:5000/api/tasks")
          .then((res) => setTasks(res.data))
          .catch((err) => console.error(err));
        setEditingTask(null);
      })
      .catch((err) => console.error(err));
  };
  //Delete Task
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
        axios
          .get("http://localhost:5000/api/tasks")
          .then((res) => setTasks(res.data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  //Filter by state
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
        <div className="flex flex-wrap items-center justify-center">
          <h1 className="text-3xl font-bold font-serif text-center mb-4  mt-4 text-black drop-shadow-xl justify-center items-center">
            Task Manager
          </h1>
          <img
            src="/logo.png"
            alt="Task Manager Logo"
            className="w-20 h-20  "
          />
        </div>

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
