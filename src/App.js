import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import TaskList from './componentes/TaskList';
import TaskForm from './componentes/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, concluida: false, id: Date.now() }]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, concluida: !task.concluida } : task
    ));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Minhas Tarefas</h1>

          <nav>
            <ul>
              <li>
                <Link to="/pendentes">Tarefas Pendentes</Link>
              </li>
              <li>
                <Link to="/concluidas">Tarefas Concluídas</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route 
              path="/pendentes" 
              element={
                <div className="container-tarefas">
                  <TaskList 
                    tasks={tasks.filter(task => !task.concluida)} 
                    onToggleStatus={toggleTaskStatus} 
                  />
                  <div className="coluna">
                    <h2>Registrar Nova Tarefa</h2>
                    <TaskForm onAddTask={addTask} />
                  </div>
                </div>
              }
            />
            <Route 
              path="/concluidas" 
              element={
                <div className="container-tarefas">
                  <TaskList 
                    tasks={tasks.filter(task => task.concluida)} 
                    onToggleStatus={toggleTaskStatus} 
                  />
                </div>
              }
            />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;