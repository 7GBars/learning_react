import React, { FormEvent, useCallback, useId, useMemo, useReducer, useState } from 'react';
import { nanoid } from 'nanoid';

import './styles/index.scss'


//region ==================== Components ====================
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
    return state.map(t => <Todo
      key={t.id}
      todo={t}
      onToggle={(data) => console.log('change', data)}
      onDelete={() => console.log('delete')}
    />)
  }, [state]);

  return (
    <form onSubmit={handleSubmit}>
      <input type={'text'} value={name} onChange={(e) => setName(e.target.value)}/>

      {todos}

      <button type="submit">Add Todo</button>
    </form>
  );
}

export const Todo: React.FC<TodoProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.name}</span>
      </label>
      <button
        type="button"
        onClick={(e) => {
          onDelete(todo.id)
        }}
        className="todo-delete-btn"
      >
        ×
      </button>
    </div>
  );
};
//endregion


//region ==================== Reducer ====================
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD: {
      const newTodo: Todo = {...action.payload, completed: false};
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
//endregion


//region ==================== TYPES ====================
type TTodoListUseReducerProps = {}

type State = Array<Todo>;

type Action =
  | { type: typeof ACTIONS.ADD, payload: { id: string, name: string, created: Date } }
  | { type: typeof ACTIONS.DELETE, payload: { id: string } }
  | { type: typeof ACTIONS.TOGGLE, payload: { id: string } };




interface TodoProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

type Todo = {
  id: string;
  name: string;
  created: Date;
  completed: boolean;
}

//endregion