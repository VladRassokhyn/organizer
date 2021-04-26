export type TTodoActions = TAddTodo

export type TTodo = {
    id: number,
    text: string
}

export type TTodosState = {
    todos: Array<TTodo> | null
}

type TAddTodo = {type: string, todo: TTodo}