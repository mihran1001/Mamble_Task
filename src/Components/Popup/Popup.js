import React from 'react';
import './Popup.css';

function Popup({setConfirm, onDelete, state}) {
    return (<div className='popup'>
        <div className='confirmation'>Are you sure you want to delete?</div>
        <div className='actions'>
            <button onClick={() => {
                setConfirm(false);
                state.forEach(elem => {
                    if(elem.deleteConfirm){
                        onDelete(elem);
                    }
                })
            }}>Yes</button>
            <button onClick={() => setConfirm(false)}>No</button>
        </div>
    </div>)
}; 

export default Popup;