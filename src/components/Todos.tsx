import { useState, useEffect } from 'react';
import { ITodo } from '../types';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

const localTodos = () => JSON.parse(localStorage.getItem('todos') || '');

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(localTodos);
  const limitTodos: number = 10;
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-[30rem] bg-white/95 p-10 rounded-lg flex flex-col gap-8">
      <CreateTodo setTodos={setTodos} todosLength={todos.length} />
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            currentTodos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <span className="text-xs tracking-widest">{`${todos.length}/${limitTodos}`}</span>
    </div>
  );
};

export default Todos;
