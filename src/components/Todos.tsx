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
    <div className="w-full sm:w-[30rem] bg-white/95 p-10 rounded-lg flex flex-col gap-8">
      <CreateTodo setTodos={setTodos} todosLength={todos.length} />

      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
      <div className="flex justify-between items-center">
        <span className="text-[10px] sm:text-xs">{countActive} items left</span>
        <div className="flex justify-between items-center sm:text-sm  gap-2 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'text-blue-500' : ''}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={filter === 'active' ? 'text-blue-500' : ''}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'text-blue-500' : ''}
          >
            Completed
          </button>
        </div>
        <button onClick={clearCompleted} className="text-[10px] sm:text-xs">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Todos;
