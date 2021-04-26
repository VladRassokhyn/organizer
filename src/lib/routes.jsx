import React from 'react';
import {Route} from "react-router-dom";
import {TodoListPage} from "../Components/TodoPage/TodoListPage";

export const routes = [
    {
        path: "/todo-list",
        component: TodoListPage
    },
]

export const Routes = (route) => {
    return <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes}/>
        )}
    />
}