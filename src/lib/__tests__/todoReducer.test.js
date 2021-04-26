import * as actionTypes from '../actionTypes';
import todoReducer from "../todo-reducer";

describe('tests for todo reducer', () => {

    it('ADD_TODO must add todo to state', () => {
        const state = {
            todos: []
        }

        const action = {type: actionTypes.ADD_TODO, text:'1', importance:'2'}

        expect(todoReducer(state, action).todos).toHaveLength(1)
    })

    it('REMOVE_TODO must remove todo from state', () => {
        const state = {
            todos: [{id: 1}, {id: 2}, {id: 3}]
        }

        const action = {type: actionTypes.REMOVE_TODO, id: 2}

        expect(todoReducer(state, action)).toEqual({
            ...state,
            todos: [{id: 1}, {id: 3}]
        })
    })

    it("CLOSE_TODO_SUB_MENU must close todo sub menu", ()=> {
        const state = {
            todos: [
                {
                    id:1,
                    isOpenSubMenu: true
                },
                {
                    id:2,
                    isOpenSubMenu: true
                },
                {
                    id:3,
                    isOpenSubMenu: true
                },
            ]
        }

        const action = {type: actionTypes.CLOSE_TODO_SUB_MENU, id: 2}

        expect(todoReducer(state, action)).toEqual({
            todos: [
                {
                    id:1,
                    isOpenSubMenu: true
                },
                {
                    id:2,
                    isOpenSubMenu: false
                },
                {
                    id:3,
                    isOpenSubMenu: true
                },
            ]
        })
    })

    it("OPEN_TODO_SUB_MENU must open current todo sub menu", ()=> {
        const state = {
                todos: [
                    {
                        id:1,
                        isOpenSubMenu: false
                    },
                    {
                        id:2,
                        isOpenSubMenu: false
                    },
                    {
                        id:3,
                        isOpenSubMenu: false
                    },
                ]
            }

        const action = {type: actionTypes.OPEN_TODO_SUB_MENU, id:2}

        expect(todoReducer(state, action)).toEqual({
            todos: [
                {
                    id:1,
                    isOpenSubMenu: false
                },
                {
                    id:2,
                    isOpenSubMenu: true
                },
                {
                    id:3,
                    isOpenSubMenu: false
                },
            ]
        })
    })

    it("when open todo sub menu, others must closes", ()=> {
        const state = {
            todos: [
                {
                    id:1,
                    isOpenSubMenu: true
                },
                {
                    id:2,
                    isOpenSubMenu: false
                },
                {
                    id:3,
                    isOpenSubMenu: false
                },
            ]
        }

        const action = {type: actionTypes.OPEN_TODO_SUB_MENU, id:2}

        expect(todoReducer(state, action)).toEqual({
            todos: [
                {
                    id:1,
                    isOpenSubMenu: false
                },
                {
                    id:2,
                    isOpenSubMenu: true
                },
                {
                    id:3,
                    isOpenSubMenu: false
                },
            ]
        })
    })
})