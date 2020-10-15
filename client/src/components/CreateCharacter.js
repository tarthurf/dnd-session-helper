import React from 'react';
import CharcterBuild from './characterForms/CharacterBuild';

const CreateCharacter = props => {

  let state = props.state;

  const setState = props.setState;

  // renders the character creation view on state change
  return (
    <div>
      <CharcterBuild state={state} setState={setState} />
      <button className='border border-black m-2'
        onClick={() => setState(!state)}
      >
        Choose a Character
      </button>
    </div>
  )
}

export default CreateCharacter;