import React from "react";
import { useState } from "react"; 
import "./Form.css";

function Form({ onAdd }) {

    const [ text, setText ] = useState("");

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            ((text.length < 54) && (text.length > 0)) && onAdd(text);
            console.log(text.length);
            (text.length < 54) && setText("");
        }}>
            <div className="title">Task</div>
            <input value={text} className="input-text" placeholder="Write here" onChange={e => { 
                setText(e.target.value)
            }} />   
            <button className="onAdd" >Add</button>
            {text.length >= 54 && <div className="errorMessage">Task content can contain max 54 characters.</div>}
        </form>
    )
}

export default Form;