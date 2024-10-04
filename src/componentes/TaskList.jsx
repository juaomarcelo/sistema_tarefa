// componentes/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleStatus, onDeleteTask, onEditTask }) => { // Recebe onDeleteTask
  return (
    <ul>
      {tasks.length === 0 ? (
        <li>Nenhuma tarefa aqui!</li>
      ) : (
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggleStatus={onToggleStatus}
            onDeleteTask={onDeleteTask} // Passa onDeleteTask para TaskItem
            onEditTask={onEditTask}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;