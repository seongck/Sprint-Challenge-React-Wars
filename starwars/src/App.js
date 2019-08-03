import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState(null); 

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then( res => setCharacters(res.data.results))
      .catch( err => console.log(err))
  }, []);

  if(!characters) return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>Loading...</h2>
    </div>
  )

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {characters.map( character => <Character info={character} />)}
    </div>
  );
}

export default App;
