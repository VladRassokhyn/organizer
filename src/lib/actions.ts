import * as actionTypes from './actionTypes'

export const addTodo = (text: string, importance: string) => {
    return {
        type: actionTypes.ADD_TODO,
        text,
        importance
    }
}
export const removeTodo = (id: number) => ({type: actionTypes.REMOVE_TODO, id})
export const openTodoSubMenu = (id:number) => ({type: actionTypes.OPEN_TODO_SUB_MENU, id})
