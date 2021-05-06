export default function Item(props) {
  const { title, text } = props
  return (
    <li>
      <h1>{title}</h1>
      <h2>{text}</h2>
    </li>
  )
}