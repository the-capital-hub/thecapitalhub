import "./Input.scss";

const Input = ({ type, placeholder }) => {
  return (
    <div className="Input">
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
