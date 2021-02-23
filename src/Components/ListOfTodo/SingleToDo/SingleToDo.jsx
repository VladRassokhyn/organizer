import s from "../ListOfTodo.module.css";
import deleteIcon from "../../../img/trash.svg";
import editIcon from "../../../img/edit.svg";

const SingleToDo = (props) => {

    let handleChange = () => {
        props.change(true);
    }

    return (
        <div className={s.container}>
            <div className={s.fontContainer} onDoubleClick={!props.doubleClickEdit ? handleChange : null}>
                <h1 className={s.todoFont}>{props.text}</h1>
            </div>
            <button onClick={props.delete}><img src={deleteIcon} alt=''/></button>
            <button onClick={handleChange}><img src={editIcon} alt=''/></button>
        </div>
    )
}

export default SingleToDo;