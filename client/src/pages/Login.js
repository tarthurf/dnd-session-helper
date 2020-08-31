// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import UserContext from '../utils/UserContext';
// import useForm from '../utils/useForm';
// import API from '../utils/API';

// const Login = props => {

  

//   const userLogin = () => {
//     API.getUserByName(username)
//     .then(res => {
//       console.log(res.data[0]);
//       if (res.data[0].username === username) {
//         console.log("YAY!");
//         console.log(verified)
//         setVerifiedState(true);
//         setActiveUser(res.data[0]);
//         console.log(activeUser);
//         console.log(verified)
//       }
//     })
//     .catch(error => console.log(error))
//   }

//   const { values, handleChange, handleSubmit } = useForm(
//     {
//       username: "",
//       gm: false
//     },
//     userLogin
//   );

//   const username = values.username;

//   return(
//     <div>
//       <h1>Login</h1>
//       <form
//         onSubmit={handleSubmit}
//       >
//         <label>
//           Enter Username
//         </label>
//         <textarea
//           name="username"
//           placeholder="Not case sensitive"
//           onChange={handleChange}
//           value={values.username}
//           required
//         >
//         </textarea>
//         <input
//           type="submit"
//           value="Login"
//         />
//       </form>
//       <Link to="/Signup">Create New User</Link>
//     </div>
//   )
// }

// export default Login;