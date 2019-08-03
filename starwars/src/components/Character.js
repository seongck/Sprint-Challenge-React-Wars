import React from 'react';
import styled from 'styled-components';

const capitalizeFirstLetter = (string) =>
      string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';

const Card = styled.div`
  background: rgba(255 ,255, 255, 0.7);  
  color: rgba(0, 0, 0, 0.7);
  padding: 1% 3% 2%;
  margin: 10px;
  border-radius: 5px;
  text-align: left;
  width: 17%;
`;

const Name = styled.h2`
  font-family: 'Saira Stencil One', cursive;
  text-align: center;
  margin-bottom: 5px;
`;

export default function Character({info}) {
  return (
    <Card>
      <Name>{info.name}</Name>
      <p><strong>Height:</strong> {info.height} </p>
      <p><strong>Mass:</strong> {info.mass} </p>
      <p><strong>Hair Color:</strong> {capitalizeFirstLetter(info.hair_color)}</p>
      <p><strong>Skin Color:</strong> {capitalizeFirstLetter(info.skin_color)}</p>
      <p><strong>Eye Color:</strong> {capitalizeFirstLetter(info.eye_color)}</p>
      <p><strong>Birth Year:</strong> {info.birth_year}</p>
      <p><strong>Gender:</strong> {capitalizeFirstLetter(info.gender)}</p>
    </Card>
  )
}
