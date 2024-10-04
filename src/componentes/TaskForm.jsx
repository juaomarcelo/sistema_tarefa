import React, { useState } from 'react';
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

    // Confirmação antes de adicionar a tarefa
    const isConfirmed = window.confirm("Deseja realmente adicionar esta tarefa?");
    if (!isConfirmed) {
      return; // Se o usuário cancelar, a tarefa não será adicionada
    }

    // Formata a data de início sem alterar o fuso horário
    const data = task.inicio.split('-'); // Divide o valor da data
    const dataFormatada = `${data[2]}/${data[1]}/${data[0]}`; // Formata para dd/mm/yyyy

    // Cria a nova tarefa com a data formatada
    const novaTarefa = {
      ...task,
      inicio: dataFormatada, // Sobrescreve o campo início com a data formatada
    };

    // Passa a nova tarefa com a data formatada
    onAddTask(novaTarefa);

    // Limpa o estado do formulário
    setTask({
      titulo: '',
      descricao: '',
      tipo: 'Backend',
      responsavel: '',
      inicio: '',
    });
  };

  return (
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
  );
};

export default TaskForm;
