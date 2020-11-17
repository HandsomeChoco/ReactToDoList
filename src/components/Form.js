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

export const Input = React.memo(
  React.forwardRef(({ onChange, value, attributes}, ref) => {
    const { placeholder, style, type, name } = attributes;

    return (
      <input 
        type={type ? type : 'text'}
        style={style ? style : null} 
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        ref={ref ? ref : null }
      />
    );
  }
));

const Form = React.forwardRef(({ onCreate, onChange, inputs }, ref) => {
  const { title, desc, id, isDone } = inputs;

  return(
    <form action="" className='container'>
      <div>
        <div>
          <Input onChange={onChange}  value={title} attributes={inputTitle} ref={ref}/>
        </div>
        <div>
          <Input onChange={onChange}  value={desc} attributes={inputDesc}/>
        </div>
      </div>
      <Button text='등록' onClick={onCreate} />
    </form>
  );
});



export default React.memo(Form);