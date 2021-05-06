// Notes.stories.js
import Notes from '../components/Notes'
import Form from '../components/Notes/Form'
import Item from '../components/Notes/Item'
import List from '../components/Notes/List'
import "../components/Notes/Notes.scss"

const notes = [
  { title: "Chicken!", text: "Chicken is life" },
  { title: "Potato!", text: "Potato is life" },
  { title: "Depends!", text: "Depends is life" },
]

export const FormComponent2 = () => <Form />
export const ItemComponent = () => <Item {...notes[0]} />
export const ListComponent = () => <List notes={notes} />
export const NotesComponent = () => <Notes />

export default {
  title: 'Components/Notes',
  component: Notes,
}