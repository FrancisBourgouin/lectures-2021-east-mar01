import React from 'react'
import TodoListItem from './TodoListItem'


// 1: {
//   id: 1,
//   description: "Read for a billion seconds",
//   deadline: "2021-04-12T14:53:41.394Z",
//   completed: false
// }

const bob = {
  a: 1,
  b: 1,
  c: 1
}

export default function TodoList(props) {
  const todoListItemArr = [<TodoListItem />, <TodoListItem />]
  const parsedTodoListItems = Object.values(props.todoListData).map(todo => <TodoListItem key={todo.id} {...todo} />)
  return (
    <section>
      <h1>I am todo list with {props.potatoes} potatoes</h1>
      <ul>
        {/* {todoListItemArr} */}
        {parsedTodoListItems}
      </ul>
    </section>
  )
}