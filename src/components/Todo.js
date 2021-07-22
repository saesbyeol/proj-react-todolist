import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import swal from 'sweetalert';



function Todo({todo, toggleComplete, removeTodo}){

    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    return (
        <ListItem style={{color: "white", display: "flex"}}>
            <Checkbox checked={todo.completed} onClick={handleCheckboxClick}/>
            <Typography
                variant="body1"
                style={{
                    color: "white",
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}


export default Todo;