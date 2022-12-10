import React from "react";
import Task from '../Task/Task';

function TaskList({state, onChangeCompleted, deleteConfirm}) {
    return (
        state.map(item => { 
            return (
                !item.isHidden && <Task item={item} key={item.id} text={item.text} deleteConfirm={deleteConfirm} onChangeCompleted={onChangeCompleted} />
            )
        })
    )
}

export default TaskList;