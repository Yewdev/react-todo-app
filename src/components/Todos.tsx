import React, { useState, useEffect } from 'react';
import { ITodo } from '../types';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const getData = () => JSON.parse(localStorage.getItem('todos') || '');

const Todos: React.FC = () => {
  const localTodos = localStorage.getItem('todos') ? getData() : [];
  const [todos, setTodos] = useState<ITodo[]>(localTodos);
  const countActive: number = todos.filter((i) => i.completed === false).length;
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-[30rem] bg-white/95 p-10 rounded-lg flex flex-col gap-8">
      <CreateTodo setTodos={setTodos} todosLength={todos.length} />

      <TodoList todos={todos} setTodos={setTodos} />
      <div className="flex justify-between items-center">
        <span className="text-xs ">{countActive} items left</span>
        <div className="flex justify-between items-center text-sm gap-2">
          <span className="">All</span>
          <span className="">Active</span>
          <span className="">Completed</span>
        </div>
        <span className="text-xs">Clear Completed</span>
      </div>
    </div>
  );
};

export default Todos;
