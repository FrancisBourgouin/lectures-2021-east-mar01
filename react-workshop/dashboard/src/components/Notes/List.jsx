import Item from './Item'

export default function List(props) {
  const { notes } = props

  const parsedItems = Array.isArray(notes) && notes.map(note => <Item key={note.title} {...note} />)

  return (
    <ul>
      {parsedItems}
    </ul>
  )
}