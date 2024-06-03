import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = ({ title, description }) => {
    const newTask = {
      title,
      id: tasks.length,
      description,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((elem) => elem.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{ tasks: tasks, createTask: createTask, deleteTask: deleteTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
