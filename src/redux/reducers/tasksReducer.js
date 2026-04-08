const getTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};
const initialValue = {
  tasks: getTasks(),
};

const tasksReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: crypto.randomUUID(),
            title: action.payload.title,
            isDone: action.payload.isDone,
          },
        ],
      };

    case "deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    case "isDoneCheck":
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        }),
      };

    case "editTask":
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, title: action.payload.title };
          }
          return item;
        }),
      };

    case "clearTasks":
      return {
        ...state,
        tasks: state.tasks.filter((item) => !item.isDone),
      };

    default:
      return state;
  }
};

export default tasksReducer;
