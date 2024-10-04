import React from 'react';
import TaskList from './TaskList';

const TarefasConcluidas = ({ tasks, onToggleStatus }) => {
  return (
    <div>
      <h2>Tarefas Concluídas</h2>
      <TaskList tasks={tasks} onToggleStatus={onToggleStatus} />
    </div>
  );
};

export default TarefasConcluidas;