import React from 'react';
import { Link } from 'react-router-dom';
// import UserContext from '../utils/UserContext';
import useForm from '../utils/useForm';
// import API from '../utils/API';

const Login = () => {

  const { values, handleChange, handleSubmit } = useForm(
    {
      username: "",
      gm: false
    },
    userLogin
  );

  const userLogin = () => {
    console.log('yay!')
  }

  return(
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
      <Link to="/Signup">Create New User</Link>
    </div>
  )
}

export default Login;