import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, TextField, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addTodo} from "../lib/actions";

export const TodoListPage = () => {

    const dispatch = useDispatch()

    const onSubmit = (formData:{text: string}) => {
        dispatch(addTodo(formData.text))
        console.log(formData)
    }

    return <div>
        <Form onSubmit={onSubmit}>
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Field name="text">
                            {props => (
                                <TextField
                                    variant="outlined"
                                    multiline={true}
                                    style={{width: "60%"}}
                                    label="Добавить в список"
                                    {...props.input}
                                />
                            )}
                        </Field>

                        <Button
                            type="submit"
                            color="primary"
                            size="small"
                            className={''}
                        >Добавить</Button>
                    </Grid>

                </form>
            )}
        </Form>
    </div>
}