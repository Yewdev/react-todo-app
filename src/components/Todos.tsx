import React, { useState, useEffect } from 'react';
import { ITodo } from '../types';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const getData = () => JSON.parse(localStorage.getItem('todos') || '');

const Todos: React.FC = () => {
  const localTodos = localStorage.getItem('todos') ? getData() : [];
  const [todos, setTodos] = useState<ITodo[]>(localTodos);
  const limitTodos: number = 10;
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-[30rem] bg-white/95 p-10 rounded-lg flex flex-col gap-8">
      <CreateTodo setTodos={setTodos} todosLength={todos.length} />

      <TodoList todos={todos} setTodos={setTodos} />

      <span className="text-xs tracking-widest">{`${todos.length}/${limitTodos}`}</span>
    </div>
  );
};

export default Todos;
