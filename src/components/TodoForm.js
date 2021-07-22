import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function TodoForm({addTodo}){

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false 
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trim()){
            // EACH TODO HAS IT'S OWN ID ASSIGNED BY UUID NPM PACKAGE
            addTodo({...todo, id: uuid.v4});
            // RESET TASK INPUT
            setTodo({...todo, task:""});
        }
    }

    return(
        <form styles={{color: "white"}} className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button style={{color: "white" }} type="submit">submit</Button>
        </form>
    );

}

export default TodoForm;