import Todos from './components/Todos';

function App() {
  return (
    <div className="bg-neutral-800 flex flex-col pt-40 justify-start items-center min-h-screen">
      <h1 className="text-white text-4xl mb-4">Todo App</h1>
      <Todos />
      <span className="text-sm mt-8 text-white/50">
        Drag and drop to reorder list
      </span>
    </div>
  );
}

export default App;
