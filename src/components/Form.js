import React, { useContext } from 'react';

import Button from './reUse';
import { UserState } from '../App';

const Form = () => {
  const [_state, { handler }, element ] = useContext(UserState);
  const { title, content } = _state.inputs;
  const { onChange, onCreate } = handler
  
  return(
    <form action="" className='container'>
      <div>
        <div>
          <input type="text" placeholder='할 일' name='title' onChange={onChange} value={title} ref={element}/>
        </div>
        <div>
          <input type="text" placeholder='내용' name='content' onChange={onChange} value={content}/>
        </div>
      </div>
      <Button text='등록' onClick={onCreate}/>
    </form>
  );
};

export default React.memo(Form);