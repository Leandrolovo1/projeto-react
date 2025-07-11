import PropTypes from 'prop-types';

export default function Input(props) {
    return(
        <input
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
          {...props}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};
