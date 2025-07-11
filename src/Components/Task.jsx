// src/components/Task.jsx

import { ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Task(props) {
  const navigate = useNavigate();
  function verDetalhes(task) {
    navigate(`/detalhes?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li className="flex gap-2" key={task.id}>
          {/* Botão Principal da Tarefa */}
          <Button
            isCompleted={task.isCompleted} // 1. Passamos o estado de 'completo'
            onClick={() => props.onTaskClick(task.id)}
            // 2. Adicionamos as classes de layout específicas para este botão
            className="w-full justify-start"
          >
            {task.title}
          </Button>

          {/* Botão de Detalhes */}
          <Button
            onClick={() => verDetalhes(task)}
            // 3. Nenhuma classe extra é necessária, ele já pega o estilo base.
            // Poderíamos adicionar classes de hover: className="hover:bg-slate-500"
          >
            <ChevronRightIcon />
          </Button>

          {/* Botão de Deletar */}
          <Button
            onClick={() => props.deleteTaskClick(task.id)}
            // 4. Exemplo de personalização: trocamos a cor de fundo
            className="bg-red-500 hover:bg-red-600"
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  deleteTaskClick: PropTypes.func.isRequired,
};