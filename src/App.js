import React from 'react';
import './App.css';
//hooks
import useToDo, { initState } from './hooks/useToDo';

//components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

export const UserDispatch = React.createContext(null);

function App() {
  const [ form, onChange, onCreate, onToggle, onDelete ] = useToDo(initState);
  const { inputs, todos } = form;

  return (
    <UserDispatch.Provider value={useToDo(form)}>
      <div className='App'>
        <Form /*onCreate={onCreate} onChange={onChange} inputs={inputs}*//>
        <ToDoList /*todos={todos}*//>
      </div>
    </UserDispatch.Provider> 
  );
}

export default App;
