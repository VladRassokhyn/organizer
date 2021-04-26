import React from 'react';
import {Route} from "react-router-dom";
import {TodoListPage} from "../Components/TodoListPage";
import {TRoute} from "../types";

export const routes:Array<TRoute> = [
    {
        path: "/todo-list",
        component: TodoListPage
    },
]

export const Routes:React.FC<TRoute> = (route) => {
    return <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes}/>
        )}
    />
}