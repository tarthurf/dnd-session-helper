import React, { useState, useEffect } from 'react';
import useForm from '../../../../utils/useForm';
const { BackgroundLanguageSwitch, RaceLanguageSwitch } = require('../../../../utils/switchHelpers');
const { formatString } = require('../../../../utils/helpers');

const BuildStage2 = props => {

  let buildStage = props.buildStage;
  const setBuildStage = props.setBuildStage;
  const charValues = props.charValues

  const { values, handleSubmit, handleChange } = useForm(charValues);

  const languages = ["common", "dwarvish", "elvish", "giant", "gnomish", "goblin", "halfling", "orc", "abyssal", "celestial", "draconic", "deepSpeech", "infernal", "promordial", "sylvan", "undercommon"];
  const raceLanguages = RaceLanguageSwitch(values.race);

  const availableLanguages = () => {
    raceLanguages.forEach(obj => {
      if (typeof obj === "string") {
        languages.forEach((lang, i) => {
          if (obj === lang) {
            languages.splice(i, 1);
            console.log(languages.length)
          }
        })
      } else if (typeof obj === "number") {
        console.log(languageCount)
        languageCountState(languageCount + obj)
      }
    })
    console.log(languageCount)
  }

  const [languageCount, languageCountState] = useState();

  useEffect(() => {
    languageCountState(BackgroundLanguageSwitch(values.background));
    availableLanguages();
  },[])

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <label>
        What is your character's background?
      </label>
      <select
        name="background"
        onChange={handleChange}
        value={values.background}
        required
      >
        <option value="acoloyte">Acoloyte</option>
        <option value="charlatan">Charlatan</option>
        <option value="criminal">Criminal</option>
        <option value="entertainer">Entertainer</option>
        <option value="folkHero">Folk Hero</option>
        <option value="gladiator">Gladiator</option>
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

      <p>Choose your languages:</p>
      <p>Select {languageCount} languages</p>
      <form className='flex flex-col items-center gap-y-2'
        onSubmit={handleSubmit}
      >
        {languages.map((lang, i) => (
          <React.Fragment key={i + 1 * 20}>
            <label key={i + 1 * 10} htmlFor="language">{formatString(lang)}</label>
            <input
              key={i}
              name="language"
              type="checkbox"
              onChange={handleChange}
              value={lang}
            ></input>
          </React.Fragment>
        ))}
        <button
          type="submit"
        >
          Select languages
    </button>
      </form>

      <button
        onClick={() => setBuildStage(1)}
      >
        Go Back
      </button>
      <button
        onClick={() => setBuildStage(3)}
      >
        Next
      </button>
    </div>
  )
}

export default BuildStage2;