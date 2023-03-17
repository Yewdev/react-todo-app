export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}
export interface ICreateTodoProps {
  todosLength: number;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface ITodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filter: string;
}
