import { useReducer, useCallback, useRef,  } from 'react';

export const initState = {
  inputs: {
    id: '',
    title: '',
    desc: '',
    isDone: false
  },
  todos: [
    { id: 1, title: 'To Do 1', desc: 'To Do 1...', isDone: false }, 
    { id: 2, title: 'To Do 2', desc: 'To Do 2...', isDone: false },
  ]
}

function reducer(state, action) {

  switch(action.type) {
    case 'ON_CHANGE' : 
      return {
        ...state, 
        inputs: {
          ...state.inputs,
          [action.name]: action.value
      }
    };
    case 'ON_CREATE' : 
      return {
        ...state,
        inputs: initState.inputs,
        todos: state.todos.concat(action.inputs)
      };
    default : return state;
  }
}

function useToDo(initState) {
  const [ form, dispatch ] = useReducer(reducer, initState);
  const { inputs, todos } = form;
  const nextId = useRef(3);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'ON_CHANGE',
      name, value
    });
  }, []);

  const onCreate = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'ON_CREATE',
      inputs: {
        ...inputs,
        id: nextId.current
      }
    });
    nextId.current++;
  }, [inputs]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'ON_TOGGLE',
      id
    });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: 'ON_DELETE',
      state: form,
      id
    });
  }, [form]);

  return [ form, onChange, onCreate, onToggle, onDelete ]
}

export default useToDo;