const initialValue = {
  text: "купить молоко",
};

const inputTextReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "change":
      return { ...state, text: action.payload };
    case "zero":
      return { ...state, text: "" };

    default:
      return state;
  }
};

export default inputTextReducer;
