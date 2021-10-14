import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ];
  return (
    <div className='App'>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
