import React from 'react';
import './App.css';
//hooks
import useToDo, { initState } from './hooks/useToDo';

//components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [ form, onChange, onCreate, onToggle, onDelete ] = useToDo(initState);
  const { inputs, todos } = form;
  return (
    <div className='App'>
      <Form/>
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
