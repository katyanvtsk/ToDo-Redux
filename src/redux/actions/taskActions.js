export const editTask = (id, newTitle) => {
  return {
    type: "editTask",
    payload: {
      id: id,
      title: newTitle,
    },
  };
};

export const isDoneCheck = (id) => {
  return {
    type: "isDoneCheck",
    payload: id,
  };
};

export const deleteTask = (id) => {
  return {
    type: "deleteTask",
    payload: id,
  };
};
