// componentes/TaskItem.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importe useNavigate aqui

const TaskItem = ({ task, onToggleStatus, onDeleteTask, onEditTask }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmarExclusao = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?"
    );
    if (confirmarExclusao) {
      onDeleteTask(task.id);
      navigate("/pendentes"); // Ou para a rota desejada após a exclusão
    }
  };

  const handleEdit = () => {
    navigate(`/editar/${task.id}`); // Certifique-se de que a rota /editar/:id existe
  };

  return (
    <li className={task.concluida ? "concluida" : ""}>
      <input
        type="checkbox"
        checked={task.concluida}
        onChange={() => onToggleStatus(task.id)}
      />
      <p>Título: {task.titulo}</p>
    
      <p>Descrição: {task.descricao}</p>

     
      <p>Tipo: {task.tipo}</p>
      <p>Responsável: {task.responsavel}</p>
      <p>Início: {task.inicio}</p>

      <div className="botoes-tarefa">
        {onEditTask && ( // <-- Verifica se onEditTask existe antes de renderizar
          <button onClick={handleEdit}>Editar</button>
        )}
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </li>
  );
};

export default TaskItem;
