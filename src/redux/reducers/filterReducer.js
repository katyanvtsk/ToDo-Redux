const initialValue = {
  str: "all",
};

const filterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "setFilter":
      return { ...state, str: action.payload };

    default:
      return state;
  }
};

export default filterReducer;
