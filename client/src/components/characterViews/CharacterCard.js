import React from 'react';
import { abilityBonusCalc, formatString, calcDex } from '../../utils/helperFunctions';

const CharacterCard = props => {

  // holds player's current character
  const character = props.character;

  return (
    <div className='flex flex-col justufy-center m-2 p-2 border border-black text-2xl space-y-2'>
      <div className='flex justify-around items-center space-x-4'>
        <h1>{character.name}</h1>
        {character.subrace === "" ?
          <p>{formatString(character.race)}</p>
          :
          <p>{formatString(character.subrace)}</p>
        }
        <p>{formatString(character.class)} {character.level}</p>
      </div>
      <div className='flex justify-center space-x-4'>
        <p>HP: {parseInt(character.currentHP)}</p>
        <p>/ {character.maxHP}</p>
      </div>
      <div className='flex justify-around space-x-4'>
        <p>AC: {character.armor + character.shield + calcDex(abilityBonusCalc(character.dex), character.maximumDexterity) + character.acMiscBonus}</p>
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