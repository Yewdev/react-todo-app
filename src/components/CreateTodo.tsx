import { useRef, useState } from 'react';
import { ICreateTodoProps, ITodo } from '../types';
import { v4 as uuidv4 } from 'uuid';
const CreateTodo = ({ todosLength, setTodos }: ICreateTodoProps) => {
  const inputTodo = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText = inputTodo.current?.value;
    if (!inputText?.trim() || todosLength >= 10) return;
    const newTodo: ITodo = {
      id: uuidv4(),
      text: inputText,
      completed: false,
    };
    addTodo(newTodo);
    setInputValue('');
  };
  const addTodo = (newTodo: ITodo) => {
    setTodos((todo) => [...todo, newTodo]);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={`flex items-center shadow`}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputTodo}
          className="w-full h-10 px-3 text-base text-gray-700 border border-black/40 rounded-l-lg focus:shadow-outline"
        />
        <button className="h-10 px-3 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-r-lg focus:shadow-outline hover:bg-blue-700">
          Add
        </button>
      </form>
    </>
  );
};

export default CreateTodo;
