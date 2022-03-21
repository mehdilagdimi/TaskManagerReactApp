import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

//function based component

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Roche",
      task: "task",
      date: "date",
      reminder: true,
    },
    {
      id: "2",
      name: "Roche2",
      task: "task2",
      date: "date2",
      reminder: true,
    },
    {
      id: "3",
      name: "Roche3",
      task: "task3",
      date: "date3",
      reminder: false,
    },
  ]);

  //set show add task
  const showAdd = () => {
    setShowAddTask(true);
  };
  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    //the following console log doesnot display the added id
    //id is still indefined even though "it was set" by settasks
    console.log(task);
  };
  // Delete a task
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //task reminder toggler
  const taskReminderToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    // reminder = !reminder$
    {
      tasks.forEach(
        (task) =>
          task.id === id &&
          (console.log("Task id", task.id),
          console.log("Task reminder state", task.reminder))
      );
    }
  };
  const salutation = "React";
  return (
    <div className="container">
      <Header showAdd={() => setShowAddTask(!showAddTask)} param="Online Application" />
      {showAddTask && <AddTask onAdd={addTask} />}
      <h2>Hello {salutation}</h2>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDClick={taskReminderToggle}
        />
      ) : (
        "No task to display"
      )}
    </div>
  );
}

//class based component
// import React, { Component } from 'react'

// class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

export default App;
