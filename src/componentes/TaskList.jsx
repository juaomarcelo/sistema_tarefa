import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleStatus }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <li>Nenhuma tarefa aqui!</li>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggleStatus={onToggleStatus} />
        ))
      )}
    </ul>
  );
};

export default TaskList;