import { useRef } from 'react';
import { ITodoProps } from '../types';

const TodoList = ({ todos, setTodos }: ITodoProps) => {
  const handleToggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Drag and Drop Sorting
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);
  function handleSort() {
    // duplicate items
    let _todos = [...todos];
    // remove and save the dragged item content
    const draggedItemContent = _todos.splice(dragItem.current, 1)[0];

    // switch the position
    _todos.splice(dragOverItem.current, 0, draggedItemContent);

    // reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    // update the actual array
    setTodos(_todos);
  }
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo, index) => (
        <li
          key={todo.id}
          draggable
          onDragStart={(e) => (dragItem.current = index)}
          onDragEnter={(e) => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
          className={`flex justify-between items-center bg-white  rounded-lg gap-2 overflow-x-auto px-2 shadow`}
        >
          <span
            onClick={() => handleToggleComplete(todo.id)}
            className={`${
              todo.completed ? 'line-through text-black/60' : ''
            } cursor-pointer overflow-hidden w-full py-2 `}
          >
            {todo.text}
          </span>
          <button
            onClick={() => handleRemoveTodo(todo.id)}
            className="h-6 px-2 text-red-100 bg-red-400 rounded-lg focus:shadow-outline hover:bg-red-500"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
