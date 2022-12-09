import React from "react";
import "./Completed.css";

function Completed({onHide}) {

    return (
        <div className="completed">
            <input type= "checkbox" onChange={e => {
                if(e.target.checked){
                    onHide('checked');
                } else {
                    onHide('nonChecked');
                }
            }} />
            <span className="hideCompleted">Hide completed</span> 
        </div>
    )
}

export default Completed;