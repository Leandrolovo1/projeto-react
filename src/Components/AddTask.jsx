import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

export default function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input type="text" placeholder="Digite o titulo da tarefa" value={title}  onChange={(event)=>setTitle(event.target.value)}/>
      
      <Input type="text" placeholder="Digite a descrição da tarefa" value={description}  onChange={(event)=>setDescription(event.target.value)}/>

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("preencha os Campos Abaixo");
          }
          props.adicionarTask(title, description);
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

AddTask.propTypes = {
  adicionarTask: PropTypes.func.isRequired,
};
