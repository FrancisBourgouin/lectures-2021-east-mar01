import { useReducer } from 'react'

export default function useApplicationData() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setGroceries":
        return ({ ...state, groceries: [...state.groceries, action.value] })
      case "setNotes":
        return ({ ...state, notes: [...state.notes, action.value] })
      case "setCurrentCity":
        return ({ ...state, currentCity: action.value })
    }
  }
  const initialState = {
    notes: [],
    groceries: [],
    currentCity: ""
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  return { state, dispatch }
}

