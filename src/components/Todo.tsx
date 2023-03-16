import { ITodoProps } from '../types';

const Todo = ({ todo, currentTodos, setTodos }: ITodoProps) => {
  const handleToggleComplete = (id: string) => {
    const updatedTodos = currentTodos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id: string) => {
    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <>
      <li
        key={todo.id}
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
    </>
  );
};
export default Todo;
