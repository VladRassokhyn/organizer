import React from 'react';
import {AddTodoForm} from './AddTodoForm';
import {useSelector} from "../../lib";
import {SingleTodo} from './SingleTodo';
import {
    createStyles, Grid,
    List,
    ListSubheader,
    makeStyles,
    Theme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export const TodoListPage = () => {

    const classes = useStyles();
    const todos = useSelector(state => state.todo.todos)
    const [open, setOpen] = React.useState(true);

    return <div>
        <AddTodoForm/>
        <Grid
            container
            justify="center"
            alignItems="center"
        >
            <Grid item xs={6}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Nested List Items
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    {todos.map((todo, index) => {
                        return <SingleTodo key={index} todo={todo}/>
                    })}
                </List>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    </div>

}