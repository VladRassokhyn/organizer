import React, {useState} from 'react';
import {TTodo} from "../../types";
import {Collapse, Grid, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



export const SingleTodo: React.FC<{ todo: TTodo }> = ({todo}) => {

    const [isOpenSubList, setIsOpenSubList] = useState(false)

    let importanceColor = '';
    switch (todo.importance) {
        case "Важно":
            importanceColor = 'red';
            break;
        case "Средне":
            importanceColor = 'green';
            break;
        case "Неважно":
            importanceColor = 'grey';
            break;
    }


    return <div>
        <ListItem button onClick={() => setIsOpenSubList(!isOpenSubList)}>
            <ListItemIcon>
                <Brightness1Icon style={{color: importanceColor}}/>
            </ListItemIcon>
            <ListItemText primary={todo.text}/>
            {isOpenSubList ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>

        <Collapse in={isOpenSubList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem>

                    <ListItem button className={'todo-list-item'}>
                        <CheckCircleOutlineIcon/>
                    </ListItem>
                    <ListItem button className={'todo-list-item'}>
                        <CreateIcon/>
                    </ListItem>
                    <ListItem button className={'todo-list-item'}>
                        <DeleteForeverIcon/>
                    </ListItem>

                </ListItem>
            </List>
        </Collapse>

    </div>
}