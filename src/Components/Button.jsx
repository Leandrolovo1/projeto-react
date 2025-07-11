import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
        props.isCompleted ? "line-through" : ""
      }`}
      {...props}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  isCompleted: PropTypes.bool,
  children: PropTypes.node,
};
