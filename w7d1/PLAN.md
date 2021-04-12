# Todo list

## What does it do

- Show a list of tasks
- Prioritize taks
- Add a new task
- Mark as done
- Deadline
- Remove a task
- Categorize
- Modify a task

## Data

Todo: description, deadline, completed (obj)

todo: {
  id:int
  description:string,
  deadline:time,
  completed:boolean
}

List of todos : Array ? Object ?

listOfTodos : [todo, todo]
listOfTodos : {id:todo, id:todo}

## HTML skeleton

body
  header
    h1
  main
    section
      h1
      ul
        li
    section
      h1
      form

## Components

Header
  header
    h1

TodoForm
  section
      h1
      form

TodoListItem
  li

TodoList
  section
        h1
        ul
          TodoListItem