import logo from './logo.svg';
import './App.css';
import Form from './components/form/form'
import TodoList from './components/toDoList/toDoList'

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl">CR<span className="line-through">UD</span> - TODO</h1>
      <h2>Create & Read Data</h2>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
