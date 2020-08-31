import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useHistory
} from "react-router-dom";
import UserContext from "./utils/UserContext";
import PrivateRoute from './PrivateRoute'
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from "./pages/Login";
import { AuthContext } from "./utils/AuthContext";
import Signup from "./pages/Signup";
import useForm from './utils/useForm';
import API from './utils/API';

const App = props => {

  const [ verified, setVerifiedState ] = useState(false)

  const [ activeUser, setActiveUser ] = useState(
    { 
      gm: false,
      characters: [],
      _id: "",
      username: ""
    }
  );

  const userLogin = () => {
    API.getUserByName(values.username)
    .then(res => {
      console.log(res.data[0]);
      if (res.data[0].username) setActiveUser(res.data[0]);
    }).then(() => {
      if (activeUser.username !== "")
      setVerifiedState(true);
    })
    .catch(error => console.log(error))
  }

  const { values, handleChange, handleSubmit } = useForm(
    {username: ""},
    userLogin
  );

  // useEffect(() => {
  //   userLogin();
  // },[activeUser])

  return(
      <UserContext.Provider value={{ activeUser, setActiveUser }}>
        {verified === false ?
          <div>
            <h1>Login</h1>
            <form
              onSubmit={handleSubmit}
            >
              <label>
                Enter Username
              </label>
              <textarea
                name="username"
                placeholder="Not case sensitive"
                onChange={handleChange}
                value={values.username}
                required
              >
              </textarea>
              <input
                type="submit"
                value="Login"
              />
            </form>
          </div>
          :
          <Home />
        }
      </UserContext.Provider>
  )

}

export default App;