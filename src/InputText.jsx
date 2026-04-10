import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, clearInput } from "./redux/inputTextSlice";
import { addTask } from "./redux/tasksSlice";

const InputText = () => {
  console.log("render InputText");

  const text = useSelector((store) => store.inputText.text);
  const dispatch = useDispatch();
  const [textError, setTextError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(change(value));

    if (value.trim().length > 0) {
      setTextError(false);
    }
  };

  const handleClick = () => {
    const trimText = text.trim();
    if (trimText === "") {
      setTextError(true);
      return;
    }

    dispatch(addTask(text));
    dispatch(clearInput());
    setTextError(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите задачу"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Добавить</button>
      {textError && <p className="errorText">❌ Введите задачу!</p>}
    </div>
  );
};

export default memo(InputText);
