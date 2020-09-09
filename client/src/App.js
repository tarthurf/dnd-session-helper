import React, { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import io from 'socket.io-client';
import API from './utils/API';
import CreateCharacter from "./components/CreateCharacter";
import CharacterPool from "./components/CharacterPool";
import Navbar from "./components/nav/Navbar";

const socket = io();

const App = () => {

  const [createCharacterState, setCreateCharacterState] = useState(false)

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
        setUserCharacter(character);
        console.log('UserCharacter', userCharacter)
        socket.emit('add-user-character', character);
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
      currentHP: "",
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
    <UserContext.Provider value={{ userCharacter }}>
      <div>
        <Navbar socket={socket} />
        {userCharacter.name === "" ?
          createCharacterState === false ?
            <div className='flex flex-col items-center'>
              <form className='text-2xl flex flex-col items-center'
                onSubmit={selectCharacter}
              >
                <p>Select a character</p>
                <select className='border border-black'
                  value={characterSelect}
                  onChange={handleCharacterSelection}
                  id="name"
                  size="10"
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
                <button className='border border-black m-2'
                  type="submit"
                >
                  Confirm
                </button>
              </form>
              <button className='border border-black m-2'
                onClick={() => setCreateCharacterState(!createCharacterState)}
              >
                Create a Character
              </button>
            </div>
            :
            <CreateCharacter
              state={createCharacterState}
              setState={setCreateCharacterState}
            />
          :
          <div>
            <CharacterPool socket={socket}/>
          </div>
        }
      </div>
    </UserContext.Provider>
  )
}

export default App;