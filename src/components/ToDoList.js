import React, { useContext } from 'react';
import { UserState } from '../App';
import Button from './reUse';

const ToDo = React.memo(({ title, content, isDone, id }) => {
  const [ _state, { handler } ]= useContext(UserState);
  const { onDelete, onToggle } = handler;
  
  return (
    <li onClick={() => { onToggle(id) }} style={isDone ? { textDecoration: 'line-through', cursor: 'pointer' } : { color: 'black ',  cursor: 'pointer' }}>
      <h1>{title}</h1>
      <span>{content}</span>
      <Button text='삭제' onClick={() => { onDelete(id) }} />
    </li>
  );
});

const ToDoList = () => {
  const [_state ]= useContext(UserState);

  return(
    <div>
      <ul>
        {_state.todos.map(data => <ToDo title={data.title} content={data.content} isDone={data.isDone} key={data.id} id={data.id} />)}
      </ul>
    </div>
  );  
}

export default React.memo(ToDoList);