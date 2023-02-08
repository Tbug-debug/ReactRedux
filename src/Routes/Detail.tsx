import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ToDo } from "../store";

interface DetailProps {
  toDos: ToDo[];
}

const Detail = ({ toDos }: DetailProps) => {
  const { id } = useParams();
  console.log(toDos);
  const todo = toDos.find((todo) => todo.id === parseInt(id as string));
  return (
    <>
      <h1>{todo?.text}</h1>
      <h4>Created at: {todo?.id}</h4>
    </>
  );
};

function mapStateToProps(state: ToDo[]) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
