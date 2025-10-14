import * as React from 'react';

interface Todo {
  id: number;
  text: string;
}

function createInitialTodos(): Todo[] {
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }
  return initialTodos;
}

interface TUseStateSimpleProps {}

export const RecreatingInitialState: React.FC<TUseStateSimpleProps> = ({}) => {
  const [todos, setTodos] = React.useState<Todo[]>(createInitialTodos());
  const [text, setText] = React.useState<string>('');

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]);
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}