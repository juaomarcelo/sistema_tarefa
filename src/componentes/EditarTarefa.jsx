import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarTarefa = ({ tasks, onEditTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    titulo: "",
    descricao: "",
    tipo: "Backend", // Valor inicial padrão (ajuste conforme necessário)
    responsavel: "",
    inicio: "",
  });

  useEffect(() => {
    const tarefaEncontrada = tasks.find((t) => t.id === parseInt(id));
    if (tarefaEncontrada) {
      setTask(tarefaEncontrada);
    }
  }, [tasks, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onEditTask({ ...task, id: parseInt(id) }); // Inclui o ID na tarefa atualizada
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
            value={task.inicio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditarTarefa;