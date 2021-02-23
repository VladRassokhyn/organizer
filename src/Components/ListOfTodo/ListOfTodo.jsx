import React, {useState} from 'react';
import s from './ListOfTodo.module.css'
import ChangeTodoForm from "./ChangeTodoForm/ChangeTodoForm";
import SingleToDo from "./SingleToDo/SingleToDo";

const SingleToDoContainer = (props) => {

    let [isChangeMode, setIsChangeMod] = useState(false);

    let handleDelete = () => {
        props.setToDo(props.toDoList.filter(todo => todo.id !== props.todo.id))
    }

    let handleChange = (value) => {
        setIsChangeMod(value);
    }

    if (!isChangeMode) {
        return (
            <>
                <SingleToDo text={props.todo.text} delete={handleDelete} change={handleChange} doubleClickEdit={props.doubleClickEdit}/>
            </>
        )
    } else {
        return (
            <>
                <ChangeTodoForm text={props.todo.text} change={handleChange} {...props}/>
            </>
        )
    }
}

const ListOfTodo = (props) => {
    return (
        <div className={s.list}>
            {props.toDoList.map(todo => <SingleToDoContainer key={todo.id} todo={todo} {...props}/>)}
        </div>
    )
}

export default ListOfTodo;