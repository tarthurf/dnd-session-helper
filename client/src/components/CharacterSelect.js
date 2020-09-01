import React, { useContext } from 'react';
import useForm from '../utils/useForm';
import UserContext from '../utils/UserContext';
import API from '../utils/API';

const CharacterSelect = props => {

  const characters = props.characters

  const [ userCharacter, setUserCharacter ] = useContext(UserContext);

  const selectCharacter = () => {
    API.getCharacterByName(values.name)
    .then(data => {
      const character = data.data[0];
      setUserCharacter = character;
      console.log("characer picked",userCharacter)
    })
    .catch(err => console.log(err))
  }

  const { values, handleChange, handleSubmit } = useForm(
    {name: ''},
    selectCharacter
  )

  return(
    <form onSubmit={handleSubmit}>
        <label>
          Select Character
        </label>
        <select
        onChange={handleChange}
          name="name"
          id="name"
          size="6"
        >
          {characters.map(char => (
            <option 
              key={char._id} 
              value={char.name}
            >
              {char.name}
            </option>
          ))}
        </select>
        <button type="submit">Confirm</button>
      </form>
  )

}

export default CharacterSelect;