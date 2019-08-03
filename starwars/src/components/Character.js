import React from 'react';

export default function Character({info}) {
  return (
    <div>
      <h3>{info.name}</h3>
      <p>Height: {info.height} </p>
      <p>Mass: {info.mass} </p>
    </div>
  )
}
