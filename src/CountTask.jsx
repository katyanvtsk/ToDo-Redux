import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTasks } from "./redux/tasksSlice";

const CountTask = () => {
  const tasks = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch();

  const notIsDone = tasks.filter((item) => !item.isDone);
  const count = notIsDone.length;

  const handleClear = () => {
    dispatch(clearTasks());
  };

  return (
    <div className="count-container">
      <p>Осталось выполнить: {count}</p>
      <button onClick={handleClear}>Очистить выполненные</button>
    </div>
  );
};

export default memo(CountTask);
