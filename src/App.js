import React, { useEffect } from 'react';
import './App.css';

//hooks
import useToDo, { initState } from './hooks/useToDo';

//components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [ form, { handler }, element ] = useToDo(initState);
  const { inputs, todos } = form;
  useEffect(() => {
    element.current.focus();
  },[]);
  
  return (
    <div className='App'>
      <Form 
        onCreate={handler.onCreate} 
        onChange={handler.onChange}  
        inputs={inputs} 
        ref={element}
        
      />
      <ToDoList todos={todos} onDelete={handler.onDelete}  onToggle={handler.onToggle}/>
    </div>
  );
}

export default App;
