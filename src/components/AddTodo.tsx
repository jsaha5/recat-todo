import React, {useState} from 'react';
import './AddTodo.css';
interface AddTodoProps {
    onAddTodo: (text:string) => void;
}

const AddTodo = (pros: AddTodoProps) => {

    const [text, setText] = useState('');
    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    const addTodoHandler = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(text);
        pros.onAddTodo(text);
        setText('');
    }
    return (
        <div className="add-todo">
            <form>
                <div className ="add-todo-controls">
                    <label>Add Todo</label>
                    <input type="text" onChange= {inputChangeHandler} value={text}></input>
                </div>
                <button type="submit" onClick={addTodoHandler}>Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;