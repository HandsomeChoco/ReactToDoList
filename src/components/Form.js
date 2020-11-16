import React, { useContext } from 'react';
import { UserDispatch } from '../App';

const inputTitle = {
  placeholder: '할 일',
  name: 'title'
}

const inputDesc = {
  placeholder: '간단한 설명',
  name: 'desc'
}

export const Button = React.memo(({ style, onClick, text }) => {
  return <button style={style} onClick={onClick}>{text}</button>
});

export const Input = React.memo(({ onChange, value, attributes}) => {
  const { placeholder, style, type, name } = attributes;

  return (
    <input 
      type={type ? type : 'text'}
      style={style ? style : null} 
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
    />
  );
});

const Form = (/*{ onCreate, onChange, inputs }*/) => {
  // console.log(UserDispatch)
  // const { title, desc, id, isDone } = inputs;
  const dispatch = useContext(UserDispatch);
  console.log(dispatch)
  return(
    <form action="" className='container'>
      <div>
        <div>
          <Input /*onChange={onChange}  value={title}*/ attributes={inputTitle}/>
        </div>
        <div>
          <Input /*onChange={onChange}  value={desc}*/ attributes={inputDesc}/>
        </div>
      </div>
      <Button /*text='등록' onClick={onCreate}*/ />
    </form>
  );
}

export default React.memo(Form);