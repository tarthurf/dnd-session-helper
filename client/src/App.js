import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import UserContext from "./utils/UserContext";
import PrivateRoute from './PrivateRoute'
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from "./pages/Login";
import { AuthContext } from "./utils/AuthContext";
import Signup from "./pages/Signup";

const App = props => {

  const [ verified, setVerifiedState ] = useState({verified: false})

  const [activeUser, setActiveUser] = useState(
    {
      _id: "",
      username: "",
      gm: false,
      characters: []
    }
  );
  
  return(
    <AuthContext.Provider value={verified}>
    <UserContext.Provider value={activeUser}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
        </div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/admin" component={Admin} />
      </Router>
    </UserContext.Provider>
    </AuthContext.Provider>
  )

}

export default App;