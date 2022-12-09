import React from "react";
import "./Task.css";

function Task({item, text, onDelete, onChangeCompleted}) {

    return (
        <div>
            <input type="checkbox" className="chk" checked={item.isCompleted} onChange={e => {
                onChangeCompleted({...item, isCompleted: e.target.checked});
            }} />
            {text}
            <button className="Xbutton" onClick={() => onDelete(item)}>x</button>
        </div>
    )
}

export default Task;