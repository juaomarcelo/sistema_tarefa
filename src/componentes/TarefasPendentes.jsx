// componentes/TarefasPendentes.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import TaskList from './TaskList';

const TarefasPendentes = ({ tasks, onToggleStatus, onDeleteTask, onEditTask }) => { // Recebe as novas props
  const location = useLocation();

  return (
    <div className="container-tarefas" key={location.pathname}>
      <h2>Tarefas Pendentes</h2>
      <TaskList 
        tasks={tasks.filter(task => !task.concluida)} 
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask} // Passa a prop onDeleteTask para TaskList
        onEditTask={onEditTask}     // Passa a prop onEditTask para TaskList
      />
    </div>
  );
};

export default TarefasPendentes;