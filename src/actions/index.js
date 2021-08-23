export const addTodo = (data) => {
  return {
    type: "APP_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id: id,
    },
  };
};
export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};
