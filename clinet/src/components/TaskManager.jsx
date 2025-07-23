import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (!title.trim()) alert("Add any task");
    try {
      const res = await axios.post(`${API_URL}/create`, { title });
      const newTask = res.data.data;
      setTasks([newTask, ...tasks]);
      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleCompletion = async (id, currentStatus) => {
    try {
      await axios.put(`${API_URL}/update/${id}`, { completed: !currentStatus });
      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? { ...task, completed: !currentStatus } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="border border-gray-300 p-2 flex-1 rounded-md"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id}>
              <div className="flex justify-evenly pb-1">
                <div className="flex items-center gap-1 justify-center">
                  <input
                  className="cursor-pointer"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompletion(task._id, task.completed)}
                  />
                  <span
                    className={task.completed ? "line-through text-gray-500 cursor-pointer" : ""}
                  >
                    {task.title}
                  </span>
                </div>
                <div className="font-light text-sm cursor-pointer">
                  Added:{" "}
                  {new Date(task.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <button
                  className="bg-red-600 p-1 rounded text-white cursor-pointer"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
              <hr style={{ width: "100%",opacity:0.3 }} />
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center">No tasks found</p>
        )}
      </ul>
    </div>
  );
};

export default TaskManager;
