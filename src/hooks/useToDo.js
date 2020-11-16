import { useReducer, useCallback, useRef } from 'react';

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
    { id: 3, title: 'To Do 3', desc: 'To Do 3...', isDone: false }, 
    { id: 4, title: 'To Do 4', desc: 'To Do 4...', isDone: false },
    
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
    case 'ON_RESET' : 
      return {
        ...state,
        inputs: action.inputs
      };
    case 'ON_CREATE' : 
      return {
        ...state,
        todos: state.todos.concat(action.inputs)
      };
    case 'ON_DELETE' :
      return {
        ...state,
        todos: state.todos.filter(data => data.id!==action.id)
      }
    default : return state;
  }
}

function useToDo(initState) {
  const [ form, dispatch ] = useReducer(reducer, initState);
  const { inputs, todos } = form;
  const nextId = useRef(todos.length+1);
  const element = useRef();

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
    onReset();
    element.current.focus();
    nextId.current++;
  }, [inputs]);

  const onReset = useCallback(() => {
    dispatch({
      type: 'ON_RESET',
      inputs: initState.inputs
    });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'ON_TOGGLE',
      id
    });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: 'ON_DELETE',
      id
    });
  }, [form]);

  const handler = {
    onChange,
    onCreate,
    onReset,
    onToggle,
    onDelete
  };

  return [ form, { handler }, element ]
}

export default useToDo;