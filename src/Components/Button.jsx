// src/components/Button.jsx

import { CheckIcon } from "lucide-react";
import PropTypes from "prop-types";

// Adicionamos { className, ...props } para capturar a classe separadamente
export default function Button({ isCompleted, children, className, ...props }) {
  // Estilos base que todos os botões compartilharão.
  // Note que removemos 'w-full' e 'text-left', pois são específicos.
  // Adicionamos 'flex', 'items-center' e 'gap-2' para alinhar ícone e texto.
  const baseClasses = "bg-slate-400 text-white p-2 rounded-md flex items-center gap-2";

  // Classe condicional para o estado de concluído
  const completedClass = isCompleted ? "line-through" : "";

  // Juntamos todas as classes: base + condicional + as que vierem de fora
  const finalClassName = `${baseClasses} ${completedClass} ${className || ""}`;

  return (
    <button className={finalClassName.trim()} {...props}>
      {isCompleted && <CheckIcon size={18} />} {/* Ícone aparece se completo */}
      {children}
    </button>
  );
}

Button.propTypes = {
  isCompleted: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string, // Adicionado para boas práticas
};