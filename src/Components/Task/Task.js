import React from "react";
import "./Task.css";

function Task({item, text, onChangeCompleted, deleteConfirm}) {

    return (
        <div className="task">
            <div className={item.isCompleted ? 'task_item_checked' : "task_item_nonchecked"} >
                <input type="checkbox" className="chk" checked={item.isCompleted} onChange={e => {
                    onChangeCompleted({...item, isCompleted: e.target.checked});
                }} />
                {text} 
            </div>
            <button className="Xbutton" onClick={() => deleteConfirm(item)}>x</button>
        </div>
    )
}


export default Task;
