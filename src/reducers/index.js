import { combineReducers } from "redux";

//ChangeTheNumber
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "APP_TODO":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            data: action.payload.data,
          },
        ],
      };
    case "DELETE_TODO":
      const newlist = state.list.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        list: newlist,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default combineReducers({
  todoReducers: todoReducers,
});
