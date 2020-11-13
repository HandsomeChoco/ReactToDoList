import { useReducer, useCallback } from 'react';

export const initState = {
  inputs: {
    title: '',
    content: '',
    isDone: ''
  },
  todos: [
    { id: 1, title: 'To Do 1', content: 'To Do 1...', isDone: false }, 
    { id: 2, title: 'To Do 2', content: 'To Do 2...', isDone: false },
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'ON_CHANGE' : 
      return {
        ...state, 
        inputs: {
        [action.name]: action.value
      }
    }
  }
  return state;
}

function useToDo(initState) {
  const [ form, dispatch ] = useReducer(reducer, initState);
  const { inputs, todos } = form;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'ON_CHANGE',
      [name]: value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'ON_CREATE',
      inputs: inputs
    });
  }, [inputs]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'ON_TOGGLE',
      id
    });
  }, [form]);

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