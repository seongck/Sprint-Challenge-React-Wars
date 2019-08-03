import React from 'react';
import styled from 'styled-components';

const capitalizeFirstLetter = (string) =>
      string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';

const Card = styled.div`
  background: rgba(255 ,255, 255, 0.7);  
  color: rgba(0, 0, 0, 0.7);
  padding: 2%;
  margin: 10px;
  border-radius: 5px;
  text-align: left;
  width: 14%;
`;

export default function Character({info}) {
  return (
    <Card>
      <h2>{info.name}</h2>
      <p>Height: {info.height} </p>
      <p>Mass: {info.mass} </p>
      <p>Hair Color: {capitalizeFirstLetter(info.hair_color)}</p>
      <p>Skin Color: {capitalizeFirstLetter(info.skin_color)}</p>
      <p>Eye Color: {capitalizeFirstLetter(info.eye_color)}</p>
      <p>Birth Year: {info.birth_year}</p>
      <p>Gender: {capitalizeFirstLetter(info.gender)}</p>
    </Card>
  )
}
