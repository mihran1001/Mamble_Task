import React from "react";
import Task from '../Task/Task';

function TaskList({state, onDelete, onChangeCompleted}) {
    return (
        state.map(item => { 
            return (
                !item.isHidden && <Task item={item} key={item.id} text={item.text} onDelete={onDelete} onChangeCompleted={onChangeCompleted} />
            )
        })
    )
}

export default TaskList;