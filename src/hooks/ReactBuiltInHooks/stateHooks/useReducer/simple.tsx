import React, { Reducer, useReducer } from 'react';

type TSimpleUseReducerProps = {};

type State = {
  count: number;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' };

export const SimpleUseReducer: React.FC<TSimpleUseReducerProps> = ({}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => {
        //ts-ignore
        dispatch()
      }}>-
      </button>
      <button onClick={() => {
        //ts-ignore
        dispatch()
      }}>+
      </button>
      <span>{state.count}</span>
    </>
  );
}

const reducer = (state: State, action: Action) => {
  return { count: state.count + 1 }
}

const initialState: State = {
  count: 0
}

