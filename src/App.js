import React from 'react';
import "./App.css";
import { useState, useEffect } from 'react';
import TaskList from './Components/TaskList/TaskList.js';
import Form from './Components/Form/Form.js';
import Completed from './Components/Completed/Completed';
import Popup from './Components/Popup/Popup';

function App() {

  const [state, setState] = useState([]);

  const [confirm, setConfirm] = useState(false);

  
  
  useEffect(() => {
    setExistData()
  }, []);

  const setExistData = () => {
    const data = localStorage.getItem('taskList');

    if(data !== null){
      if(data.length) {
        setState(JSON.parse(data));
      }
    }
  }


  function deleteConfirm(item) {
    setConfirm(true);
    setState(state.map(elem => {
      if(elem.id === item.id){
        elem.deleteConfirm = true;
      }
      return elem;
    }));
  }

  function onDelete(item) {
    setState(state.filter(elem => elem.id !== item.id))
    localStorage.setItem('taskList', JSON.stringify(state.filter(elem => elem.id !== item.id)))
  }

  function onChangeCompleted(item) {
      setState(state.map(elem => {
        if(elem.id === item.id){
          return item;
        }
        return elem;
      }))
      localStorage.setItem('taskList', JSON.stringify(state.map(elem => {
        if(elem.id === item.id){
          return item;
        }
        return elem;
      })))
  }

  function onAdd(text) {
    setState([...state, {
      id: Math.random(),
      text,
      isCompleted: false,
      deleteConfirm: false,
      isHidden: false
    }]);
    localStorage.setItem('taskList', JSON.stringify([...state, {
      id: Math.random(),
      text,
      isCompleted: false,
      deleteConfirm: false,
      isHidden: false
    }]))
  }

  function onHide(position) {
    switch (position) {
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
    localStorage.setItem('taskList', JSON.stringify(state))
  }

  return (
    <div className='App'>
      <div>
        {(state.length !== 0) && <Completed onHide={onHide} />}
        <div>
          <Form onAdd={onAdd} />
          <div>
            <TaskList onChangeCompleted={onChangeCompleted} state={state} deleteConfirm={deleteConfirm} onDelete={onDelete} />
          </div>
        </div>
        {confirm && <Popup onDelete={onDelete} setConfirm={setConfirm} state={state} />}
        {!state.length && <div className='emptyListText'><div className='firstLine'>Your life is a blank. You write on it.</div>
          <div className='secondLine'>So start by adding your tasks here.</div></div>}
        {confirm && <div className='overlay' onClick={() => {setConfirm(false)}}></div>}
      </div>
    </div>
  );
}

export default App;
