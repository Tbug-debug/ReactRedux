import { legacy_createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

interface AddToDoAction {
  type: typeof ADD;
  text: string;
}

interface DeleteToDoAction {
  type: typeof DELETE;
  id: number;
}

const addToDo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};

export interface ToDo {
  text: string;
  id: number;
}

export type ToDoAction = AddToDoAction | DeleteToDoAction;

const reducer = (state: ToDo[] = [], action: ToDoAction) => {
  // 상태를 반경한다.
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo: { id: number }) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer); //상태 변경후 store에 저장

export type RooteState = ReturnType<typeof store.getState>;

export const actionCreators = {
  //오브젝트 형태로 저장한다.
  addToDo,
  deleteToDo,
};

export default store;
