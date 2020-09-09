import React from 'react';
import useForm from '../../utils/useForm';
import API from '../../utils/API';
const { SubraceSwitch } = require('../../utils/switchHelpers.js')

const SimpleBuild = props => {

  let state = props.state;
  const setState = props.setState;

  const characterSubmit = () => {
    API.createCharacter(
      {
        name: values.name,
        race: values.race,
        subrace: values.subrace,
        class: values.class,
        level: values.level,
        maxHP: values.maxHP,
        currentHP: values.maxHP,
        str: values.str,
        dex: values.dex,
        con: values.con,
        int: values.int,
        wis: values.wis,
        cha: values.cha,
        AC: {
          armor: values.armor,
          shield: values.shield,
          maxDex: values.maxDex
        },
        skills: {
          perception: {
            trained: values.perception
          }
        },
        proficiencyBonus: values.proficiency
      }
    )
    setState(!state)
  }

  const { values, handleSubmit, handleChange } = useForm(
    {
      name: "",
      race: "dragonborn",
      subrace: "",
      class: "Barbarian",
      level: 1,
      maxHP: 0,
      currentHP: 0,
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
      armor: 10,
      shield: 0,
      maxDex: 0,
      perception: false,
      proficiency: 0,
    },
    characterSubmit
  )

  return (
    <form className='flex flex-col items-center gap-y-2'
      onSubmit={handleSubmit}
    >
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
      >
        {SubraceSwitch(values.race).map((subrace, i) => (
          <option key={i} value={subrace}>{subrace.charAt(0).toUpperCase() + subrace.slice(1)}</option>
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
        What is your character's max HP?
      </label>
      <input
        name="maxHP"
        type="number"
        onChange={handleChange}
        value={values.maxHP}
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
        value={values.str}
        min={6}
        max={18}
        required
      ></input>
      <p>Dexterity</p>
      <input
        name="dex"
        type="number"
        onChange={handleChange}
        value={values.dex}
        min={6}
        max={18}
        required
      ></input>
      <p>Constitution</p>
      <input
        name="con"
        type="number"
        onChange={handleChange}
        value={values.con}
        min={6}
        max={18}
        required
      ></input>
      <p>Intelligence</p>
      <input
        name="int"
        type="number"
        onChange={handleChange}
        value={values.int}
        min={6}
        max={18}
        required
      ></input>
      <p>Wisdom</p>
      <input
        name="wis"
        type="number"
        onChange={handleChange}
        value={values.wis}
        min={6}
        max={18}
        required
      ></input>
      <p>Charisma</p>
      <input
        name="cha"
        type="number"
        onChange={handleChange}
        value={values.cha}
        min={6}
        max={18}
        required
      ></input>

      <label>What is your proficiency bonus?</label>
      <input
        name="proficiency"
        type="number"
        onChange={handleChange}
        value={values.proficiency}
        min={0}
      ></input>

      <label>What is your armor bonus (No armor = 10)</label>
      <input
        name="armor"
        type="number"
        onChange={handleChange}
        value={values.armor}
        min={10}
      ></input>

      <label>What is your shield bonus</label>
      <input
        name="shield"
        type="number"
        onChange={handleChange}
        value={values.shield}
      ></input>

      <label>What is your max dexterity for your armor?</label>
      <input
          name="maxDex"
          type="number"
          onChange={handleChange}
          value={values.maxDex}
      ></input>

      <label>Is your character proficient in Perception?</label>
      <select
        name="perception"
        onChange={handleChange}
        value={values.perception}
        required
      >
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>

      <button className='border border-black m-2'
        type="submit"
      >
        Create character
        </button>
    </form>
  )
}

export default SimpleBuild;