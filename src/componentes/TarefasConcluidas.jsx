import React from 'react';
import { useLocation } from 'react-router-dom'; 
import TaskList from './TaskList';

const TarefasConcluidas = ({ tasks, onToggleStatus,  onDeleteTask  }) => { // Recebe a prop onDeleteTask
  const location = useLocation();

  return (
    <div className="container-tarefas" key={location.pathname}>
      <h2>Tarefas Concluídas</h2>
      <TaskList
        tasks={tasks.filter(task => task.concluida)}
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
};

export default TarefasConcluidas;