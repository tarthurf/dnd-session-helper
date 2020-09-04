import React, { useState } from 'react';
import useForm from '../../../../utils/useForm';
const { SubraceSwitch } = require('../../../../utils/switchHelpers')
const { formatString } = require('../../../../utils/stringFormatHelper')

const BuildStage0 = props => {

  let buildStage = props.buildStage;
  const setBuildStage = props.setBuildStage;
  const charValues = props.charValues

  const { values, handleSubmit, handleChange } = useForm(charValues)

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <label>
        What is your character's name?
        </label>
      <input
        name="name"
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        value={values.name}
        required
      />

      <label>
        What is your character's race?
        </label>
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
        Set your ability Scores (include racial adjustments)
        </label>
      <p>Strength</p>
      <input
        name="str"
        type="number"
        onChange={handleChange}
        value={values.abilityScores.str}
        min={6}
        max={18}
        required
      >
      </input>
      <p>Dexterity</p>
      <input
        name="dex"
        type="number"
        onChange={handleChange}
        value={values.abilityScores.dex}
        min={6}
        max={18}
        required
      >
      </input>
      <p>Constitution</p>
      <input
        name="con"
        type="number"
        onChange={handleChange}
        value={values.abilityScores.con}
        min={6}
        max={18}
        required
      >
      </input>
      <p>Intelligence</p>
      <input
        name="int"
        type="number"
        onChange={handleChange}
        value={values.abilityScores.int}
        min={6}
        max={18}
        required
      >
      </input>
      <p>Wisdom</p>
      <input
        name="wis"
        type="number"
        onChange={handleChange}
        value={values.abilityScores.wis}
        min={6}
        max={18}
        required
      >
      </input>
      <p>Charisma</p>
      <input
        name="cha"
        type="number"
        onChange={handleChange}
        value={values.abilityScores.cha}
        min={6}
        max={18}
        required
      >
      </input>

      <button>
        Go Back
      </button>
      <button
        onClick={() => setBuildStage(1)}
      >
        Next
      </button>
    </div>
  )
}

export default BuildStage0;