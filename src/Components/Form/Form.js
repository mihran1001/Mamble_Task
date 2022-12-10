import React from "react";
import { useState } from "react"; 
import "./Form.css";
import Input from "./Input";

function Form({ onAdd }) {

    const [ text, setText ] = useState("");

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            ((text.length < 55) && (text.length > 0)) && onAdd(text);
            (text.length < 55) && setText("");
        }}>
            <Input text={text} setText={setText} />
            <button className="onAdd" >Add</button>
        </form>
    )
}

export default Form;