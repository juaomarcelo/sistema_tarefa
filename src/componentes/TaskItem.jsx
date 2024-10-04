import React from 'react';

const TaskItem = ({ task, onToggleStatus }) => {
  return (
    <li className={task.concluida ? 'concluida' : ''}>
      <input 
        type="checkbox" 
        checked={task.concluida} 
        onChange={() => onToggleStatus(task.id)} 
      />
      <span>{task.titulo}</span> - {task.descricao}
    </li>
  );
};

export default TaskItem;