import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useForm from '../utils/useForm';
import API from '../utils/API';

const Signup = () => {

  const newUser = () => {
    API.createUser(
      {
        username: values.username,
        gm: values.gm,
      }
    )
  }

  const { values, handleChange, handleSubmit } = useForm(
    {
      username: "",
      gm: false
    },
    newUser
  );

  return(
    <div>
      <h1>New User</h1>
      <form
        onSubmit={handleSubmit}
      >
        <label>
          Enter a username (not case sensitive)
        </label>
        <textarea
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={values.username}
          required
        >
        </textarea>
        <label>
          Are you a GM?
        </label>
        <select
          name="gm"
          onChange={handleChange}
          value={values.gm}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <input
          type="submit"
          value="Create User"
        />
      </form>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup;