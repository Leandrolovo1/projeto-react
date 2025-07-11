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
          <Button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </Button>

          <Button
            onClick={() => verDetalhes(task)}
            className="bg-slate-400 p-2 rounded-md text-white "
          >
            <ChevronRightIcon />
            
          </Button>

          <Button
            onClick={() => props.deleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white "
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
