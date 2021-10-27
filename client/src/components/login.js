import React, { useContext } from 'react';
// import React, { useState, useEffect, useContext } from 'react';

// import { getAuth } from 'firebase/auth';
// import axios from 'axios';

import '../firebase/firebaseConfig';
import { AuthContext } from '../firebase/firebaseContext';

export const Login = () => {
  // const auth = getAuth();
  const { user } = useContext(AuthContext);
  console.log(user);

  // signInWithPopup, GoogleAuthProvider

  // const [token, setToken] = useState('');
  // const [error, setError] = [];

  // const [isAuth, setIsAuth] = useState(
  //   false || window.localStorage.getItem('auth') === 'true'
  // );

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsAuth(true);
  //       window.localStorage.setItem('auth', 'true');
  //       user.getIdToken().then((tokenId) => setToken(tokenId));
  //     } else {
  //       setIsAuth(false);
  //     }
  //   });
  // }, [auth]);

  // const sendToken = async (tokenId) => {
  //   await axios.get('/api/v1/auth', {
  //     headers: {
  //       Authorization: `Bearer ${tokenId}`,
  //     },
  //   });
  // };

  // useEffect(() => {
  //   if (token) sendToken(token);
  // }, [token]);

  // // Sign in with Google
  // const loginWithGoogle = () => {
  //   signInWithPopup(auth, new GoogleAuthProvider())
  //     .then((cred) => {
  //       if (cred) {
  //         setIsAuth(true);
  //         window.localStorage.setItem('auth', 'true');
  //       }
  //     })
  //     .catch((err) => setError([...error, err.message]));
  // };

  // Sign in with Email and Password
  // const signInWithEmail = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((cred) => {
  //       if (cred) {
  //         setIsAuth(true);
  //         window.localStorage.setItem('auth', 'true');
  //       }
  //     })
  //     .catch((err) => setError([...error, err.message]));
  // };

  // Logout
  // const logout = () => {
  //   auth.signOut();
  // };

  // Sign up with Email and Password
  // const signUpWithEmail = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((cred) => {
  //       if (cred) {
  //         setIsAuth(true);
  //         window.localStorage.setItem('auth', 'true');
  //       }
  //     })
  //     .catch((err) => setError([...error, err.message]));
  // };
  return (
    <div>
      {true ? (
        <h1>Hello, you are logged in</h1>
      ) : (
        <button type="submit">Login with google</button>
      )}
    </div>
  );
};
