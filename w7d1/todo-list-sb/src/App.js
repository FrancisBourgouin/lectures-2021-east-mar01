import logo from './logo.svg';
import './App.css';
import TodoListItem from './components/TodoListItem';
const todoListDataComplete = {
  id: 1,
  description: "Read for a billion seconds",
  deadline: "2021-04-18T14:53:41.394Z",
  completed: true
}
function App() {
  return (
    <div className="App">
      <TodoListItem {...todoListDataComplete} />
    </div>
  );
}

export default App;
