import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import { ToDo } from "../store";

interface ToDoProps {
  text: string;
  onBtnClick: () => void;
  id: number;
}

interface OwnProps {
  type: string;
  id: number;
}

function ToDos({ text, onBtnClick, id }: ToDoProps) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch: (e: OwnProps) => void, ownProps: ToDo) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDos);
