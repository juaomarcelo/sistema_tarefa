import React from "react";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ task, onToggleStatus, onDeleteTask, onEditTask }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editar/${task.id}`);
  };

  const handleConcluir = () => {
    onToggleStatus(task.id);
  };

  return (
    <li className={task.concluida ? "concluida" : ""}>
      {/* Botão para Concluir/Reabrir a tarefa */}
      <button onClick={handleConcluir} className="botao-concluir">
        {task.concluida ? 'Reabrir' : 'Concluir'} 
      </button>

      {/* Campos da Tarefa */}
      <p>Título: {task.titulo}</p>
      <p>Descrição: {task.descricao}</p>
      <p>Tipo: {task.tipo}</p>
      <p>Responsável: {task.responsavel}</p>
      <p>Início: {task.inicio}</p>

      {/* Botões Editar e Excluir */}
      <div className="botoes-tarefa">
        {onEditTask && (
          <button onClick={handleEdit}>Editar</button>
        )}
        <button onClick={() => onDeleteTask(task.id)}>Excluir</button>
      </div>
    </li>
  );
};

export default TaskItem;
