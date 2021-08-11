export const addService = (service) => {
  return { type: "ADD_SERVICE", item: service };
};

export const deleteService = (id) => {
  return { type: "DELETE_SERVICE", id };
};

export const onChangeField = (e) => {
  return { type: "ON_CHANGE_FIELD", e };
};

export const editService = (item) => {
  return { type: "EDIT", item };
};

export const clearForm = () => {
  return { type: "CLEAR_FORM" };
};
