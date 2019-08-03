import React from 'react';

const capitalizeFirstLetter = (string) =>
      string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';

export default function Character({info}) {
  return (
    <div>
      <h3>{info.name}</h3>
      <p>Height: {info.height} </p>
      <p>Mass: {info.mass} </p>
      <p>Hair Color: {capitalizeFirstLetter(info.hair_color)}</p>
      <p>Skin Color: {capitalizeFirstLetter(info.skin_color)}</p>
      <p>Eye Color: {capitalizeFirstLetter(info.eye_color)}</p>
      <p>Birth Year: {info.birth_year}</p>
      <p>Gender: {capitalizeFirstLetter(info.gender)}</p>
    </div>
  )
}
