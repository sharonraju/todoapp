import React from "react";

function Joke(props) {
    return(
        <div>
            <h3 style={{display:props.question ? "black":"none"}}>Question: {props.question}</h3>
            <h4 style={{color:!props.question && "red"}}>Answer: {props.answer}</h4>
        </div>
    )
    
}
export default Joke;