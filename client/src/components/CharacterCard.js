import React from 'react';

const CharacterCard = props => {

  const character = props.character;

  return(
    <div>
      <h1>Name: {character.name}</h1>
      <span><h2>Race: {character.race}</h2><h2>Subrace: {character.subrace}</h2></span>
      <span><h2>Class: {character.class}</h2><h2>Level: {character.level}</h2></span>
      <span><h2>Current HP: {character.currentHP}</h2><h2>Max HP: {character.maxHP}</h2></span>
      <span><h2>AC: {character.AC}</h2><h2>Initiative: {character.initiative}</h2><h2>Perception: {character.perception}</h2></span>
    </div>
  )
}

export default CharacterCard;