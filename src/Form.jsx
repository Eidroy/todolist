import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div id="form">
      <input
        type="text"
        placeholder="Write a new todo"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add todo</button>
    </div>
  );
}

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
