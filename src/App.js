import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import GetTask from "./components/GetTask";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";


//function based component

function App() {
  const salutation = "React";
  const [showAddTask, setShowAddTask] = useState(false);
  const [showGetTask, setShowGetTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };

    getTasks();
  }, []);

  //Fetch tasks(data) from server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);
    // data.then(d => console.log(d));
    return data;
  };

  //Fetch a single task(data) from server
  const fetchTask = async (id) => {
    // id = 2;
    // const res = await fetch(`http://localhost:5000/tasks/${id}`)
    // await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await fetch(`http://localhost:5000/tasks/${id}`)
    .then(async (res)=> {
    // .then((items) => console.log(items))
      if(res.ok) { 

        const data = await res.json();
        console.log(data);
        // return data;
        return data;  //important to return this response and then return it from functon

      } else {
      throw new Error('Invalid ID');}
    })
    .catch((e) => {
      console.log('Error msg', e)
      alert(e)  
    })

    return data
    // return res;
  };
  
  
  //Add task
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((response) => response.json());

    //You can use the following statmeent of you don't use the first .then (response.json())
    // const data = await res.json();

    // const data = res;
    console.log(res);

    setTasks([...tasks, res]);

  };
  // Delete a task
  const deleteTask = async (id) => {
    // console.log('delete', id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //task reminder toggler
  const taskReminderToggle = async (id) => {
    await fetchTask(id)
    .then(async taskToToggle => {
      // const taskToToggle = await res.json()
       // console.log(res)
      // console.log(taskToToggle)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })

      const data = await res.json();
      console.log(data)
      setTasks(
        tasks.map((task) =>
          // task.id === id ? { ...task, reminder: !task.reminder } : task
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      );

    })

    // {
    //   tasks.forEach(
    //     (task) =>
    //       task.id === id &&
    //       (console.log("Task id", task.id),
    //       console.log("Task reminder state", task.reminder))
    //   );
    // }
  };


  return (
    <Router>
    <div className="container">
      <Header
        showAddTask={showAddTask}
        showGetTask={showGetTask}
        showAdd={() => setShowAddTask(!showAddTask)}
        showGet={() => setShowGetTask(!showGetTask)}
        param="Task Manager : Online Application"
      />
      <Routes>
        <Route path='/' element={
          <>
    
          {showAddTask && <AddTask onAdd={addTask} />}
          {showGetTask && <GetTask onGetTask={fetchTask} />}
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
          </>
        } />
    
        {/* <Routes> */}
        <Route path='/about' element={<About />} />
        <Route path='/task/:id' element={<TaskDetails />} />
          
      </Routes>
    <Footer />
    </div>
    </Router>
    
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
