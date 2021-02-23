import React, {useState} from 'react';
import InputForm from "./InputForm/InputForm";
import ListOfTodo from "./ListOfTodo/ListOfTodo";
import s from './Container.module.css'

const Container = () => {

    let [toDoList, setToDo] = useState([]);
    let [doubleClickEdit, setDoubleClickEdit] = useState(true)
    let [darkMode, setDarkMode] = useState(false);

    let css = 'html { filter: invert(90%)}';

    let changeDoubleClickEdit = () => {
        setDoubleClickEdit(!doubleClickEdit);
    }

    let changeDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={s.AppContainer}>
            <style media={darkMode ? 'screen' : 'none'}>
                {css}
            </style>
            <div className={s.left}>
                <div>
                    <h1>Double click <p>for edit mode</p></h1>
                    <input onChange={changeDoubleClickEdit} type="checkbox"/>
                </div>
                <div>
                    <h1>Dark mode</h1><input onChange={changeDarkMode} type="checkbox"/>
                </div>
            </div>
            <div className={s.container}>
                <InputForm setToDo={setToDo} toDoList={toDoList}/>
                <ListOfTodo toDoList={toDoList} setToDo={setToDo} doubleClickEdit={doubleClickEdit}/>
            </div>
            <div className={s.right}/>
        </div>
    )
}

export default Container;