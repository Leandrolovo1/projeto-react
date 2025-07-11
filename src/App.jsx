import Task from "./Components/Task";
import AddTask from "./Components/AddTask";
import { useEffect, useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")||[]));

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  useEffect(()=>{
    const fetchTasks = async () => {

      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
        { 
          method: 'GET'
        }
      );
    const data = await response.json()
   // setTasks(data)
    }
    fetchTasks();
  },[]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask adicionarTask={adicionarTask} />
        <Task
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTaskClick={deleteTaskClick}
        />
      </div>
    </div>
  );

  function deleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );
    setTasks(newTasks);
  }
  function adicionarTask(title, description) {
    const newTasks = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }
}
