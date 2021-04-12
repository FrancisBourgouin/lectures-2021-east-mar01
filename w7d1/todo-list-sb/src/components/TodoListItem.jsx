import React from 'react'
import "./TodoListItem.css"
// 1: {
//   id: 1,
//   description: "Read for a billion seconds",
//   deadline: "2021-04-12T14:53:41.394Z",
//   completed: false
// }

export default function TodoListItem(props) {
  // const {description, completed, deadline} = props

  // const bgColor = props.completed ? "green" : "red"
  const parsedDate = new Date(props.deadline)
  const line = props.completed ? "line-through" : ""
  return (
    <li>
      {props.description &&
        <>
          <h1 className={`todo ${props.completed ? 'completed' : ''}`}>{props.description}</h1>
          <h2>{parsedDate.toDateString()}</h2>
        </>
      }
      {!props.description && <h1>INVALID DESCRIPTION ARRR</h1>}
    </li>
  )
}