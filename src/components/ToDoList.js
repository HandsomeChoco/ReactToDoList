import React from 'react';
import { Button } from './Form';

const ToDo = React.memo(({ title, desc, isDone, onToggle, onDelete}) => {
    return (
      <li onClick={onToggle}>
        <h1>{title}</h1>
        <span>{desc}</span> &nbsp;
        <Button onClick={onDelete} text='삭제' />
      </li>
    );
});

const ToDoList = ({ todos }) => {
  return(
    <div>
      <ul>
        {todos.map(v => <ToDo title={v.title} desc={v.desc} isDone={v.isDone} key={v.id} />)}
      </ul>
    </div>
  );  
}

export default React.memo(ToDoList);