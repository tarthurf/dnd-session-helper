import React, { useState } from 'react';
import useForm from '../utils/useForm';
import API from '../utils/API';
import SimpleBuild from './characterForms/SimpleBuild';
import ComplexBuild from './characterForms/complex_build/ComplexBuild';

const CreateCharacter = props => {

  const [ complexBuild, setComplexBuild ] = useState(false)

  let state = props.state;
  const setState = props.setState;

  const characterSubmit = () => {
    console.log(values)
    values.currentHP = values.maxHP;
    API.createCharacter(values)
    setState(!state)
  }

  const { values, handleSubmit, handleChange } = useForm(
    {
      name: "",
      race: "",
      subrace: "",
      class: "",
      level: "",
      maxHP: "",
      currentHP: "",
      AC: "",
      initiative: "",
      perception: "",
    },
    characterSubmit
  )

  return(
    <React.Fragment>
    {complexBuild === false ? 
      <SimpleBuild state={state} setState={setState} />
      :
      <ComplexBuild state={state} setState={setState} />
    }
    {complexBuild === false ?
      <button onClick={() => setComplexBuild(!complexBuild)}>Complex Character</button>
      :
      <button onClick={() => setComplexBuild(!complexBuild)}>Simple Character</button>
    }
    <button className='border border-black m-2'
      onClick={()=> setState(!state)}
    >
      Choose a Character
    </button>
    </React.Fragment>
  )
}

export default CreateCharacter;