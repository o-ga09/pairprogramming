import { SetStateAction, useState } from 'react';
import Todo from './lib/components/Todo';
import { Input, Text } from '@chakra-ui/react';

type Todo = {
  id: number;
  name: string;
  isFinished: boolean;
};

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = () => {
    setTodos([...todos, { id: 1, name: value, isFinished: false }]);
    setValue('');
  };

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => setValue(event.target.value);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo title={todo.name} isFinished={todo.isFinished} />
          </li>
        ))}
      </ul>
      <Text mb="8px">Value: {value}</Text>
      <Input value={value} onChange={handleChange} placeholder="Here is a sample placeholder" size="sm" />
      <button onClick={handleClick}>add Todo</button>
    </>
  );
}

export default App;
