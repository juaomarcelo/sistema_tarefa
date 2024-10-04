// componentes/TarefasConcluidas.jsx
import React from 'react';
import { useLocation } from 'react-router-dom'; 
import TaskList from './TaskList';


const TarefasConcluidas = ({ tasks, onToggleStatus, onDeleteTask, onEditTask }) => { // Recebe a prop onDeleteTask
  const location = useLocation();

  return (
    <div className="container-tarefas" key={location.pathname}>
      <h2>Tarefas Concluídas</h2>
      <TaskList
        tasks={tasks.filter(task => task.concluida)}
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask} // Passa a prop onDeleteTask para TaskList
        onEditTask={onEditTask}    
      />
    </div>
  );
};

export default TarefasConcluidas;