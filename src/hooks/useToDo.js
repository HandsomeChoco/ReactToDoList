import { useReducer, useCallback, useRef } from 'react';

export const initState = {
  inputs: {
    title: '',
    content: '',
    isDone: false
  },
  todos: [
    { id: 1, title: 'To Do 1', content: 'To Do 1...', isDone: false }, 
    { id: 2, title: 'To Do 2', content: 'To Do 2...', isDone: false },
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'ON_RESET' : 
      return {
        ...state, 
        inputs: action.inputs
      };
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
        todos: state.todos.concat(action.inputs)
      };
    case 'ON_DELETE' :
      return {
        ...state,
        todos: state.todos.filter(data => data.id!==action.id)
      };
    case 'ON_TOGGLE' : 
      return {
        ...state,
        todos: state.todos.map(data => 
          (data.id===action.id ? { ...data, isDone: !data.isDone } : { ...data })
        )
      }
    default : 
      return state;
    }
}

function useToDo(initState) {
  const [ form, dispatch ] = useReducer(reducer, initState);
  const { inputs } = form;

  const nextId = useRef(3);
  const element = useRef();

  const onReset = useCallback(() => {
    dispatch({
      type: 'ON_RESET',
      inputs: initState.inputs
    });
  }, [initState.inputs]);

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
    onReset();
    element.current.focus();
  }, [onReset, inputs]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'ON_TOGGLE',
      id,

    });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: 'ON_DELETE',
      id
    });
  }, []);

  const handler = {
    onChange,
    onCreate,
    onToggle,
    onDelete,
  }
  return [ form, { handler }, element];
}

export default useToDo;