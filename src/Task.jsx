import { useState, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { editTask, isDoneCheck, deleteTask } from "./redux/actions/taskActions";

const Task = ({ task }) => {
  console.log("render Task");

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [textEdit, setTextEdit] = useState(task.title);
  const [error, setError] = useState(false);

  const handleSave = () => {
    const trimText = textEdit.trim();
    if (!trimText) {
      setError(!trimText);
      return;
    }
    if (trimText !== task.title) {
      dispatch(editTask(task.id, trimText));
    }
    setIsEdit(!isEdit);
    setError(!trimText);
  };

  const handleCancel = () => {
    setTextEdit(task.title);
    setIsEdit(!isEdit);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleMain = () => {
    if (isEdit) {
      handleSave();
    } else {
      handleEdit();
    }
  };

  const handleIsDone = () => {
    dispatch(isDoneCheck(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task">
      <input type="checkbox" checked={task.isDone} onChange={handleIsDone} />

      {isEdit ? (
        <input
          value={textEdit}
          onChange={(e) => setTextEdit(e.target.value)}
          onKeyDown={handleKeydown}
        />
      ) : (
        <p className={task.isDone ? "done" : ""}>{task.title}</p>
      )}

      <button onClick={handleMain}>{isEdit ? "💾" : "✏️"}</button>
      <button onClick={handleDelete}>🗑️</button>

      {error && <p className="errorText">❌ Название не может быть пустым!</p>}
    </div>
  );
};

export default memo(Task);
