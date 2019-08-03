import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1% 5%;
  justify-content: center;
`;

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
      <Wrapper>
        {characters.map( character => <Character info={character} />)}
      </Wrapper>
    </div>
  );
}

export default App;
