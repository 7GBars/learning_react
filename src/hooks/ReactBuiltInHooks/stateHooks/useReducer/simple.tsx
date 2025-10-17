import React, { Reducer, useReducer } from 'react';

type TSimpleUseReducerProps = {};

type State = {
  count: number;
};

type Action =
  | { type: typeof ACTIONS.INCREMENT }
  | { type: typeof ACTIONS.DECREMENT };

export const SimpleUseReducer: React.FC<TSimpleUseReducerProps> = ({}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => {
        //ts-ignore
        dispatch({ type: ACTIONS.DECREMENT })
      }}>-
      </button>
      <button onClick={() => {
        //ts-ignore
        dispatch({ type: ACTIONS.INCREMENT })
      }}>+
      </button>
      <span>{state.count}</span>
    </>
  );
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT: {
      return { count: state.count + 1 }
    }
    case ACTIONS.DECREMENT: {
      return { count: state.count - 1 }
    }
    default:
      return state;
  }
}

const initialState: State = {
  count: 0
}

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
} as const;
