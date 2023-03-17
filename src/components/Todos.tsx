import React, { useState, useEffect } from 'react';
import { ITodo } from '../types';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const getData = () => JSON.parse(localStorage.getItem('todos') || '');

const Todos: React.FC = () => {
  const localTodos = localStorage.getItem('todos') ? getData() : [];
  const [todos, setTodos] = useState<ITodo[]>(localTodos);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const countActive: number = todos.filter((i) => i.completed === false).length;
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  function clearCompleted() {
    setTodos(todos.filter((e) => !e.completed));
  }
  return (
    <div className="w-[30rem] bg-white/95 p-10 rounded-lg flex flex-col gap-8">
      <CreateTodo setTodos={setTodos} todosLength={todos.length} />

      <TodoList todos={todos} setTodos={setTodos} />
      <div className="flex justify-between items-center">
        <span className="text-xs ">{countActive} items left</span>
        <div className="flex justify-between items-center text-sm gap-2">
          <button className={filter === 'all' ? 'text-blue-500' : ''}>
            All
          </button>
          <button className={filter === 'active' ? 'text-blue-500' : ''}>
            Active
          </button>
          <button className={filter === 'completed' ? 'text-blue-500' : ''}>
            Completed
          </button>
        </div>
        <button onClick={clearCompleted} className="text-xs">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Todos;
