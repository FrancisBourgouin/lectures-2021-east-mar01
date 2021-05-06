import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Notes from "./components/Notes";
import GroceryList from "./components/GroceryList";
import Weather from "./components/Weather";

import './App.css';
import useApplicationDataReducer from './hooks/useApplicationDataReducer';

function App() {
  const { state, dispatch } = useApplicationDataReducer()
  const { notes, groceries, currentCity } = state

  const setGroceries = value => dispatch({ type: "setGroceries", value })
  const setNotes = value => {
    dispatch({ type: "setNotes", value })
    dispatch({ type: "setNotes", value })
    dispatch({ type: "setGroceries", value })
  }
  const setCurrentCity = value => dispatch({ type: "setCurrentCity", value })
  // const setPotatoes = value => dispatch({type:"setPotatoes", value})

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/groceries">groceries</Link>
          <Link to="/notes">notes</Link>
          <Link to="/weather">weather</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/groceries" exact>
            <GroceryList groceries={groceries} setGroceries={setGroceries} />
          </Route>
          <Route path="/notes" exact>
            <Notes notes={notes} setNotes={setNotes} />
          </Route>
          <Route path="/weather" exact>
            <Weather currentCity={currentCity} setCurrentCity={setCurrentCity} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
