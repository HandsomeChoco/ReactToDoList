import React from 'react';

const ToDo = ({ title, content, isDone, onToggle }) => {
    return (
      <li onClick={onToggle}>
        <h1>{title}</h1>
        <span>{content}</span>
      </li>
    );
}
const ToDoList = ({ todos }) => {
  return(
    <div>
      <ul>
        {todos.map(v => <ToDo title={v.title} content={v.content} isDone={v.isDone} key={v.id} />)}
      </ul>
    </div>
  );  
}

export default ToDoList;