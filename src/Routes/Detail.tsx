import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { RooteState } from "../store";
import { ToDo } from "../store";

interface DetailProps {
  toDos: ToDo[];
}

const Detail = ({ toDos }: DetailProps) => {
  const { id } = useParams();
  const todo = toDos.find((todo) => todo.id === parseInt(id as string));
  return (
    <>
      <h1>{todo?.text}</h1>
      <h4>Created at: {todo?.id}</h4>
    </>
  );
};

function mapStateToProps(state: RooteState) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
