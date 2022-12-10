import React from 'react'
import "./Form.css";

function Input({text, setText}) {
    return (
        <div className='inputStyle'>
            <div className="title">Task</div>
            <input style={{"borderColor": text.length >= 55 ? "#FF3104": "yellow"}} value={text} className="input-text" placeholder="Write here" onChange={e => { 
                setText(e.target.value)
            }} />
            {text.length >= 55 && <div className="errorMessage">Task content can contain max 54 characters.</div>}
        </div>
    )
}

export default Input;