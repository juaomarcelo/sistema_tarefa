import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Instale com `npm install react-toastify`
import "react-toastify/dist/ReactToastify.css";
import "../estilos/TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    titulo: '',
    descricao: '',
    tipo: 'Backend',
    responsavel: '',
    inicio: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.titulo || !task.descricao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Formata a data de início
    const data = task.inicio.split('-');
    const dataFormatada = `${data[2]}/${data[1]}/${data[0]}`;
    const novaTarefa = { ...task, inicio: dataFormatada };

    onAddTask(novaTarefa);
    toast.success('Tarefa adicionada com sucesso!'); // Notificação de sucesso

    setTask({
      titulo: '',
      descricao: '',
      tipo: 'Backend',
      responsavel: '',
      inicio: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Nova Tarefa</h2>
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
            value={task.inicio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ToastContainer /> {/* Componente para exibir as notificações */}
    </>
  );
};

export default TaskForm;
