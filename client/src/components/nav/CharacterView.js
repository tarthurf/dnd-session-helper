import React, { useContext, useEffect } from 'react';
import { abilityBonusCalc, formatString } from '../../utils/helpers';

const CharacterView = props => {

  const char = props.char;

  useEffect(() => {}, [])

  return (
    <div>
      <div className='flex justify-between'>
        <p>{char.name}</p>
        {char.subrace === "" ?
          <p>{char.race}</p>
          :
          <p>{char.subrace}</p>
        }
        <p>{char.class} {char.level}</p>
        <p>Alignment: {char.alignment}</p>
      </div>
      <p>Current HP: {char.currentHP}</p>
      <p>Max HP: {char.maxHP}</p>
      <p>AC: {char.AC.armor + char.AC.shiled + char.AC.maxDex + char.AC.miscBonus}</p>
      <p>Proficiency Bonus: {char.proficiencyBonus}</p>
      <p>Speed: {char.speed}</p>
      <p>Initiative: {abilityBonusCalc(char.dex) + char.initiative.miscBonus}</p>
      <p>Background: {char.background}</p>
      <p>Strength: {char.str}</p>
      <p>Dexterity: {char.dex}</p>
      <p>Constitutuion: {char.con}</p>
      <p>Intelligence: {char.int}</p>
      <p>Wisdom: {char.wis}</p>
      <p>Charisma: {char.cha}</p>
      <p>Acrobatics</p>
    </div>
  )
}

export default CharacterView;