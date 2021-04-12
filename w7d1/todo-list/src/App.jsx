import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import todoListData from './todoData'

function App() {
  const todoProps = {
    todoListData,
    potatoes: 5,
    fun: "definitely"
  }
  return (
    <div className="App">
      {/* <Header /> */}
      {Header()}
      <TodoList
        todoListData={todoListData}
        potatoes={5}
        fun="definitely"
      />
      {/* {TodoList({ todoListData: todoListData })} */}
      <TodoForm />
    </div>
  );
}

export default App;
