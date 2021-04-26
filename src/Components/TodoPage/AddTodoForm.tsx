import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../lib/actions";
import {Field, Form} from "react-final-form";
import CloseIcon from '@material-ui/icons/Close';
import {
    Button,
    FormControl,
    FormControlLabel,
    Grid, IconButton,
    Radio,
    RadioGroup, Snackbar,
    TextField
} from "@material-ui/core";

export const AddTodoForm = () => {

    const [radioValue, setRadioValue] = useState('Важно');
    const [openError, setOpenError] = useState(false);
    const dispatch = useDispatch()

    const onSubmit = (formData: { text: string, importance: string }) => {
        if (formData.text?.length >= 1) {
            dispatch(addTodo(formData.text, radioValue))
            formData.text = '';
            setRadioValue('Важно');
        } else {
            setOpenError(true)
        }
    }

    const closeError = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    };

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
                        <Grid item xs={6}>
                            <Field name="text">
                                {props => (
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        multiline={true}
                                        label="Добавить в список"
                                        {...props.input}
                                    />
                                )}
                            </Field>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                style={{width: '100%'}}
                                type="submit"
                                color="primary"
                                size="small"
                                className={''}
                            >Добавить</Button>
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl component="fieldset">
                                <RadioGroup row={true} name="importance" value={radioValue} onChange={handleChange}>
                                    <FormControlLabel value="Важно" control={<Radio style={{color: 'red'}}/>}
                                                      label="Важно"/>
                                    <FormControlLabel value="Средне" control={<Radio style={{color: 'green'}}/>}
                                                      label="Средне"/>
                                    <FormControlLabel value="Неважно" control={<Radio style={{color: 'grey'}}/>}
                                                      label="Неважно"/>
                                </RadioGroup>
                            </FormControl>


                        </Grid>
                    </Grid>

                </form>
            )}
        </Form>

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={openError}
            autoHideDuration={3000}
            onClose={closeError}
            message="Поле не может быть пустым"
            action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={() => setOpenError(false)}>
                        Закрыть
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenError(false)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />

    </div>
}