import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Home = props => {

  const { _id, username, characters, gm } = useContext(UserContext);

  return(
    <div>
      Hello!
      id: {_id}
      username: {username}
      gm: {gm}
    </div>
  )
}

export default Home;