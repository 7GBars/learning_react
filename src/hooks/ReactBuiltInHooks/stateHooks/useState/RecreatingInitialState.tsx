import * as React from 'react';

interface Todo {
  id: number;
  text: string;
}

function createInitialTodos(): Todo[] {
  debugger
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + Math.random() * 10)
    });
  }
  return initialTodos;
}

interface TUseStateSimpleProps {}

export const RecreatingInitialState: React.FC<TUseStateSimpleProps> = ({}) => {
  const [todos, setTodos] = React.useState<Todo[]>(createInitialTodos()); // а тут createInitialTodos(), то есть результат её вызова.
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

export const WithoutRecreatingInitialState: React.FC<TUseStateSimpleProps> = ({}) => {
  const [todos, setTodos] = React.useState<Todo[]>(createInitialTodos); // В этом примере передаётся функция инициализации, поэтому функция createInitialTodos выполняется только во время инициализации.
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