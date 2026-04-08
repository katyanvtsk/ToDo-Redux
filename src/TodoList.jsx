import { memo } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/actions/buttonActions";

const TodoList = () => {
  console.log("render TodoList");
  const tasks = useSelector((store) => store.tasks.tasks);
  const filter = useSelector((store) => store.filter.str);
  const dispatch = useDispatch();

  const filteredTask = tasks.filter((item) => {
    if (filter === "active") {
      return !item.isDone;
    } else if (filter === "completed") {
      return item.isDone;
    }
    return true;
  });

  return (
    <div className="tasks-list">
      {filteredTask.length === 0 ? (
        <h2>Задач нет!</h2>
      ) : (
        filteredTask.map((item) => <Task key={item.id} task={item} />)
      )}

      <div className="button">
        <button
          className={`button__all ${filter === "all" ? "active" : ""}`}
          onClick={() => dispatch(setFilter("all"))}
        >
          Все
        </button>
        <button
          className={`button__active ${filter === "active" ? "active" : ""}`}
          onClick={() => dispatch(setFilter("active"))}
        >
          Активные
        </button>
        <button
          className={`button__completed ${filter === "completed" ? "active" : ""}`}
          onClick={() => dispatch(setFilter("completed"))}
        >
          Завершённые
        </button>
      </div>
    </div>
  );
};

export default memo(TodoList);
