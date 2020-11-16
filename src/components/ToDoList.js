import React from 'react';
import { Button } from './Form';

const ToDo = React.memo(({ todos, onToggle, onDelete }, ref) => {
  return (
    <li onClick={onToggle}>
      <h1>{todos.title}</h1>
      <span>{todos.desc}</span> &nbsp;
      <Button onClick={ () => { onDelete(todos.id) } } text='삭제' />
    </li>
  );
});

const ToDoList = ({ todos, onDelete }) => {
  return(
    <div>
      <ul>
        {todos.map(v => <ToDo todos={v} key={v.id} onDelete={onDelete} />)}
      </ul>
    </div>
  );  
}

export default React.memo(ToDoList);