import { useState, ChangeEvent } from 'react';

interface Todo {
  id: number;
  text: string;
}

function createInitialTodos(): Todo[] {
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: `Item ${i + 1}`,
    });
  }
  return initialTodos;
}

export function RecreatingInitialState() {
  const [todos, setTodos] = useState<Todo[]>(() => createInitialTodos());
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    setText('');
    setTodos([
      {
        id: todos.length,
        text: text,
      },
      ...todos,
    ]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}



export function AvoidingRecreatingInitialState() {
  const [todos, setTodos] = useState<Todo[]>(() => createInitialTodos());
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    setText('');
    setTodos([
      {
        id: todos.length,
        text: text,
      },
      ...todos,
    ]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}



