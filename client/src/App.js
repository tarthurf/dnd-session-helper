import React, { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import io from 'socket.io-client';
import useForm from './utils/useForm';
import API from './utils/API';
import CreateCharacter from "./components/CreateCharacter";

const socket = io();

const App = props => {
  
  const [ characters, setCharacters ] = useState([]);
  
  useEffect(() => {
    API.getAllCharacters()
    .then(characters => {
      console.log(characters.data);
      const charactersArr = characters.data;
      setCharacters(charactersArr)
    })
  },[])

  return(
    <div>
      {console.log('characters', characters)}
      Select Character
      <CreateCharacter/>
    </div>
  )

}

export default App;