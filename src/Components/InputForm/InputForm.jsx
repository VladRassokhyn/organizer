import React, {useState} from 'react';
import s from './InputForm.module.css';

const InputForm = (props) => {

    let [inputValue, setInputValue] = useState('');

    let handleChange = (e) => {
        setInputValue(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        props.setToDo([...props.toDoList, {text: inputValue, id: props.toDoList.length}]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit} className={s.inputForm}>
            <input onChange={handleChange} value={inputValue} className={s.input}/>
            <button className={s.addButton}>Add task</button>
        </form>
    )
}

export default InputForm;