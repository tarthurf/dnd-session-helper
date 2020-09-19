import React from 'react';
import { abilityBonusCalc, formatString } from '../../utils/helpers';

const CharacterCard = props => {

  const character = props.character;

  const maxDex = () => {
    const dex = abilityBonusCalc(character.dex)
    const maxDex = character.ACmax
    if (maxDex !== 0 && dex >= maxDex) return maxDex;
    else return dex;
  }

  return (
    <div className='flex flex-col justufy-center w-3/4 border border-black text-2xl'>
      <div className='flex justify-around items-center'>
        <h1>{character.name}</h1>
        {character.subrace === "" ?
          <p>{formatString(character.race)}</p>
          :
          <p>{formatString(character.subrace)}</p>
        }
        <p>{formatString(character.class)} {character.level}</p>
      </div>
      <div className='flex justify-center'>
        <p>HP: {character.currentHP}</p>
        <p>/ {character.maxHP}</p>
      </div>
      <div className='flex justify-around'>
        <p>AC: {character.ACarmor + maxDex() + character.ACshield + character.ACmiscBonus}</p>
        <p>Initiative: {abilityBonusCalc(character.dex)}</p>
        <p>Perception: {
          character.skills.perception.trained === true ?
            10 + character.proficiencyBonus + abilityBonusCalc(character.wis)
            :
            10 + abilityBonusCalc(character.wis)
        }</p>
      </div>
    </div>
  )
}

export default CharacterCard;