// Notes.stories.js
import GroceryList from '../components/GroceryList'
import Form from '../components/GroceryList/Form'
import Item from '../components/GroceryList/Item'
import List from '../components/GroceryList/List'
import "../components/GroceryList/GroceryList.scss"

const items = ['chicken', 'eggs', 'flour', 'canola oil', 'buttermilk']

export const FormComponent = () => <Form />
export const ItemComponent = () => <Item item={items[0]} />
export const ListComponent = () => <List items={items} />
export const GroceryListComponent = () => <GroceryList />

export default {
  title: 'Components/GroceryList',
  component: GroceryList,
}