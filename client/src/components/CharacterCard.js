import React from 'react';
import { abilityBonusCalc, formatString, calcDex } from '../utils/helpers';

const CharacterCard = props => {

  const character = props.character;

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