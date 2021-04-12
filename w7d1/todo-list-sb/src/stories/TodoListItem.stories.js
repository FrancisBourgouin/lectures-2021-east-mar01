import { storiesOf } from '@storybook/react'
import TodoListItem from '../components/TodoListItem'

const todoListData = {
  id: 1,
  description: "Read for a billion seconds",
  deadline: "2021-04-10T14:53:41.394Z",
  completed: false
}
const todoListDataComplete = {
  id: 1,
  description: "Read for a billion seconds",
  deadline: "2021-04-18T14:53:41.394Z",
  completed: true
}

storiesOf('TodoList Item', module)
  .add('With information', () => <TodoListItem {...todoListData} />)
  .add('Without information', () => <TodoListItem />)
  .add('Completed', () => <TodoListItem {...todoListDataComplete} />)
  .add('Not Completed', () => <TodoListItem {...todoListData} />)
  .add('Due date passed', () => <TodoListItem {...todoListData} />)
  .add('Due date coming', () => <TodoListItem {...todoListDataComplete} />)