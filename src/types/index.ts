export type TTodoActions = TAddTodo & TRemoveTodo & TOpenTodoSubMenu & TCloseTodoSubMenu

export type TTodo = {
    id: number
    text: string
    importance: string
    isOpenSubMenu: boolean
}

export type TTodosState = {
    todos: Array<TTodo>
}

type TAddTodo = { type: string, text: string, importance: string}
type TRemoveTodo = { type: string, id: number }
type TOpenTodoSubMenu = { type: string, id: number }
type TCloseTodoSubMenu = { type: string, id: number }
