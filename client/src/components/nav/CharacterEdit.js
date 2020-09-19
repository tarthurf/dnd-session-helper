<<<<<<< HEAD
import React, { useContext, useEffect } from 'react';
import { abilityBonusCalc, formatString, calcDex } from '../../utils/helpers';
=======
/* eslint-disable */

import React, { useContext } from 'react';
import { formatString } from '../../utils/helpers';
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb
import useForm from '../../utils/useForm';
import { SubraceSwitch } from '../../utils/switchHelpers';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';

const CharacterEdit = props => {

  const { userCharacter } = useContext(UserContext);

<<<<<<< HEAD
  const stringIntConvert = obj => {
    Object.entries(obj).map(item => {
      if ((item[1] >>> 0 === parseFloat(item)) === true) item = parseInt(item[1]);
      console.log(`Values: ${item[0]}: ${item[1]} is a ${typeof item[1]}`)
    })
  }

  const updateChar = () => {
    stringIntConvert(values)
    setTimeout(() => API.updateCharacterById(values._id, values), 1000)
=======
  const formDataCapture = () => {
    const checkboxes = document.getElementsByName("skills");
    const selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked == true);
    selectedCboxes.forEach(box => {
      Object.entries(values.skills).map(skill => {
        if (box.defaultValue === skill[0]) skill[1].trained = true;
        else skill[1].trained = false;
      });
    });
  }

  const intConvert = obj => {
    Object.entries(obj).map(stat => {
      if (parseInt(stat[1])) {
        stat[1] = parseInt(stat[1]);
        console.log(stat[0], typeof stat[1]);
      }
    });
  }

  const updateChar = () => {
    formDataCapture();
    intConvert(values);
    API.updateCharacterById(values._id, values);
    window.location.reload(false);
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb
  }

  const { values, handleChange, handleSubmit } = useForm(userCharacter, updateChar)

  const abilityBonus = {
    str: abilityBonusCalc(values.str),
    dex: abilityBonusCalc(values.dex),
    con: abilityBonusCalc(values.con),
    int: abilityBonusCalc(values.int),
    wis: abilityBonusCalc(values.wis),
    cha: abilityBonusCalc(values.cha)
  }

  return (
    <form className='flex flex-col'
      onSubmit={handleSubmit}
    >
      <p className='self-center text-2xl'>{values.name}</p>
      <div className='flex justify-evenly border-b border-black'>

        <div className='flex flex-col'>
          <div className='flex justify-center border-b border-black'>
            <select
              name="class"
              onChange={handleChange}
              value={values.class}
              required
            >
              <option value="barbarian">Barbarian</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="fighter">Fighter</option>
              <option value="monk">Monk</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </select>
            <input
              name="level"
              type="number"
              onChange={handleChange}
              value={values.level}
              min={1}
              max={20}
              required
            />
          </div>
          <label className='self-center'>Class</label>
        </div>

        <div className='flex flex-col'>
          <select className='border-b border-black'
            name="background"
            onChange={handleChange}
            value={values.background}
            required
          >
            <option value="acolyte">Acolyte</option>
            <option value="charlatan">Charlatan</option>
            <option value="criminal">Criminal</option>
            <option value="entertainer">Entertainer</option>
            <option value="folkHero">Folk Hero</option>
            <option value="guildArtisan">Guild Artisan</option>
            <option value="guildMerchant">Guild Merchant</option>
            <option value="hermit">Hermit</option>
            <option value="knight">Knight</option>
            <option value="noble">Noble</option>
            <option value="outlander">Outlander</option>
            <option value="pirate">Pirate</option>
            <option value="sage">Sage</option>
            <option value="sailor">Sailor</option>
            <option value="soldier">Soldier</option>
            <option value="spy">Spy</option>
            <option value="urchin">Urchin</option>
          </select>
          <label className='self-center'>Background</label>
        </div>

        <div className='flex flex-col'>
          <div className='flex border-b border-black'>
            <select
              name="race"
              onChange={handleChange}
              value={values.race}
              required
            >
              <option value="dragonborn">Dragonborn</option>
              <option value="dwarf">Dwarf</option>
              <option value="elf">Elf</option>
              <option value="gnome">Gnome</option>
              <option value="half-elf">Half-Elf</option>
              <option value="halfling">Halfling</option>
              <option value="half-orc">Half-Orc</option>
              <option value="human">Human</option>
              <option value="tiefling">Tiefling</option>
            </select>
            <select
              name="subrace"
              onChange={handleChange}
              value={values.subrace}
              required
            >
              {SubraceSwitch(values.race).map((subrace, i) => (
                <option key={i} value={subrace}>{formatString(subrace)}</option>
              ))}
            </select>
          </div>
          <label className='self-center'>Race</label>
        </div>

        <div className='flex flex-col'>
          <select className='border-b border-black'
            name="alignment"
            onChange={handleChange}
            value={values.alignment}
            required
          >
            <option value="lg">Lawful Good</option>
            <option value="ng">Neutral Good</option>
            <option value="cg">Chaotic Good</option>
            <option value="ln">Lawfule Neutral</option>
            <option value="n">Neutral</option>
            <option value="cn">Chaotic Neutral</option>
            <option value="le">Lawful Evil</option>
            <option value="ne">Neutral Evil</option>
            <option value="ce">Chaotic Evil</option>
          </select>
          <label className='self-center'>Alignment</label>
        </div>
      </div>

      <div className="flex">
        <div className='flex flex-col items-center border border-black'>
          <p>Strength</p>
          <input className='text-2xl pl-12'
            name="str"
            type="number"
            onChange={handleChange}
            value={values.str}
            min={0}
            max={99}
            required
          >
          </input>
          <p>{abilityBonusCalc(values.str)}</p>

          <p>Dexterity</p>
          <input className='text-2xl pl-12'
            name="dex"
            type="number"
            onChange={handleChange}
            value={values.dex}
            min={0}
            max={99}
            required
          >
          </input>
          <p>{abilityBonusCalc(values.dex)}</p>

          <p>Constitution</p>
          <input className='text-2xl pl-12'
            name="con"
            type="number"
            onChange={handleChange}
            value={values.con}
            min={0}
            max={99}
            required
          >
          </input>
          <p>{abilityBonusCalc(values.con)}</p>

          <p>Intelligence</p>
          <input className='text-2xl pl-12'
            name="int"
            type="number"
            onChange={handleChange}
            value={values.int}
            min={0}
            max={99}
            required
          >
          </input>
          <p>{abilityBonusCalc(values.int)}</p>

<<<<<<< HEAD
          <p>Wisdom</p>
          <input className='text-2xl pl-12'
            name="wis"
            type="number"
            onChange={handleChange}
            value={values.wis}
            min={0}
            max={99}
            required
          >
          </input>
          <p>{abilityBonusCalc(values.wis)}</p>

          <p>Charisma</p>
          <input className='text-2xl pl-12'
            name="cha"
            type="number"
            onChange={handleChange}
            value={values.cha}
            min={0}
            max={99}
            required
          >
          </input>
          <p>{abilityBonusCalc(values.cha)}</p>
=======
      <label>
        What is your character's max HP?
      </label>
      <input
        name="maxHP"
        type="number"
        placeholder="Enter max HP"
        onChange={handleChange}
        value={values.maxHP}
        required
      />
      
      <label>
        What is your character's Proficiency Bonus?
      </label>
      <input
        name="proficiencyBonus"
        type="number"
        onChange={handleChange}
        value={values.proficiencyBonus}
        required
      />

      <label>What is your base armor bonus? (10 if not wearing armor)</label>
      <input
        name="ACarmor"
        type="number"
        onChange={handleChange}
        value={values.ACarmor}
      />

      <label>What is your armor's maximum dex? (0 if none)</label>
      <input
        name="ACmax"
        type="number"
        onChange={handleChange}
        value={values.ACmax}
      />

      <label>What is your base shield bonus?</label>
      <input
        name="ACshield"
        type="number"
        onChange={handleChange}
        value={values.ACshield}
      />

      <label>Does your character have any miscellaneous armor bonuses?</label>
      <input
        name="ACmiscBonus"
        type="number"
        onChange={handleChange}
        value={values.ACmiscBonus}
      />

      <label>
        Set your ability Scores (include racial adjustments)
      </label>
      <p>Strength</p>
      <input
        name="str"
        type="number"
        onChange={handleChange}
        value={values.str}
        required
      >
      </input>
      <p>Dexterity</p>
      <input
        name="dex"
        type="number"
        onChange={handleChange}
        value={values.dex}
        required
      >
      </input>
      <p>Constitution</p>
      <input
        name="con"
        type="number"
        onChange={handleChange}
        value={values.con}
        required
      >
      </input>
      <p>Intelligence</p>
      <input
        name="int"
        type="number"
        onChange={handleChange}
        value={values.int}
        required
      >
      </input>
      <p>Wisdom</p>
      <input
        name="wis"
        type="number"
        onChange={handleChange}
        value={values.wis}
        required
      >
      </input>
      <p>Charisma</p>
      <input
        name="cha"
        type="number"
        onChange={handleChange}
        value={values.cha}
        required
      >
      </input>
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb

        </div>
        <div className='flex flex-col mx-2 border border-black p-1'>
          <div className='flex text-sm'>
            <input
              name="proficiencyBonus"
              type="number"
              onChange={handleChange}
              value={values.proficiencyBonus}
              min={0}
              max={99}
              required
            />
            <label>Proficiency Bonus</label>
          </div>
          <div className='flex flex-col text-sm'>
            <p>Saving Throws</p>
            {Object.entries(values.saves).map((save, i) => (
              save[1] === false ? (
                <div className='flex items-center space-x-2' key={i + 200}>
                  <input
                    key={i}
                    name="saves"
                    type="checkbox"
                    onChange={() => save[1] = !save[1]}
                    value={save[1]}
                    defaultChecked={false}
                  />
                  <p>{Object.entries(abilityBonus).map(ability => (
                    ability[0] === save[0] ?
                      ability[1]
                      :
                      null
                  ))}</p>
                  <label key={i + 100}>{`${formatString(save[0])}`}</label>
                </div>
              ) : (
                  <div className='flex items-center space-x-2' key={i + 200}>
                    <input
                      key={i}
                      name="saves"
                      type="checkbox"
                      onChange={() => save[1] = !save[1]}
                      value={save[1]}
                      defaultChecked={true}
                    />
                    <p>{Object.entries(abilityBonus).map(ability => (
                      ability[0] === save[0] ?
                        ability[1] + values.proficiencyBonus
                        :
                        null
                    ))}</p>
                    <label key={i + 100}>{`${formatString(save[0])}`}</label>
                  </div>
                )
            ))}
          </div>
          <div className='flex flex-col text-sm'>
            <p>Skill Proficiencies:</p>
            {Object.entries(values.skills).map((skill, i) => (
              skill[1].trained === false ? (
                <div className='flex items-center space-x-2' key={i + 200}>
                  <input
                    key={i}
                    name="skills"
                    type="checkbox"
                    onChange={() => skill[1].trained = !skill[1].trained}
                    value={skill[1].trained}
                    defaultChecked={false}
                  />
                  <p>{Object.entries(abilityBonus).map(ability => (
                    ability[0] === skill[1].ability ?
                      ability[1]
                      :
                      null
                  ))}</p>
                  <label key={i + 100}>{`${formatString(skill[0])} (${formatString(skill[1].ability)})`}</label>
                </div>
              ) : (
                  <div className='flex items-center space-x-2' key={i + 200}>
                    <input
                      key={i}
                      name="skills"
                      type="checkbox"
                      onChange={() => skill[1].trained = !skill[1].trained}
                      value={skill[1].trained}
                      defaultChecked={true}
                    />
                    <p>{Object.entries(abilityBonus).map(ability => (
                      ability[0] === skill[1].ability ?
                        ability[1] + values.proficiencyBonus
                        :
                        null
                    ))}</p>
                    <label key={i + 100}>{`${formatString(skill[0])} (${formatString(skill[1].ability)})`}</label>
                  </div>
                )
            ))}
          </div>
        </div>
        <div className='flex flex-col mx-2 border border-black'>
          <div className='flex justify-between'>
            <div className='flex flex-col items-center p-1 flex-1 border border-black'>
              <p>{parseInt(values.armor) + parseInt(values.shield) + parseInt(calcDex(abilityBonusCalc(values.dex), values.maximumDexterity)) + parseInt(values.acMiscBonus)}</p>
              <p className='text-sm'>Armor Class</p>
            </div>
            <div className='flex flex-col items-center p-1 flex-1 border border-black'>
              <p>{abilityBonusCalc(values.dex)}</p>
              <p className='text-sm'>Initiative</p>
            </div>
            <div className='flex flex-col items-center p-1 flex-1 border border-black'>
              <input
                name="speed"
                type="number"
                step={5}
                onChange={handleChange}
                value={values.speed}
                min={0}
                max={99}
                required
              ></input>
              <p className='text-sm'>Speed</p>
            </div>
          </div>

          <div className='border border-black'>
            <div className='flex ml-2'>
              <input
                name="armor"
                type="number"
                onChange={handleChange}
                value={values.armor}
                min={10}
                max={99}
                required
              />
              <label>Armor Rating</label>
            </div>
            <div className='flex ml-2'>
              <input
                name="shield"
                type="number"
                onChange={handleChange}
                value={values.shield}
                min={0}
                max={99}
                required
              />
              <label>Shield Rating</label>
            </div>
            <div className='flex ml-2'>

              <input
                name="maximumDexterity"
                type="number"
                onChange={handleChange}
                value={values.maximumDexterity}
                min={0}
                max={99}
                required
              />
              <label>Maximum Dexterity</label>
            </div>
            <div className='flex ml-2'>
              <input
                name="acMiscBonus"
                type="number"
                onChange={handleChange}
                value={values.acMiscBonus}
                min={0}
                max={99}
                required
              />
              <label>Misc Armor Bonus</label>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-4xl'>{parseInt(values.currentHP) + parseInt(values.tempHP)}</p>
            <p className='text-lg'>HP</p>
          </div>
          <div className='flex flex-col border border-black'>
            <div className='flex'>
              <input
                name="maxHP"
                type="number"
                onChange={handleChange}
                value={values.maxHP}
                min={1}
                max={999}
                required
              />
              <label>Max Hit Points</label>
            </div>
            <div className='flex'>
              <input
                name="currentHP"
                type="number"
                onChange={handleChange}
                value={values.currentHP}
                min={0}
                max={values.maxHP}
                required
              />
              <label>Current Hit Points</label>
            </div>
            <div className='flex'>
              <input
                name="tempHP"
                type="number"
                onChange={handleChange}
                value={values.tempHP}
                min={0}
                max={999}
                required
              />
<<<<<<< HEAD
              <label>Temp Hit Points</label>
            </div>
          </div>
        </div>
      </div>


      <button type="submit">submit</button>

=======
            </React.Fragment>
          )
      ))}
      <button className='border border-black m-2'
        type="submit"
      >
        submit
      </button>
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb
    </form>
  )
}

export default CharacterEdit;