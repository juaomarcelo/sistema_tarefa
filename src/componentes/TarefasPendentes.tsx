import React from 'react';
import TaskList from './TaskList';

const TarefasPendentes = ({ tasks, onToggleStatus }) => {
  return (
    <div>
      <h2>Tarefas Pendentes</h2>
      <TaskList tasks={tasks} onToggleStatus={onToggleStatus} />
    </div>
  );
};

export default TarefasPendentes;