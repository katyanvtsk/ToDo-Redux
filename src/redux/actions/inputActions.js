export const changeTask = (value) => {
  return {
    type: "change",
    payload: value,
  };
};

export const addTask = (text) => {
  return {
    type: "addTask",
    payload: {
      title: text,
      isDone: false,
    },
  };
};

export const clearInput = () => {
  return {
    type: "zero",
  };
};
