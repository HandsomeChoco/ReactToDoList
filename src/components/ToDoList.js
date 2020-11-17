import React from 'react';
import { Button } from './Form';

const ToDo = React.memo(({ todos, onToggle, onDelete }) => {
  const isDone = todos.isDone;
  return (
    <li onClick={() => { onToggle(todos.id) }} style={{ cursor: 'pointer', textDecoration: isDone ? 'line-through' : 'none' }}>
      <h1>{todos.title}</h1>
      <span>{todos.desc}</span> &nbsp;
      <Button onClick={ () => { onDelete(todos.id) } } text='삭제' />
    </li>
  );
});

const ToDoList = ({ todos, onDelete, onToggle }) => {
  return(
    <div>
      <ul>
        {todos.map(v => <ToDo todos={v} key={v.id} onDelete={onDelete} onToggle={onToggle} />)}
      </ul>
    </div>
  );  
}

export default React.memo(ToDoList);