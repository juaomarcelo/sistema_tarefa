// componentes/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleStatus, onDeleteTask, onEditTask }) => { // Recebe as props
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
            onEditTask={onEditTask}     // Passa onEditTask para TaskItem
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;