import { useState } from "react";

export const AddCategory = ({ onNewCategori }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategori(inputValue.trim());
    setinputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingrese una nueva categoría"
        name="newCategory"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
