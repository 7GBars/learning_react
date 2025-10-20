import React, { FormEvent, useCallback, useId, useMemo, useReducer, useState } from 'react';
import { nanoid } from 'nanoid';

type TTodoListUseReducerProps = {}

type State = Array<Todo>;

type Action =
  | { type: typeof ACTIONS.ADD, payload: { id: string, name: string, created: Date } }
  | { type: typeof ACTIONS.DELETE, payload: { id: string } }
  | { type: typeof ACTIONS.TOGGLE, payload: { id: string } };

export const TodoListUseReducer: React.FC<TTodoListUseReducerProps> = ({}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('name', name)
    dispatch({type: ACTIONS.ADD, payload: {name, id: nanoid(), created: new Date() }})
    setName('');
  }, [name]);

  const todos = useMemo(() => {
    return state.map(t => <div>{t.name}</div>)
  }, [state]);

  return (
    <form onSubmit={handleSubmit}>
      <input type={'text'} value={name} onChange={(e) => setName(e.target.value)}/>

      {todos}

      <button type="submit">Add Todo</button>
    </form>
  );
}


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD: {
      const newTodo: Todo = {...action.payload, status: 'in progress'};
      return [...state, newTodo]
    }

    default:
      return state;
  }
}

const initialState: State = []

const ACTIONS = {
  ADD: 'add',
  TOGGLE: 'toggle',
  DELETE: 'delete',
} as const;

type Todo = {
  id: string;
  name: string;
  created: Date;
  status: Status;
}
type Status = 'new' | 'in progress' | 'completed'