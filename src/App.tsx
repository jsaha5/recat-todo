import React, {useState} from "react";
import "./App.css";
import { Todo } from "./models/Todo";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    console.log(text);
    setTodos((previousTodo) => {
      return [ ...previousTodo, new Todo(Math.random(), text)];
    });
  }
  
  const todo = new Todo(Math.random(), "Have to read React");
  return (
    <div>
      <h3>Todo App</h3>
      <AddTodo onAddTodo={addTodo}></AddTodo>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
