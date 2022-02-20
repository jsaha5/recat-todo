import "./TodoList.css";
import { Todo } from "../models/Todo";
interface TodoListProps {
  todos: Todo[];
}
const TodoList = (props: TodoListProps) => {
  return (
    <div>
      <h3>Todo List</h3>
      {props.todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
