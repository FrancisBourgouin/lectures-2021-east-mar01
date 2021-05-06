import { useState } from 'react'

export default function useApplicationData() {
  const [state, setState] = useState({
    notes: [],
    groceries: [],
    currentCity: ""
  })
  const { notes, groceries, currentCity } = state

  const setGroceries = (value) => {
    setState(prev => ({ ...prev, groceries: [...prev.groceries, value] }))
  }
  const setNotes = (value) => {
    setState(prev => ({ ...prev, notes: [...prev.notes, value] }))
  }
  const setCurrentCity = (value) => {
    setState(prev => ({ ...prev, currentCity: value }))
  }

  return { state, setCurrentCity, setGroceries, setNotes }
}

