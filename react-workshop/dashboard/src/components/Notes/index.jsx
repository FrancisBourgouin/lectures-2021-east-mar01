import { useState } from "react"
import List from "./List"
import Form from "./Form"

export default function Notes(props) {
  // const [notes, setNotes] = useState([])
  const { notes, setNotes } = props
  const onSubmit = formData => {
    setNotes(formData)
  }
  return (
    <section>
      <List notes={notes} />
      <Form onSubmit={onSubmit} />
    </section>
  )
}