import React, {useState} from 'react';
import s from './ChangeTodoForm.module.css'


const ChangeTodoForm = (props) => {

    let [inputValue, setInputValue] = useState(props.text);

    let handleChange = (e) => {
        setInputValue(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        props.setToDo(props.toDoList.map(todo => {
            if (todo.id === props.todo.id)
                todo.text = inputValue;
            return todo;
        }))
        props.change(false)
    }

    return (
        <form onSubmit={handleSubmit} onMouseLeave={handleSubmit} className={s.inputForm}>
            <input className={s.input} onChange={handleChange} value={inputValue}/>
            <button>OK</button>
        </form>
    )
}

export default ChangeTodoForm;