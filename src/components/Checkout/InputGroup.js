import './checkout.css'

const InputGroup = ({ type, name, label, value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}: </label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default InputGroup