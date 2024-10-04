import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarTarefa = ({ tasks, onEditTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    titulo: "",
    descricao: "",
    tipo: "Backend",
    responsavel: "",
    inicio: "", // Formato YYYY-MM-DD
  });

  // Função para garantir que a data esteja no formato DD/MM/YYYY para exibir no input text
  const formatDateToDisplay = (dateString) => {
    if (!dateString) return ""; // Retorna vazio se não houver data
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`; // Retorna no formato DD/MM/YYYY
  };

  // Função para garantir que a data esteja no formato YYYY-MM-DD para o campo date
  const formatDateToInput = (dateString) => {
    if (!dateString) return ""; // Retorna vazio se não houver data
    const [day, month, year] = dateString.split("/"); // Formato DD/MM/YYYY
    return `${year}-${month}-${day}`; // Retorna no formato YYYY-MM-DD
  };

  // Carregar os dados da tarefa ao montar o componente ou quando o ID mudar
  useEffect(() => {
    const tarefaEncontrada = tasks.find((t) => t.id === parseInt(id));
    if (tarefaEncontrada) {
      setTask({
        ...tarefaEncontrada,
        inicio: tarefaEncontrada.inicio
          ? formatDateToInput(tarefaEncontrada.inicio) // Converte a data para o formato YYYY-MM-DD
          : "",  // Se não houver data, mantém vazio
      });
    }
  }, [tasks, id]);

  // Manipular a alteração nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Manipular o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Confirmação antes de salvar
    const confirmSave = window.confirm("Você tem certeza que deseja salvar as alterações?");
    if (!confirmSave) {
      return; // Não faz nada se o usuário cancelar
    }

    // Converte a data de volta para DD/MM/YYYY antes de salvar
    const tarefaAtualizada = {
      ...task,
      inicio: task.inicio ? formatDateToDisplay(task.inicio) : "", // Converte para DD/MM/YYYY
    };

    onEditTask({ ...tarefaAtualizada, id: parseInt(id) });
    toast.success("Alterações salvas com sucesso!"); // Notificação de sucesso
    navigate("/pendentes"); // Redireciona após salvar as alterações
  };

  return (
    <div className="container-tarefas">
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={task.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            value={task.descricao}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo:</label>
          <select
            id="tipo"
            name="tipo"
            value={task.tipo}
            onChange={handleChange}
          >
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
          </select>
        </div>
        <div>
          <label htmlFor="responsavel">Responsável:</label>
          <input
            type="text"
            id="responsavel"
            name="responsavel"
            value={task.responsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inicio">Início:</label>
          <input
            type="date"
            id="inicio"
            name="inicio"
            value={task.inicio}  // Formato YYYY-MM-DD para input[type=date]
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
      <ToastContainer /> {/* Componente para renderizar as notificações */}
    </div>
  );
};

export default EditarTarefa;
