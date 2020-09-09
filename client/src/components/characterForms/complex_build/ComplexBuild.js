import React, { useState, useEffect } from 'react';
import useForm from '../../../utils/useForm';
import API from '../../../utils/API';
import BuildStage0 from './build_stages/BuildStage0';
import BuildStage1 from './build_stages/BuildStage1';
import BuildStage2 from './build_stages/BuildStage2';

const ComplexBuild = props => {

  let state = props.state;
  const setState = props.setState;

  const [buildStage, setBuildStage] = useState(0)

  const characterSubmit = () => {
    console.log(values)
    values.currentHP = values.maxHP;
    API.createCharacter(values)
    setState(!state)
  }

  const { values, handleSubmit, handleChange } = useForm(
    {
      name: "butt",
      race: "dragonborn",
      subrace: "black",
      class: "barbarian",
      level: 1,
      abilityScores: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      },
      skills: {
        acrobatics: {
          trained: false
        },
        animalHandling: {
          trained: false
        },
        arcana: {
          trained: false
        },
        athletics: {
          trained: false
        },
        deception: {
          trained: false
        },
        history: {
          trained: false
        },
        insight: {
          trained: false
        },
        intimidation: {
          trained: false
        },
        investigation: {
          trained: false
        },
        medicine: {
          trained: false
        },
        nature: {
          trained: false
        },
        perception: {
          trained: false
        },
        performance: {
          trained: false
        },
        persuasion: {
          trained: false
        },
        religion: {
          trained: false
        },
        sleightOfHand: {
          trained: false
        },
        stealth: {
          trained: false
        },
        survival: {
          trained: false
        },
      },
      background: "acolyte",
      languages: []
    },
    characterSubmit
  )

  switch (buildStage) {
    case 0 :
      return (
        <BuildStage0 buildStage={buildStage} setBuildStage={setBuildStage} charValues={values} />
      );
      break;
    case 1 :
      return (
        <BuildStage1 buildStage={buildStage} setBuildStage={setBuildStage} charValues={values} />
      )
      break;
    case 2 :
      return (
        <BuildStage2 buildStage={buildStage} setBuildStage={setBuildStage} charValues={values} />
      )
      break;
  } 
}

export default ComplexBuild;