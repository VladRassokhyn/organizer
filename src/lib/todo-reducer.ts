import * as actionTypes from './actionTypes';
import {Reducer} from "redux";
import {TTodosState, TTodoActions} from '../types'

const initialState: TTodosState = {
    todos: []
}

const todoReducer: Reducer<TTodosState, TTodoActions> = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
                return {
                    ...state,
                    todos: [...state.todos,
                        {
                            id: state.todos.length,
                            text: action.text,
                            importance: action.importance,
                            isOpenSubMenu: false
                        },
                    ]
                }
        case actionTypes.REMOVE_TODO:
                return {
                    ...state,
                    todos: state.todos.filter(t => t.id !== action.id)
                }
        case actionTypes.OPEN_TODO_SUB_MENU:
                return {
                    ...state,
                    todos: state.todos.map(t => {
                        if (t.id === action.id) {
                            return {
                                ...t,
                                isOpenSubMenu: true
                            }
                        } else {
                            return {
                                ...t,
                                isOpenSubMenu: false
                            }
                        }
                    })
                }
        case actionTypes.CLOSE_TODO_SUB_MENU:
                return {
                    ...state,
                    todos: state.todos.map(t => {
                        if (t.id === action.id) {
                            return {
                                ...t,
                                isOpenSubMenu: false
                            }
                        } else {
                            return t
                        }
                    })
                }

        default:
            return state;
    }
}

export default  todoReducer;