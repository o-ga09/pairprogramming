import { ChangeEvent, useState } from 'react';
import Todo from './lib/components/Todo';

function App() {
  type Todo = {
    id: number;
    name: string;
    isFinished: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>([]);

  let newTodos = [] as Todo[];

  const handleClick = () => {
    setTodos(newTodos);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    // console.log(title);
    newTodos = [...todos, { id: 1, name: title, isFinished: false }];
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo title={todo.name} isFinished={todo.isFinished} />
          </li>
        ))}
      </ul>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleClick}>add Todo</button>
    </>
  );
}

export default App;
