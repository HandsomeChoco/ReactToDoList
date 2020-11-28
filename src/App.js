import React from 'react';
import './App.css';

//hooks
import useToDo, { initState } from './hooks/useToDo';

//components
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { StyledBtn } from './components/reUse';

export const UserState = React.createContext(null);

function App() {
  return (
    <UserState.Provider value={useToDo(initState)}>
      <div className="App">
        <Form />
        <ToDoList />
      </div>
      <StyledBtn color="red"></StyledBtn>
    </UserState.Provider>
  );
}

export default App;
