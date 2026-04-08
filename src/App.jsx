import { useCallback, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import InputText from "./InputText";
import TodoList from "./TodoList";
import CountTask from "./CountTask";
import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((store) => store.tasks.tasks);

  useEffect(() => {
    console.log("загружаем в localStorage:");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <InputText />
      <TodoList />
      <CountTask />
    </>
  );
}

export default App;
