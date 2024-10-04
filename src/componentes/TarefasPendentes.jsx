import React from "react";
import { useLocation } from "react-router-dom";
import TaskList from "./TaskList";
import "./TarefasPendentes.css"

const TarefasPendentes = ({
  tasks,
  onToggleStatus,
  onDeleteTask,
  onEditTask,
}) => {
  // Recebe as novas props
  const location = useLocation();

  // Filtra as tarefas pendentes
  const tarefasPendentes = tasks.filter((task) => !task.concluida);

  return (
    <div className="container-tarefas" key={location.pathname}>
      <h2>Tarefas Pendentes</h2>

      {/* Notificação com a contagem de tarefas pendentes */}
      {tarefasPendentes.length > 0 && (
        <div className="notification">
          Você tem {tarefasPendentes.length} tarefa(s) pendente(s).
        </div>
      )}

      <TaskList
        tasks={tarefasPendentes} // Passa as tarefas pendentes
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask} // Passa a prop onDeleteTask para TaskList
        onEditTask={onEditTask} // Passa a prop onEditTask para TaskList
      />
    </div>
  );
};

export default TarefasPendentes;
