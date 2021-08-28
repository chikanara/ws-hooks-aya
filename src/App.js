import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, todo: "Learn HTML", isDone: true },
    { id: 1, todo: "Learn CSS", isDone: true },
    { id: 2, todo: "Learn DEVOPS", isDone: false },
  ]);

  const deleteTask = (idTask) => {
    setTasks(tasks.filter(task => task.id !==idTask))
  }

  const handleComplete = (idTask) => {
    setTasks(tasks.map(task => task.id === idTask ? {...task,isDone:!task.isDone} : task))
  }

  const handleAdd = (newTask) => {
       setTasks([...tasks,newTask])
  }
  
  
  return <div className="App">
    <AddTask handleAdd={handleAdd}/>
    <TaskList tasks={tasks} deleteTask={deleteTask} handleComplete={handleComplete}/>
  </div>;
}

export default App;
