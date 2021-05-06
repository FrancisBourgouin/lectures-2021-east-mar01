import { useState } from "react"
import List from "./List"
import Form from "./Form"

export default function GroceryList(props) {
  // const [items, setItems] = useState([])
  const { items, setItems } = props
  const onSubmit = formData => {
    setItems(formData.item)
  }
  return (
    <section>
      <List items={items} />
      <Form onSubmit={onSubmit} />
    </section>
  )
}