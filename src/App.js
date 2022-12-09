import React from 'react';
import "./App.css";
import { useState } from 'react';
import TaskList from './Components/TaskList/TaskList.js';
import Form from './Components/Form/Form.js';
import Completed from './Components/Completed/Completed';
import Popup from './Components/Popup/Popup';

function App() {

  const [state, setState] = useState([]);

  function onDelete(item) {
    setState(state.filter(elem => elem.id !== item.id))
  }


  function onChangeCompleted(item) {
      setState(state.map(elem => {
        if(elem.id === item.id){
          return item;
        }
        return elem;
      }))
  }

  function onAdd(text) {
    setState([...state, {
      id: Math.random(),
      text,
      isCompleted: false
    }]);
  }

  function onHide(x) {
    switch (x) {
      case "checked":
        setState(state.map(elem => {
          if(elem.isCompleted){
            elem.isHidden = true;
          }
          return elem;
        }))
        break;
      case "nonChecked":
        setState(state.map(elem => {
          if(elem.isHidden){
            elem.isHidden = false;
          }
          return elem;
        }))
        break;
    }

  }

  return (
    <div className='App'>
      <Completed state={state} setState={setState} onHide={onHide} />
      <Form onAdd={onAdd} />
      <TaskList onChangeCompleted={onChangeCompleted} state={state} onDelete={onDelete} />
      {!state.length && <div className='emptyListText'><div className='firstLine'>Your life is a blank. You write on it.</div>
        <div className='secondLine'>So start by adding your tasks here.</div></div>}
    </div>
  );
}

export default App;
