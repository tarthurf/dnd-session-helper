import React, { useState, useEffect } from "react";
// import UserContext from "./utils/UserContext";
import io from 'socket.io-client';
// import useForm from './utils/useForm';
import API from './utils/API';
import CharacterCard from "./components/CharacterCard";
// import CreateCharacter from "./components/CreateCharacter";
// import CharacterSelect from "./components/CharacterSelect";

const socket = io();

const App = () => {

  // Sets character Array for users to select from
  const [characters, setCharacters] = useState([]);

  // Handles character selection for user
  const [characterSelect, setCharacterSelect] = useState("");
  // Handles Character selection value change
  const handleCharacterSelection = e => {
    setCharacterSelect(e.target.value)
  };
  // Takes character select state and grabs the character info from an api
  const selectCharacter = e => {
    e.preventDefault();
    API.getCharacterByName(characterSelect)
      .then(char => {
        const character = char.data[0];
        setUserCharacter(character)
      })
      .catch(err => console.log(err))
  }

  // State for users selected character
  const [userCharacter, setUserCharacter] = useState(
    {
      name: "",
      race: "",
      subrace: "",
      class: "",
      level: "",
      maxHP: "",
      AC: "",
      initiative: "",
      perception: "",
    }
  );

  // Gets all created characters on page load
  useEffect(() => {
    API.getAllCharacters()
      .then(characters => {
        console.log(characters.data);
        const charactersArr = characters.data;
        setCharacters(charactersArr)
      })
  }, [])

  return (
    <div>
      {console.log('user character', userCharacter)}
      {userCharacter.name === "" ?
        <form onSubmit={selectCharacter}>
          <label>
            Select Character
        </label>
          <select
            value={characterSelect}
            onChange={handleCharacterSelection}
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
        :
        <div>
              <CharacterCard character={userCharacter} />
        </div>
      }
    </div>
  )

}

export default App;