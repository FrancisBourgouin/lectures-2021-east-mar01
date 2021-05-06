import Item from './Item'

export default function List(props) {
  const { items } = props

  const parsedItems = Array.isArray(items) && items.map(item => <Item key={item} item={item} />)

  return (
    <ul>
      {parsedItems}
    </ul>
  )
}