const initState = {
  item: {
    name: "",
    price: "",
    id: Math.random(),
  },
};

const serviceAddReducer = (state = initState, action) => {
  switch (action.type) {
    case "ON_CHANGE_FIELD":
      return {
        item: { ...state.item, [action.e.name]: action.e.value },
      };
    case "EDIT":
      return {
        item: action.item,
      };

    case "CLEAR_FORM":
      return initState;

    default:
      return state;
  }
};

export default serviceAddReducer;
