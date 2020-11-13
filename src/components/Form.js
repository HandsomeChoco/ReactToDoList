import React from 'react';

const Button = ({ style, onClick, text }) => {
  return <button style={style} onClick={onClick}>{text}</button>
}

const Form = ({}) => {
  return(
    <form action="" className='container'>
      <div>
        <div>
          <input type="text" placeholder='할 일'/>
        </div>
        <div>
          <input type="text" placeholder='내용'/>
        </div>
      </div>
      <Button text='등록'/>
     
    </form>
  );
}

export default Form;