import React, { useState, useEffect } from 'react';
import useForm from '../../../../utils/useForm';
const { formatString } = require('../../../../utils/stringFormatHelper')
const { ClassSkillsSwitch } = require('../../../../utils/switchHelpers')
const { ClassSkillTotalSwitch } = require('../../../../utils/switchHelpers')

const BuildStage1 = props => {

  let buildStage = props.buildStage;
  const setBuildStage = props.setBuildStage;
  const charValues = props.charValues

  
  const formDataCapture = () => {
    const checkboxes = document.getElementsByName("skills");
    const selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked == true);
    selectedCboxes.forEach(box => {
      console.log(box.defaultValue);
      Object.entries(charValues.skills).map(skill => {
        if (box.defaultValue === skill[0]) skill[1].trained = true;
      });
    });
    console.log(charValues.skills);
  }

  const { values, handleSubmit, handleChange } = useForm(charValues, formDataCapture);

  const skillsArray = ClassSkillsSwitch(values.class);
  const skillsAmmount = ClassSkillTotalSwitch(values.class);

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <p>Choose Skill proficiencies:</p>
      <p>Select {skillsAmmount} skills</p>
      <form className='flex flex-col items-center gap-y-2'
        onSubmit={handleSubmit}
      >
        {skillsArray.map((skill, i) => (
          <React.Fragment key={i+1*20}>
            <label key={i+1*10} htmlFor="skills">{formatString(skill)}</label>
            <input
              key={i}
              name="skills"
              type="checkbox"
              onChange={handleChange}
              value={skill}
            ></input>
          </React.Fragment>
        ))}
        <button
          type="submit"
        >
          Select
        </button>
      </form>
      <React.Fragment>
        <button
          onClick={() => setBuildStage(0)}
        >
          Go Back
        </button>
        <button
          onClick={() => setBuildStage(2)}
        >
          Next
        </button>
      </React.Fragment>
    </div>
  )
}

export default BuildStage1;