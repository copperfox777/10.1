const initState = {
  servicies: [
    { id: Math.random(10000), name: "Диагностика", price: "Бесплатно" },
    { id: Math.random(10000), name: "Замена стекла", price: 25000 },
    { id: Math.random(10000), name: "Замена Дисплея", price: 30000 },
    { id: Math.random(10000), name: "Замена Телефона", price: 4000 },
  ],
};

const serviceListReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_SERVICE":
      const newState = state.servicies.filter((s) => s.id !== action.id);
      return {
        servicies: newState,
      };
    case "ADD_SERVICE":
      const isSetItem = state.servicies.find((s) => s.id === action.item.id);

      if (isSetItem) {
        const updatedService = state.servicies.map((s) => {
          if (s.id === action.item.id) {
            s.name = action.item.name;
            s.price = action.item.price;
          }
          return s;
        });
        return {
          servicies: updatedService,
        };
      } else {
        return {
          servicies: [...state.servicies, action.item],
        };
      }
    //return;

    default:
      return state;
  }
};

export default serviceListReducer;
