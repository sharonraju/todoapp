import React from "react";

function TodoItem(props) {
    const stylingpart = {
        color: "grey",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type = "checkbox" 
                    checked = {props.item.completed} 
                    onChange = {() => props.handlefunc(props.item.id)}/>
            <p style={props.item.completed ? stylingpart : null}>{props.item.text}</p>

        </div>
    )
}
export default TodoItem;