import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators, ToDo as ToDoType } from "../store";
import { RooteState } from "../store";
import { Dispatch } from "redux";

interface HomeProps {
  toDos: ToDoType[];
  addToDo: (text: string) => void;
}

function Home({ toDos, addToDo }: HomeProps) {
  const [text, setText] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>submit</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state: RooteState) {
  //store의 정보를 불러옴
  return { toDos: state };
}

function mapDispatchToProps(dispatch: Dispatch) {
  //dispatch를 통해서 reducer에게 전달
  return {
    addToDo: (text: string) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); //store에 커넥트
