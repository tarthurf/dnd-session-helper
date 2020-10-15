import React, { useContext, useState } from 'react';
import UserContext from '../../utils/UserContext';
import { abilityBonusCalc, formatString, calcDex } from '../../utils/helperFunctions';
import API from '../../utils/API';

const UserCard = props => {

  const socket = props.socket

  const { userCharacter } = useContext(UserContext);


  const [hpState, sethpState] = useState(userCharacter.currentHP)

  const name = userCharacter.name;

  const handleHP = e => {
    sethpState(e.target.value);
  };

  return (
    <div className='flex flex-col justufy-center m-2 p-2 border border-black text-2xl space-y-2'>
      <div className='flex justify-around items-center space-x-4'>
        <h1>{userCharacter.name}</h1>
        {userCharacter.subrace === "" ?
          <p>{formatString(userCharacter.race)}</p>
          :
          <p>{formatString(userCharacter.subrace)}</p>
        }
        <p>{formatString(userCharacter.class)} {userCharacter.level}</p>
      </div>
      <div className='flex justify-center space-x-4'>
        <p>HP: </p>
        <input className='w-16'
          type="number"
          size="3"
          max={999}
          value={hpState}
          onChange={handleHP}
        >
        </input>
        <p>/ {userCharacter.maxHP}</p>
        <button className='border border-black ml-2 px-1'
          onClick={() => {
            socket.emit('update-hp', { hpState, name });
            API.updateCharacterById(userCharacter._id, {currentHP: hpState});
          }}>
          Set HP
        </button>
      </div>
      <div className='flex justify-around space-x-4'>
        <p>AC: {parseInt(userCharacter.armor) + parseInt(userCharacter.shield) + parseInt(calcDex(abilityBonusCalc(userCharacter.dex), userCharacter.maximumDexterity)) + parseInt(userCharacter.acMiscBonus)}</p>
        <p>Initiative: {abilityBonusCalc(userCharacter.dex)}</p>
        <p>Perception: {
          userCharacter.skills.perception.trained === true ?
            10 + parseInt(userCharacter.proficiencyBonus) + parseInt(abilityBonusCalc(userCharacter.wis))
            :
            10 + parseInt(abilityBonusCalc(userCharacter.wis))
        }</p>
      </div>
    </div>
  )
}

export default UserCard;