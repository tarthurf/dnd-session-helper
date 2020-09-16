/* eslint-disable */

import React, { useContext } from 'react';
import { formatString } from '../../utils/helpers';
import useForm from '../../utils/useForm';
import { SubraceSwitch } from '../../utils/switchHelpers';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';

const CharacterEdit = props => {

  const { userCharacter } = useContext(UserContext);

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
  }

  const { values, handleChange, handleSubmit } = useForm(userCharacter, updateChar)

  return (
    <form className='flex flex-col'
      onSubmit={handleSubmit}
    >
      <p>{values.name}</p>

      <label>Race</label>
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

      <label>
        If applicable, What is your character's subrace?
      </label>
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

      <label>
        What is your character's class?
      </label>
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

      <label>
        What is your character's level?
        </label>
      <input
        name="level"
        type="number"
        onChange={handleChange}
        value={values.level}
        min={1}
        max={20}
        required
      />

      <label>
        What is your character's alignment?
      </label>
      <select
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

      <label>
        What is your character's speed?
      </label>
      <input
        name="speed"
        type="number"
        step={5}
        onChange={handleChange}
        value={values.speed}
        required
      >
      </input>

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

      <p>Skill Proficiencies:</p>
      {Object.entries(values.skills).map((skill, i) => (
        skill[1].trained === false ? (
          <React.Fragment key={i+200}>
            <label key={i+100}>{formatString(skill[0])}</label>
            <input
              key={i}
              name="skills"
              type="checkbox"
              value={skill[0]}
            />
          </React.Fragment>
        ) : (
            <React.Fragment key={i+200}>
              <label key={i+100}>{formatString(skill[0])}</label>
              <input
                key={i}
                name="skills"
                type="checkbox"
                value={skill[0]}
                defaultChecked
              />
            </React.Fragment>
          )
      ))}
      <button className='border border-black m-2'
        type="submit"
      >
        submit
      </button>
    </form>
  )
}

export default CharacterEdit;