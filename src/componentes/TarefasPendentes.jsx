import React from "react";
import { useLocation } from "react-router-dom";
import TaskList from "./TaskList";
import "../estilos/TarefasPendentes.css";

const TarefasPendentes = ({
  tasks,
  onToggleStatus,
  onDeleteTask,
  onEditTask,
}) => {
  const location = useLocation();
  const tarefasPendentes = tasks.filter((task) => !task.concluida);

  

  return (
    <div className="container-tarefas" key={location.pathname}>
      <div className="header-tarefas">
        <h2>Tarefas Pendentes</h2>
      </div>

      <TaskList
        tasks={tarefasPendentes}
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
    </div>
  );
};

export default TarefasPendentes;
