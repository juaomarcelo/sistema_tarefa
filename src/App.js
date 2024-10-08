import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TaskForm from "./componentes/TaskForm";
import TarefasConcluidas from "./componentes/TarefasConcluidas";
import TarefasPendentes from "./componentes/TarefasPendentes";
import "./App.css";
import EditarTarefa from "./componentes/EditarTarefa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar as tarefas salvas do localStorage
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tasks");
    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas));
    }
    setIsLoading(false);
  }, []);

  // Salvar no localStorage apenas se houver tarefas
  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Saving tasks:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const numTarefasPendentes = tasks.filter((task) => !task.concluida).length;

  const numTarefasConcluidas = tasks.filter((task) => task.concluida).length;

  
  

  const onDeleteTask = (id) => {
    const confirmarExclusao = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?"
    );
    if (confirmarExclusao) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const onEditTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  // Função para adicionar nova tarefa
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, concluida: false, id: Date.now() }]);
  };

  // Função para alternar o status da tarefa (concluída/pendente)
  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              concluida: !task.concluida,
              conclusaoData: !task.concluida
                ? new Date().toLocaleString()
                : null,
            }
          : task
      )
    );
  };

  // Exibir um loading enquanto as tarefas estão sendo carregadas
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Gerenciamento de Tarefas</h1>

          <nav>
            <ul>
              <li>
                <Link to="/registrar">Registrar Nova Tarefa</Link>
              </li>
              <li>
                <Link to="/pendentes">
                  Tarefas Pendentes ({numTarefasPendentes}){" "}
                </Link>
              </li>
              <li>
                <Link to="/concluidas">Tarefas Concluídas ({numTarefasConcluidas}) </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/registrar"
              element={
                <div className="container-tarefas">
                  <div className="coluna">
                    <h2>Registrar Nova Tarefa</h2>
                    <TaskForm onAddTask={addTask} />
                  </div>
                </div>
              }
            />
            <Route
              path="/pendentes"
              element={
                <TarefasPendentes
                  tasks={tasks}
                  onToggleStatus={toggleTaskStatus}
                  onDeleteTask={onDeleteTask}
                  onEditTask={onEditTask} // Passa a função de edição aqui
                />
              }
            />
            <Route
              path="/editar/:id" // Rota para editar tarefa (com ID dinâmico)
              element={<EditarTarefa tasks={tasks} onEditTask={onEditTask} />}
            />
            <Route
              path="/concluidas"
              element={
                <TarefasConcluidas
                  tasks={tasks}
                  onToggleStatus={toggleTaskStatus}
                  onDeleteTask={onDeleteTask}
                  // onEditTask={onEditTask}  <-- Remove a prop aqui!
                />
              }
            />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
